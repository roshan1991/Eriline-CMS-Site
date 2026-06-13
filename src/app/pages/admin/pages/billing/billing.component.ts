import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../../../services/cms.service';

@Component({
    selector: 'app-admin-billing',
    standalone: true,
    imports: [CommonModule, FormsModule, NgSelectModule],
    templateUrl: './billing.component.html'
})
export class AdminBillingComponent implements OnInit {
    contents: any[] = [];
    invoices: any = new BehaviorSubject<any[]>([]);
    editableClients$ = new BehaviorSubject<any[]>([]);
    message = '';

    newInvoice: any = {
        invoice_number: 'INV-' + Date.now().toString().slice(-6),
        client_name: '',
        issue_date: new Date().toISOString().split('T')[0],
        amount: 0,
        status: 'Pending',
        items: [{ description: '', qty: 1, price: 0 }]
    };

    constructor(private cms: CmsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.loadInvoices();
        this.loadClients();

        // Check if clientName was passed via route query params
        this.route.queryParams.subscribe(params => {
            if (params['client']) {
                this.newInvoice.client_name = params['client'];
            }
        });
    }

    loadClients() {
        this.cms.getContent().subscribe(data => {
            this.contents = data;
            const clientsItem = this.contents.find(i => i.content_key === 'clients_list');
            if (clientsItem) {
                console.log(JSON.parse(clientsItem.content_value))
                try { this.editableClients$.next(JSON.parse(clientsItem.content_value)); } catch (e) { this.editableClients$.next([]); }
            }
        });
    }

    loadInvoices() {
        this.cms.getInvoices().subscribe(data => {
            this.invoices.next(data.map(inv => ({
                ...inv,
                items: typeof inv.items === 'string' ? JSON.parse(inv.items) : inv.items
            })));
        });
    }

    addInvoiceItem() {
        this.newInvoice.items.push({ description: '', qty: 1, price: 0 });
    }

    removeInvoiceItem(index: number) {
        this.newInvoice.items.splice(index, 1);
    }

    calculateTotal() {
        this.newInvoice.amount = this.newInvoice.items.reduce((acc: number, item: any) => acc + (item.qty * item.price), 0);
        return this.newInvoice.amount;
    }

    saveInvoice() {
        this.calculateTotal();
        this.cms.createInvoice(this.newInvoice).subscribe(() => {
            this.showMessage('Invoice generated successfully!');
            this.loadInvoices();
            this.newInvoice = {
                invoice_number: 'INV-' + Date.now().toString().slice(-6),
                client_name: '',
                issue_date: new Date().toISOString().split('T')[0],
                amount: 0,
                status: 'Pending',
                items: [{ description: '', qty: 1, price: 0 }]
            };
        });
    }

    deleteInvoice(id: number) {
        if (confirm('Are you sure you want to delete this invoice?')) {
            this.cms.deleteInvoice(id).subscribe(() => {
                this.showMessage('Invoice deleted');
                this.loadInvoices();
            });
        }
    }

    toggleInvoiceStatus(inv: any) {
        const newStatus = inv.status === 'Paid' ? 'Pending' : 'Paid';
        this.cms.updateInvoiceStatus(inv.id, newStatus).subscribe(() => {
            inv.status = newStatus;
            this.showMessage(`Invoice #${inv.invoice_number} marked as ${newStatus}`);
        });
    }

    sendEmail(inv: any) {
        inv.sendingEmail = true;
        this.cms.sendInvoiceEmail(inv.id).subscribe({
            next: (res: any) => {
                this.showMessage(res.message || 'Invoice email sent successfully!');
                inv.sendingEmail = false;
            },
            error: (err) => {
                const errMsg = err.error?.message || err.error?.error || err.message || 'Failed to send email';
                this.showMessage('Error: ' + errMsg);
                inv.sendingEmail = false;
            }
        });
    }

    printInvoice(inv: any) {
        const client = this.editableClients$.value.find(c => c.name === inv.client_name);
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        const itemsHtml = inv.items.map((it: any, index: number) => `
        <tr style="background: ${index % 2 === 0 ? '#fff' : '#ffe9da'};">
            <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: 500;">${it.description}</td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: center;">${it.qty || ''}</td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right; font-weight: 500;">${Number(it.price * (it.qty || 1)).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        </tr>
    `).join('');

        printWindow.document.write(`
        <html>
            <head>
                <title>Eriline Invoice - ${inv.invoice_number}</title>
                <style>
                    @page { size: A4; margin: 0; }
                    body { 
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                        margin: 0; 
                        padding: 0;
                        -webkit-print-color-adjust: exact;
                        color: #333;
                    }
                    .a4-container {
                        width: 210mm;
                        min-height: 297mm;
                        margin: auto;
                        background: #fff;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .top-header {
                        height: 120px;
                        display: flex;
                        align-items: flex-end;
                        position: relative;
                        overflow: hidden;
                    }
                    .header-accent-yellow {
                        position: absolute;
                        top: 0; left: 0;
                        width: 45%;
                        height: 100px;
                        background: #F2A93B;
                        clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
                    }
                    .header-accent-navy {
                        position: absolute;
                        top: 20px; left: 40%;
                        width: 60%;
                        height: 80px;
                        background: #0A214D;
                        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
                    }
                    .header-logo-container {
                        position: absolute;
                        top: 25px;
                        left: 50px;
                        z-index: 10;
                        background: #0A214D;
                        padding: 10px 20px;
                        border-radius: 4px;
                        border-left: 8px solid #F2A93B;
                    }
                    .date-box {
                        position: absolute;
                        top: 70px;
                        right: 0;
                        background: #e9ecef;
                        padding: 8px 40px;
                        font-weight: 500;
                        font-size: 14px;
                    }
                    .client-info {
                        padding: 40px 60px;
                        font-size: 15px;
                        line-height: 1.6;
                    }
                    .items-table {
                        width: calc(100% - 120px);
                        margin: 0 60px;
                        border-collapse: collapse;
                    }
                    .items-table th {
                        background: #f18c35;
                        color: white;
                        text-align: left;
                        padding: 12px;
                        font-size: 18px;
                        text-transform: uppercase;
                    }
                    .totals-section {
                        margin: 20px 60px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }
                    .totals-row {
                        display: grid;
                        grid-template-columns: 150px 150px;
                        text-align: right;
                        padding: 5px 0;
                    }
                    .note-box {
                        margin: 40px 60px;
                        border: 1.5px solid #f18c35;
                        padding: 15px 25px;
                        border-radius: 4px;
                    }
                    .footer-info {
                        margin-top: auto;
                        padding: 40px 60px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        font-size: 14px;
                        font-weight: 500;
                    }
                    .footer-accent {
                        height: 30px;
                        display: flex;
                    }
                    .footer-yellow { background: #F2A93B; flex: 1; clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%); }
                    .footer-navy { background: #0A214D; width: 40%; }
                    
                    @media print {
                        .no-print { display: none; }
                        body { margin: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="a4-container">
                    <div class="top-header">
                        <div class="header-accent-yellow"></div>
                        <div class="header-accent-navy"></div>
                        <div class="header-logo-container">
                            <img src="${window.location.origin}/logo.png" style="height: 45px; display: block;">
                        </div>
                        <div class="date-box">
                            Date: ${new Date(inv.issue_date).toLocaleDateString('en-GB')}
                        </div>
                    </div>

                    <div class="client-info">
                        <p style="margin-bottom: 5px;">To,</p>
                        <h2 style="margin: 0; color: #000;">${inv.client_name}</h2>
                        ${client && client.address ? `<p style="white-space: pre-line; margin: 5px 0;">${client.address}</p>` : ''}
                        ${client && client.phone ? `<p style="margin: 5px 0; display: inline-block;">${client.phone}</p>` : ''}
                        ${client && client.email ? `<p style="margin: 5px 0;">${client.email}</p>` : ''}
                    </div>

                    <table class="items-table" style="width: calc(100% - 120px); margin: 0 60px; border-collapse: collapse;">
                        <thead>
                            <tr>
                                <th style="width: 65%; text-align: left; padding: 12px; background: #f18c35; color: white;">Description</th>
                                <th style="text-align: center; width: 15%; padding: 12px; background: #f18c35; color: white;">QTY</th>
                                <th style="text-align: right; width: 20%; padding: 12px; background: #f18c35; color: white;">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                            <tr style="height: 40px;"><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>

                    <div class="totals-section">
                        <div class="totals-row">
                            <span style="color: #666;">Total</span>
                            <span style="font-weight: bold;">${Number(inv.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div class="totals-row">
                            <span style="color: #666;">Paid</span>
                            <span>-0.00</span>
                        </div>
                         <div class="totals-row" style="border-top: 1px solid #ddd; margin-top: 5px; padding-top: 10px; font-size: 20px;">
                            <span style="font-weight: bold;">Total</span>
                            <span style="font-weight: bold; color: #0A214D;">${Number(inv.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                        </div>
                    </div>

                    <div class="note-box">
                        <strong style="color: #d9534f; font-size: 18px;">Note:</strong>
                        <ul style="margin: 10px 0; color: #444;">
                            <li>Thank you for choosing Eriline Software Solutions.</li>
                            <li>Payments are due within 15 days of issue.</li>
                        </ul>
                    </div>

                    <div class="footer-info">
                        <p style="margin: 5px 0;">roshansiva1991@gmail.com ✉️</p>
                        <p style="margin: 5px 0;">+94719195591 📞</p>
                        <p style="margin: 5px 0;">Eriline.lk / Eriline.co 🌐</p>
                    </div>

                    <div class="footer-accent">
                        <div style="background: #0A214D; width: 50%;"></div>
                        <div style="background: #F2A93B; flex: 1; clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);"></div>
                    </div>

                    <div class="no-print" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);">
                         <button onclick="window.print()" style="padding: 15px 40px; background: #0A214D; color: white; border: none; border-radius: 50px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">🖨️ PRINT INVOICE / SAVE PDF</button>
                    </div>
                </div>
            </body>
        </html>
    `);
        printWindow.document.close();
    }

    showMessage(msg: string) {
        this.message = msg;
        setTimeout(() => this.message = '', 3000);
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }
}
