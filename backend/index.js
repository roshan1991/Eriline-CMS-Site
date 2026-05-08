const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve Frontend Static Files
const frontendPath = path.join(__dirname, '../dist/eriline-frontend/browser');
const releasePath = path.join(__dirname, '../public'); // For production release

// Try to serve from production 'public' first, then development 'dist'
if (require('fs').existsSync(releasePath)) {
    app.use(express.static(releasePath));
} else {
    app.use(express.static(frontendPath));
}

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'eriline_db'
};

let pool;

async function initDB() {
    try {
        const connection = await mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.user,
            password: dbConfig.password
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
        await connection.end();

        pool = mysql.createPool(dbConfig);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'admin'
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS site_content (
                content_key VARCHAR(255) PRIMARY KEY,
                content_value TEXT NOT NULL,
                page VARCHAR(100) NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS invoices (
                id INT AUTO_INCREMENT PRIMARY KEY,
                invoice_number VARCHAR(50) UNIQUE NOT NULL,
                client_name VARCHAR(255) NOT NULL,
                amount DECIMAL(10, 2) NOT NULL,
                issue_date DATE NOT NULL,
                status VARCHAR(50) DEFAULT 'Pending',
                items JSON NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS contact_messages (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Full Products JSON Seed
        const fullProducts = [
            { type: 'POS', name: 'Elara POS', description: 'Advanced Point of Sale system with inventory and sales tracking.', tiers: [{ label: 'Standard', setup: '80,000', maintenance: '3,000' }, { label: 'Enterprise', setup: '130,000', maintenance: '7,000' }] },
            { type: 'DMS', name: 'Distribution Management Pro', description: 'End-to-end supply chain and distribution orchestration.', tiers: [{ label: 'Standard', setup: '300,000', maintenance: '20,000' }, { label: 'Enterprise', setup: '700,000', maintenance: '35,000' }] },
            { type: 'Delivery', name: 'Logistics Tracker', description: 'Real-time delivery tracking and fleet management system.', tiers: [{ label: 'Standard', setup: '80,000', maintenance: '3,000' }, { label: 'Enterprise', setup: '130,000', maintenance: '7,000' }] },
            { type: 'Studio', name: 'Media Management', description: 'Content management and digital asset orchestrator for studios.', tiers: [{ label: 'Standard', setup: '80,000', maintenance: '5,000' }, { label: 'Enterprise', setup: '200,000', maintenance: '10,000' }] },
            { type: 'HRM', name: 'Human Resource Management', description: 'Employee life-cycle, payroll, and attendance system.', tiers: [{ label: 'Standard', setup: '80,000', maintenance: '5,000' }, { label: 'Enterprise', setup: '200,000', maintenance: '25,000' }] },
            { type: 'E-Commerce', name: 'Web Store (WordPress)', description: 'Custom WordPress e-commerce with payment gateway integration.', tiers: [{ label: 'Standard', setup: '120,000', maintenance: '8,000' }, { label: 'Enterprise', setup: '300,000', maintenance: '15,000' }] },
            { type: 'CMS', name: 'Content Hub', description: 'Manage your website content with ease and flexibility.', tiers: [{ label: 'Standard', setup: '80,000', maintenance: '3,000' }, { label: 'Enterprise', setup: '130,000', maintenance: '7,000' }] },
            { type: 'Static', name: 'Normal Site', description: 'Perfect for landing pages and business profiles.', tiers: [{ label: 'Theme-based', setup: '5,000', maintenance: '3,000' }, { label: 'Custom Design', setup: '15,000', maintenance: '3,000' }] }
        ];

        const portfolioJson = JSON.stringify([
            { title: 'Enterprise ERP System', category: 'Custom Software', image: '/erp.png' },
            { title: 'Global Fintech Mobile App', category: 'Mobile Banking', image: '/fintech.png' },
            { title: 'E-commerce Marketplace', category: 'Web Development', image: '/ecommerce.png' },
            { title: 'Cloud Infrastructure Migration', category: 'Cloud Services', image: '/cloud-mig.png' },
            { title: 'Identity Management API', category: 'Cyber Security', image: '/api-sec.png' },
            { title: 'Startup MVP Platform', category: 'Product Engineering', image: '/startup.png' }
        ]);
        const defaultContent = [
            ['hero_title', 'Empowering the Future with Premium Software Solutions', 'home'],
            ['hero_subtitle', 'Leading the digital transformation with scalable custom software...', 'home'],
            ['about_title', 'Engineering the Future', 'about'],
            ['about_subtitle', 'We blend art and logic to create world-class digital experiences.', 'about'],
            ['about_image_url', '/about-hero.png', 'about'],
            ['about_story_text', 'Eriline is a premier software development house dedicated to building high-quality digital products...', 'about'],
            ['about_mission_text', 'Our mission is to empower businesses with the right technology stack.', 'about'],
            ['about_vision_text', 'To be the most trusted global partner for high-performance software engineering.', 'about'],
            ['products_title', 'Digital Products', 'products'],
            ['products_subtitle', 'Scalable systems designed to power your business growth.', 'products'],
            ['products_list', JSON.stringify(fullProducts), 'products'],
            ['portfolio_title', 'Our Portfolio', 'portfolio'],
            ['portfolio_subtitle', 'Showcasing our precision and expertise across diverse projects.', 'portfolio'],
            ['portfolio_list', portfolioJson, 'portfolio'],
            ['contact_title', 'Contact Us', 'contact'],
            ['contact_subtitle', 'Get in touch with our engineering experts today.', 'contact'],
            ['contact_address', '123 Business Road, Colombo, Sri Lanka', 'contact'],
            ['contact_phone', '+94 11 234 5678', 'contact'],
            ['contact_email', 'info@eriline.lk', 'contact'],
            ['seo_title', 'Eriline - Empowering the Future with Premium Software Solutions', 'seo'],
            ['seo_description', 'Leading the digital transformation with scalable custom software.', 'seo'],
            ['seo_keywords', 'software, development, eriline, custom software', 'seo']
        ];

        for (const content of defaultContent) {
            await pool.query('INSERT IGNORE INTO site_content (content_key, content_value, page) VALUES (?, ?, ?)', content);
        }

        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', ['admin']);
        if (rows.length === 0) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', ['admin', hashedPassword]);
        }
    } catch (err) {
        console.error('DB Init Error:', err);
    }
}

// Multer Config for Images (RESTORED)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1h' });
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/content', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM site_content');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/content', async (req, res) => {
    const { content_key, content_value, page } = req.body;
    try {
        await pool.query('INSERT INTO site_content (content_key, content_value, page) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE content_value = ?',
            [content_key, content_value, page, content_value]);
        res.json({ message: 'Content updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');
    res.json({ url: `/uploads/${req.file.filename}` });
});

// --- INVOICE ENDPOINTS ---
app.get('/api/invoices', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM invoices ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/invoices', async (req, res) => {
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
});

app.delete('/api/invoices/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM invoices WHERE id = ?', [req.params.id]);
        res.json({ message: 'Invoice deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.patch('/api/invoices/:id/status', async (req, res) => {
    const { status } = req.body;
    try {
        await pool.query('UPDATE invoices SET status = ? WHERE id = ?', [status, req.params.id]);
        res.json({ message: 'Status updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // 1. Save to Database
        await pool.query(
            'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );

        // 2. Email Notification Logic
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: 'rohansiva1991@gmail.com',
            subject: `New Inquiry from ${name} (Eriline Site)`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            res.json({ message: 'Message saved and email sent' });
        } else {
            res.json({ message: 'Message saved to database (Email mock)' });
        }
    } catch (err) {
        console.error('Contact Error:', err);
        res.status(500).json({ error: 'Failed to process inquiry' });
    }
});

// SPA Catch-all: Send index.html for any unknown routes (Handles Angular Routing)
app.use((req, res) => {
    const releaseIndex = path.join(__dirname, '../public', 'index.html');
    const devIndex = path.join(__dirname, '../dist/eriline-frontend/browser/index.html');

    if (require('fs').existsSync(releaseIndex)) {
        res.sendFile(releaseIndex);
    } else if (require('fs').existsSync(devIndex)) {
        res.sendFile(devIndex);
    } else {
        res.status(404).send('Frontend build not found. Please run "npm run build" first.');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    initDB();
});
