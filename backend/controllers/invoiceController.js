const { pool } = require('../config/db');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

exports.getAllInvoices = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM invoices ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createInvoice = async (req, res) => {
    const { invoice_number, client_name, amount, issue_date, status, items } = req.body;
    try {
        await pool.query(
            'INSERT INTO invoices (invoice_number, client_name, amount, issue_date, status, items) VALUES (?, ?, ?, ?, ?, ?)',
            [invoice_number, client_name, amount, issue_date, status, JSON.stringify(items)]
        );
        res.json({ message: 'Invoice created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteInvoice = async (req, res) => {
    try {
        await pool.query('DELETE FROM invoices WHERE id = ?', [req.params.id]);
        res.json({ message: 'Invoice deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateInvoiceStatus = async (req, res) => {
    const { status } = req.body;
    try {
        await pool.query('UPDATE invoices SET status = ? WHERE id = ?', [status, req.params.id]);
        res.json({ message: 'Status updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllScheduledInvoices = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scheduled_invoices ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createScheduledInvoice = async (req, res) => {
    const { client_name, service_name, amount, frequency, start_date } = req.body;
    try {
        await pool.query(
            'INSERT INTO scheduled_invoices (client_name, service_name, amount, frequency, start_date, next_bill_date) VALUES (?, ?, ?, ?, ?, ?)',
            [client_name, service_name, amount, frequency, start_date, start_date]
        );
        res.json({ message: 'Scheduled maintenance invoice created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteScheduledInvoice = async (req, res) => {
    try {
        await pool.query('DELETE FROM scheduled_invoices WHERE id = ?', [req.params.id]);
        res.json({ message: 'Scheduled invoice deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateScheduledInvoiceStatus = async (req, res) => {
    const { status } = req.body;
    try {
        await pool.query('UPDATE scheduled_invoices SET status = ? WHERE id = ?', [status, req.params.id]);
        res.json({ message: 'Scheduled invoice status updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.triggerScheduledInvoice = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scheduled_invoices WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Scheduled invoice not found' });
        
        const sched = rows[0];
        const invoiceNum = 'INV-SCH-' + Date.now().toString().slice(-5);
        const issueDate = new Date().toISOString().split('T')[0];
        const items = [{
            description: `Maintenance fee for ${sched.service_name}`,
            qty: 1,
            price: sched.amount
        }];

        const conn = await pool.getConnection();
        try {
            await conn.beginTransaction();
            
            // 1. Create the real invoice
            await conn.query(
                'INSERT INTO invoices (invoice_number, client_name, amount, issue_date, status, items) VALUES (?, ?, ?, ?, ?, ?)',
                [invoiceNum, sched.client_name, sched.amount, issueDate, 'Pending', JSON.stringify(items)]
            );
            
            // 2. Calculate next bill date
            const currentNextDate = new Date(sched.next_bill_date);
            if (sched.frequency === 'Monthly') {
                currentNextDate.setMonth(currentNextDate.getMonth() + 1);
            } else if (sched.frequency === 'Quarterly') {
                currentNextDate.setMonth(currentNextDate.getMonth() + 3);
            } else if (sched.frequency === 'Bi-annually') {
                currentNextDate.setMonth(currentNextDate.getMonth() + 6);
            } else if (sched.frequency === 'Annually') {
                currentNextDate.setFullYear(currentNextDate.getFullYear() + 1);
            }
            const newNextDateStr = currentNextDate.toISOString().split('T')[0];
            
            // 3. Update the scheduled invoice record
            await conn.query(
                'UPDATE scheduled_invoices SET next_bill_date = ? WHERE id = ?',
                [newNextDateStr, sched.id]
            );
            
            await conn.commit();
            res.json({ message: `Invoice ${invoiceNum} generated successfully!` });
        } catch (err) {
            await conn.rollback();
            throw err;
        } finally {
            conn.release();
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Helper function to generate PDF
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

        // Header Section
        doc.fillColor('#0A214D')
           .rect(0, 0, 612, 100) // Letter width is 612
           .fill();

        doc.fillColor('#F2A93B')
           .rect(0, 100, 612, 10)
           .fill();

        doc.fillColor('#FFFFFF')
           .fontSize(24)
           .text('ERILINE SOFTWARE SOLUTIONS', 50, 40, { align: 'left' });

        doc.fontSize(10)
           .text('roshansiva1991@gmail.com | +94719195591 | Eriline.lk', 50, 70, { align: 'left' });

        // Title and Dates
        doc.fillColor('#333333')
           .fontSize(20)
           .text('INVOICE', 50, 140, { align: 'left' });

        doc.fontSize(10)
           .text(`Invoice Number: ${invoice.invoice_number}`, 50, 170)
           .text(`Date of Issue: ${new Date(invoice.issue_date).toLocaleDateString('en-GB')}`, 50, 185)
           .text(`Status: ${invoice.status}`, 50, 200);

        // Client Info
        doc.fontSize(12)
           .fillColor('#0A214D')
           .text('Billed To:', 350, 140)
           .fontSize(10)
           .fillColor('#333333')
           .text(invoice.client_name, 350, 160, { font: 'Helvetica-Bold' })
           .text(clientInfo.address || '', 350, 175)
           .text(clientInfo.phone || '', 350, 190)
           .text(clientInfo.email || '', 350, 205);

        // Draw line
        doc.strokeColor('#dddddd')
           .lineWidth(1)
           .moveTo(50, 230)
           .lineTo(562, 230)
           .stroke();

        // Table Header
        let y = 250;
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

        // Table Body
        doc.fillColor('#333333');
        items.forEach((item, index) => {
            const qty = item.qty || 1;
            const price = item.price || 0;
            const total = qty * price;

            // Zebra striping
            if (index % 2 === 1) {
                doc.fillColor('#FFE9DA')
                   .rect(50, y, 512, 20)
                   .fill();
            }

            doc.fillColor('#333333')
               .text(item.description || '', 60, y + 5)
               .text(qty.toString(), 350, y + 5, { width: 50, align: 'center' })
               .text(`$${Number(price).toFixed(2)}`, 410, y + 5, { width: 70, align: 'right' })
               .text(`$${Number(total).toFixed(2)}`, 490, y + 5, { width: 60, align: 'right' });

            y += 20;
        });

        // Totals
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
           .text(`$${Number(invoice.amount).toFixed(2)}`, 490, y, { width: 60, align: 'right' });

        // Note
        y += 50;
        doc.fillColor('#333333')
           .fontSize(8)
           .text('Thank you for choosing Eriline Software Solutions.', 50, y)
           .text('Payments are due within 15 days of issue.', 50, y + 15);

        doc.end();
    });
}

exports.sendInvoiceEmail = async (req, res) => {
    try {
        const [invRows] = await pool.query('SELECT * FROM invoices WHERE id = ?', [req.params.id]);
        if (invRows.length === 0) return res.status(404).json({ message: 'Invoice not found' });
        
        const invoice = invRows[0];
        const items = typeof invoice.items === 'string' ? JSON.parse(invoice.items) : invoice.items;

        const [contentRows] = await pool.query("SELECT content_value FROM site_content WHERE content_key = 'clients_list'");
        let clientEmail = null;
        let clientAddress = '';
        let clientPhone = '';

        if (contentRows.length > 0) {
            try {
                const clients = JSON.parse(contentRows[0].content_value);
                const client = clients.find(c => c.name === invoice.client_name);
                if (client) {
                    clientEmail = client.email;
                    clientAddress = client.address || '';
                    clientPhone = client.phone || '';
                }
            } catch (e) {
                console.error('Error parsing clients_list:', e);
            }
        }

        if (!clientEmail) {
            return res.status(400).json({ message: `Client email address not found/configured for ${invoice.client_name}` });
        }

        // Generate PDF
        const pdfBuffer = await generateInvoicePDF(invoice, items, {
            email: clientEmail,
            address: clientAddress,
            phone: clientPhone
        });

        // Setup Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@eriline.lk',
            to: clientEmail,
            subject: `Invoice #${invoice.invoice_number} from Eriline Software Solutions`,
            text: `Dear ${invoice.client_name},\n\nPlease find attached invoice #${invoice.invoice_number} for your recent services.\nTotal Due: $${Number(invoice.amount).toFixed(2)}\n\nBest regards,\nEriline Software Solutions`,
            attachments: [
                {
                    filename: `Invoice_${invoice.invoice_number}.pdf`,
                    content: pdfBuffer,
                    contentType: 'application/pdf'
                }
            ]
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: `Invoice email successfully sent to ${clientEmail}` });
    } catch (err) {
        console.error('Send invoice email error:', err);
        res.status(500).json({ error: 'Failed to send invoice email: ' + err.message });
    }
};

