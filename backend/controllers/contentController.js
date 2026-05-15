const { pool } = require('../config/db');

exports.getContent = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM site_content');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateContent = async (req, res) => {
    const { content_key, content_value, page } = req.body;
    try {
        await pool.query(
            'INSERT INTO site_content (content_key, content_value, page) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE content_value = ?',
            [content_key, content_value, page, content_value]
        );
        res.json({ message: 'Content updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.uploadImage = (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');
    res.json({ url: `/uploads/${req.file.filename}` });
};
