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

exports.uploadImage = async (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');
    const imageUrl = `/uploads/${req.file.filename}`;
    const imageKey = req.file.filename;
    const altText = req.file.originalname;
    try {
        await pool.query(
            'INSERT INTO site_images (image_key, image_url, alt_text) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE image_url = ?',
            [imageKey, imageUrl, altText, imageUrl]
        );
        res.json({ url: imageUrl });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
