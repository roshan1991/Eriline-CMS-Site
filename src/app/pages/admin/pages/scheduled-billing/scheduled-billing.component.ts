import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../../../services/cms.service';

@Component({
  selector: 'app-admin-scheduled-billing',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './scheduled-billing.component.html'
})
export class AdminScheduledBillingComponent implements OnInit {
  contents: any[] = [];
  scheduledInvoices = new BehaviorSubject<any[]>([]);
  editableClients$ = new BehaviorSubject<any[]>([]);
  message = '';
  loading = false;

  frequencies = ['Monthly', 'Quarterly', 'Bi-annually', 'Annually'];

  newScheduledInvoice: any = {
    client_name: '',
    service_name: '',
    amount: 0,
    frequency: 'Monthly',
    start_date: new Date().toISOString().split('T')[0]
  };

  constructor(private cms: CmsService) { }

  ngOnInit() {
    this.loadScheduledInvoices();
    this.loadClients();
  }

  loadClients() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      const clientsItem = this.contents.find(i => i.content_key === 'clients_list');
      if (clientsItem) {
        try {
          this.editableClients$.next(JSON.parse(clientsItem.content_value));
        } catch (e) {
          this.editableClients$.next([]);
        }
      }
    });
  }

  loadScheduledInvoices() {
    this.cms.getScheduledInvoices().subscribe(data => {
      this.scheduledInvoices.next(data);
    });
  }

  saveScheduledInvoice() {
    this.cms.createScheduledInvoice(this.newScheduledInvoice).subscribe(() => {
      this.showMessage('Scheduled invoice created successfully!');
      this.loadScheduledInvoices();
      this.newScheduledInvoice = {
        client_name: '',
        service_name: '',
        amount: 0,
        frequency: 'Monthly',
        start_date: new Date().toISOString().split('T')[0]
      };
    });
  }

  deleteScheduledInvoice(id: number) {
    if (confirm('Are you sure you want to delete this scheduled invoice?')) {
      this.cms.deleteScheduledInvoice(id).subscribe(() => {
        this.showMessage('Scheduled invoice deleted');
        this.loadScheduledInvoices();
      });
    }
  }

  toggleScheduledInvoiceStatus(sched: any) {
    const newStatus = sched.status === 'Active' ? 'Paused' : 'Active';
    this.cms.updateScheduledInvoiceStatus(sched.id, newStatus).subscribe(() => {
      sched.status = newStatus;
      this.showMessage(`Schedule for ${sched.client_name} marked as ${newStatus}`);
    });
  }

  triggerScheduledInvoiceNow(sched: any) {
    this.loading = true;
    this.cms.triggerScheduledInvoice(sched.id).subscribe({
      next: (res: any) => {
        this.showMessage(res.message || 'Invoice generated successfully!');
        this.loadScheduledInvoices();
        this.loading = false;
      },
      error: (err) => {
        this.showMessage('Error triggering scheduled invoice: ' + err.message);
        this.loading = false;
      }
    });
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3500);
  }
}
