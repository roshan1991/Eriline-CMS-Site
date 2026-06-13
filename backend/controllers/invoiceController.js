const { pool } = require('../config/db');

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

