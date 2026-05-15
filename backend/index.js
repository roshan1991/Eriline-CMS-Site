const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const initDB = require('./models/init');
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/contact', contactRoutes);

// Frontend Static Files Serving
const frontendPath = path.join(__dirname, '../dist/eriline-frontend/browser');
const releasePath = path.join(__dirname, '../public');

if (require('fs').existsSync(releasePath)) {
    app.use(express.static(releasePath));
} else {
    app.use(express.static(frontendPath));
}

// SPA Catch-all
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
