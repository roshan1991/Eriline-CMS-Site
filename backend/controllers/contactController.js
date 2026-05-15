const nodemailer = require('nodemailer');
const { pool } = require('../config/db');

exports.submitContactForm = async (req, res) => {
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
};
