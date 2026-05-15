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
