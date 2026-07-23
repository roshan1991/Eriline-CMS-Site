const { pool } = require('./config/db');
require('dotenv').config();
const path = require('path');
const PDFDocument = require('pdfkit');

function generateInvoicePDF(invoice, items, clientInfo) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ margin: 50 });
        const buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            const pdfData = Buffer.concat(buffers);
            resolve(pdfData);
        });
        doc.on('error', reject);

        // Header Section (White background with Logo on Left and Details on Right)
        const logoPath = path.join(__dirname, '../public/logo.png');
        try {
            doc.image(logoPath, 50, 40, { height: 50 });
        } catch (err) {
            console.error('Error loading invoice logo:', err);
            doc.fillColor('#0A214D')
                .fontSize(20)
                .text('Eriline', 50, 40, { font: 'Helvetica-Bold' });
        }

        doc.fillColor('#666666')
            .fontSize(9)
            .text('+94 77 949 5303', 400, 42, { align: 'right', width: 162 })
            .text('info@eriline.lk', 400, 57, { align: 'right', width: 162 })
            .text('Colombo, Sri Lanka', 400, 72, { align: 'right', width: 162 });

        doc.strokeColor('#333333')
            .lineWidth(1.5)
            .moveTo(50, 110)
            .lineTo(562, 110)
            .stroke();

        doc.fillColor('#333333')
            .fontSize(20)
            .text('INVOICE', 50, 135, { align: 'left' });

        doc.fontSize(10)
            .text(`Invoice Number: ${invoice.invoice_number}`, 50, 165)
            .text(`Date of Issue: ${new Date(invoice.issue_date).toLocaleDateString('en-GB')}`, 50, 180)
            .text(`Status: ${invoice.status}`, 50, 195);

        doc.fontSize(12)
            .fillColor('#0A214D')
            .text('Billed To:', 350, 135)
            .fontSize(10)
            .fillColor('#333333')
            .text(invoice.client_name, 350, 155, { font: 'Helvetica-Bold' })
            .text(clientInfo.address || '', 350, 170)
            .text(clientInfo.phone || '', 350, 185)
            .text(clientInfo.email || '', 350, 200);

        doc.strokeColor('#dddddd')
            .lineWidth(1)
            .moveTo(50, 225)
            .lineTo(562, 225)
            .stroke();

        let y = 245;
        doc.fillColor('#0A214D')
            .rect(50, y, 512, 25)
            .fill();

        doc.fillColor('#FFFFFF')
            .fontSize(10)
            .text('Description', 60, y + 8)
            .text('Qty', 350, y + 8, { width: 50, align: 'center' })
            .text('Unit Price', 410, y + 8, { width: 70, align: 'right' })
            .text('Amount', 490, y + 8, { width: 60, align: 'right' });

        y += 25;

        doc.fillColor('#333333');
        items.forEach((item, index) => {
            const qty = item.qty || 1;
            const price = item.price || 0;
            const total = qty * price;

            if (index % 2 === 1) {
                doc.fillColor('#FFE9DA')
                    .rect(50, y, 512, 20)
                    .fill();
            }

            doc.fillColor('#333333')
                .text(item.description || '', 60, y + 5)
                .text(qty.toString(), 350, y + 5, { width: 50, align: 'center' })
                .text(`Rs.${Number(price).toFixed(2)}`, 410, y + 5, { width: 70, align: 'right' })
                .text(`Rs.${Number(total).toFixed(2)}`, 490, y + 5, { width: 60, align: 'right' });

            y += 20;
        });

        y += 10;
        doc.strokeColor('#dddddd')
            .lineWidth(1)
            .moveTo(50, y)
            .lineTo(562, y)
            .stroke();

        y += 10;
        doc.fontSize(12)
            .fillColor('#0A214D')
            .text('Total Due:', 350, y)
            .text(`Rs.${Number(invoice.amount).toFixed(2)}`, 490, y, { width: 60, align: 'right' });

        y += 50;

        doc.fillColor('#333333')
            .fontSize(8)
            .text('Thank you for choosing Eriline Software Solutions.', 50, y)
            .text('Payments are due within 15 days of issue.', 50, y + 15);

        doc.fillColor('#0A214D')
            .fontSize(10)
            .text('Bank Details:', 350, y, { font: 'Helvetica-Bold' });

        doc.fillColor('#333333')
            .fontSize(8)
            .text('Bank Name: Commercial Bank', 350, y + 15)
            .text('Account Name: Roshan Sivalingam', 350, y + 27)
            .text('Account No: 8100098090', 350, y + 39)
            .text('Branch: Wellawatta', 350, y + 51)
            .text('Swift code: CCEYLKLX', 350, y + 63);

        doc.fillColor('#E05F2B')
            .moveTo(0, 792)
            .lineTo(0, 680)
            .quadraticCurveTo(160, 680, 1140, 792)
            .closePath()
            .fill();

        doc.fillColor('#F2A93B')
            .moveTo(0, 792)
            .lineTo(0, 695)
            .quadraticCurveTo(130, 695, 1100, 792)
            .closePath()
            .fill();

        doc.fillColor('#0A214D')
            .moveTo(0, 792)
            .lineTo(0, 710)
            .quadraticCurveTo(100, 710, 1020, 792)
            .closePath()
            .fill();

        doc.end();
    });
}

async function test(invoiceId) {
    try {
        const [invRows] = await pool.query('SELECT * FROM invoices WHERE id = ?', [invoiceId]);
        console.log('Invoice rows:', invRows);
        if (invRows.length === 0) throw new Error('Invoice not found');

        const invoice = invRows[0];
        const items = typeof invoice.items === 'string' ? JSON.parse(invoice.items) : invoice.items;

        const [contentRows] = await pool.query("SELECT content_value FROM site_content WHERE content_key = 'clients_list'");
        let clientEmail = '';
        let clientAddress = '';
        let clientPhone = '';

        if (contentRows.length > 0) {
            try {
                const clients = JSON.parse(contentRows[0].content_value);
                const client = clients.find(c => c.name === invoice.client_name);
                if (client) {
                    clientEmail = client.email || '';
                    clientAddress = client.address || '';
                    clientPhone = client.phone || '';
                }
            } catch (e) {
                console.error('Error parsing clients_list:', e);
            }
        }

        console.log('Client Phone:', clientPhone);
        if (!clientPhone) {
            throw new Error(`Client phone number not found/configured for ${invoice.client_name}`);
        }

        const pdfBuffer = await generateInvoicePDF(invoice, items, {
            email: clientEmail,
            address: clientAddress,
            phone: clientPhone
        });
        console.log('PDF generated, size:', pdfBuffer.length);

        const gatewayUrl = process.env.WHATSAPP_GATEWAY_URL || 'https://whatsapp-gateway-production-a45a.up.railway.app/api/send';
        const apiKey = process.env.WHATSAPP_API_KEY || 'wapp_key_110dae200d477da5817590c826fa2a83e764f4e1b601ecb8';
        console.log('Gateway URL:', gatewayUrl);
        console.log('API Key:', apiKey);

        const payload = {
            number: clientPhone,
            mediaData: pdfBuffer.toString('base64'),
            mimetype: 'application/pdf',
            filename: `Invoice_${invoice.invoice_number}.pdf`,
            caption: `Dear ${invoice.client_name},\n\nPlease find attached invoice #${invoice.invoice_number} for your recent services.\nTotal Due: Rs${Number(invoice.amount).toFixed(2)}\n\nBest regards,\nEriline Software Solutions`
        };

        console.log('Sending to WhatsApp...');
        const response = await fetch(gatewayUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(payload)
        });

        console.log('Response status:', response.status);
        const responseText = await response.text();
        console.log('Response text:', responseText);
        process.exit(0);
    } catch (err) {
        console.error('Test error:', err);
        process.exit(1);
    }
}

// Let's get the last invoice ID to test
async function run() {
    const [rows] = await pool.query('SELECT id FROM invoices ORDER BY id DESC LIMIT 1');
    if (rows.length > 0) {
        console.log('Testing with invoice ID:', rows[0].id);
        await test(rows[0].id);
    } else {
        console.log('No invoices found.');
        process.exit(1);
    }
}

run();
