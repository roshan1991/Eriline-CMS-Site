const bcrypt = require('bcryptjs');
const { pool, dbConfig } = require('../config/db');
const mysql = require('mysql2/promise');

async function initDB() {
    try {
        const connection = await mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.user,
            password: dbConfig.password
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
        await connection.end();

        // Create Tables
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255),
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

        // Seed Data
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
            ['contact_address', 'Colombo 06, Sri Lanka', 'contact'],
            ['contact_phone', '+94 71 919 5591', 'contact'],
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
            const hashedPassword = await bcrypt.hash('admin@123', 10);
            await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', ['admin', 'rohansiva1991@gmail.com', hashedPassword]);
        }
    } catch (err) {
        console.error('DB Init Error:', err);
    }
}

module.exports = initDB;
