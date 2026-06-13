# Codebase Context for Eriline CMS Site

This document provides a single-file representation of the codebase. It excludes binary assets, lock files, and only contains source code.

## File Structure

- [.editorconfig](#file--editorconfig)
- [.gitignore](#file--gitignore)
- [.prettierrc](#file--prettierrc)
- [.vscode/extensions.json](#file--vscode-extensions-json)
- [.vscode/launch.json](#file--vscode-launch-json)
- [.vscode/mcp.json](#file--vscode-mcp-json)
- [.vscode/tasks.json](#file--vscode-tasks-json)
- [README.md](#file-readme-md)
- [angular.json](#file-angular-json)
- [backend/.env](#file-backend--env)
- [backend/.env.example](#file-backend--env-example)
- [backend/config/db.js](#file-backend-config-db-js)
- [backend/controllers/authController.js](#file-backend-controllers-authcontroller-js)
- [backend/controllers/contactController.js](#file-backend-controllers-contactcontroller-js)
- [backend/controllers/contentController.js](#file-backend-controllers-contentcontroller-js)
- [backend/controllers/invoiceController.js](#file-backend-controllers-invoicecontroller-js)
- [backend/db.sql](#file-backend-db-sql)
- [backend/index.js](#file-backend-index-js)
- [backend/middlewares/auth.js](#file-backend-middlewares-auth-js)
- [backend/middlewares/upload.js](#file-backend-middlewares-upload-js)
- [backend/models/init.js](#file-backend-models-init-js)
- [backend/package.json](#file-backend-package-json)
- [backend/routes/authRoutes.js](#file-backend-routes-authroutes-js)
- [backend/routes/contactRoutes.js](#file-backend-routes-contactroutes-js)
- [backend/routes/contentRoutes.js](#file-backend-routes-contentroutes-js)
- [backend/routes/invoiceRoutes.js](#file-backend-routes-invoiceroutes-js)
- [deploy-spaceship.bat](#file-deploy-spaceship-bat)
- [kill_ports.ps1](#file-kill-ports-ps1)
- [package.json](#file-package-json)
- [release_spaceship.bat](#file-release-spaceship-bat)
- [run_project.bat](#file-run-project-bat)
- [src/app/app.config.ts](#file-src-app-app-config-ts)
- [src/app/app.css](#file-src-app-app-css)
- [src/app/app.html](#file-src-app-app-html)
- [src/app/app.routes.ts](#file-src-app-app-routes-ts)
- [src/app/app.spec.ts](#file-src-app-app-spec-ts)
- [src/app/app.ts](#file-src-app-app-ts)
- [src/app/components/footer/footer.component.css](#file-src-app-components-footer-footer-component-css)
- [src/app/components/footer/footer.component.html](#file-src-app-components-footer-footer-component-html)
- [src/app/components/footer/footer.component.ts](#file-src-app-components-footer-footer-component-ts)
- [src/app/components/header/header.component.css](#file-src-app-components-header-header-component-css)
- [src/app/components/header/header.component.html](#file-src-app-components-header-header-component-html)
- [src/app/components/header/header.component.ts](#file-src-app-components-header-header-component-ts)
- [src/app/pages/about/about.component.css](#file-src-app-pages-about-about-component-css)
- [src/app/pages/about/about.component.html](#file-src-app-pages-about-about-component-html)
- [src/app/pages/about/about.component.ts](#file-src-app-pages-about-about-component-ts)
- [src/app/pages/admin/dashboard/dashboard.component.css](#file-src-app-pages-admin-dashboard-dashboard-component-css)
- [src/app/pages/admin/dashboard/dashboard.component.html](#file-src-app-pages-admin-dashboard-dashboard-component-html)
- [src/app/pages/admin/dashboard/dashboard.component.ts](#file-src-app-pages-admin-dashboard-dashboard-component-ts)
- [src/app/pages/admin/login/login.component.css](#file-src-app-pages-admin-login-login-component-css)
- [src/app/pages/admin/login/login.component.html](#file-src-app-pages-admin-login-login-component-html)
- [src/app/pages/admin/login/login.component.ts](#file-src-app-pages-admin-login-login-component-ts)
- [src/app/pages/admin/pages/billing/billing.component.html](#file-src-app-pages-admin-pages-billing-billing-component-html)
- [src/app/pages/admin/pages/billing/billing.component.ts](#file-src-app-pages-admin-pages-billing-billing-component-ts)
- [src/app/pages/admin/pages/clients/clients.component.html](#file-src-app-pages-admin-pages-clients-clients-component-html)
- [src/app/pages/admin/pages/clients/clients.component.ts](#file-src-app-pages-admin-pages-clients-clients-component-ts)
- [src/app/pages/admin/pages/content-editor/content-editor.component.html](#file-src-app-pages-admin-pages-content-editor-content-editor-component-html)
- [src/app/pages/admin/pages/content-editor/content-editor.component.ts](#file-src-app-pages-admin-pages-content-editor-content-editor-component-ts)
- [src/app/pages/admin/pages/portfolio/portfolio.component.html](#file-src-app-pages-admin-pages-portfolio-portfolio-component-html)
- [src/app/pages/admin/pages/portfolio/portfolio.component.ts](#file-src-app-pages-admin-pages-portfolio-portfolio-component-ts)
- [src/app/pages/admin/pages/products/products.component.html](#file-src-app-pages-admin-pages-products-products-component-html)
- [src/app/pages/admin/pages/products/products.component.ts](#file-src-app-pages-admin-pages-products-products-component-ts)
- [src/app/pages/admin/pages/scheduled-billing/scheduled-billing.component.html](#file-src-app-pages-admin-pages-scheduled-billing-scheduled-billing-component-html)
- [src/app/pages/admin/pages/scheduled-billing/scheduled-billing.component.ts](#file-src-app-pages-admin-pages-scheduled-billing-scheduled-billing-component-ts)
- [src/app/pages/contact/contact.component.css](#file-src-app-pages-contact-contact-component-css)
- [src/app/pages/contact/contact.component.html](#file-src-app-pages-contact-contact-component-html)
- [src/app/pages/contact/contact.component.ts](#file-src-app-pages-contact-contact-component-ts)
- [src/app/pages/home/home.component.css](#file-src-app-pages-home-home-component-css)
- [src/app/pages/home/home.component.html](#file-src-app-pages-home-home-component-html)
- [src/app/pages/home/home.component.ts](#file-src-app-pages-home-home-component-ts)
- [src/app/pages/portfolio/portfolio.component.css](#file-src-app-pages-portfolio-portfolio-component-css)
- [src/app/pages/portfolio/portfolio.component.html](#file-src-app-pages-portfolio-portfolio-component-html)
- [src/app/pages/portfolio/portfolio.component.ts](#file-src-app-pages-portfolio-portfolio-component-ts)
- [src/app/pages/product-detail/product-detail.css](#file-src-app-pages-product-detail-product-detail-css)
- [src/app/pages/product-detail/product-detail.html](#file-src-app-pages-product-detail-product-detail-html)
- [src/app/pages/product-detail/product-detail.spec.ts](#file-src-app-pages-product-detail-product-detail-spec-ts)
- [src/app/pages/product-detail/product-detail.ts](#file-src-app-pages-product-detail-product-detail-ts)
- [src/app/pages/products/products.component.css](#file-src-app-pages-products-products-component-css)
- [src/app/pages/products/products.component.html](#file-src-app-pages-products-products-component-html)
- [src/app/pages/products/products.component.ts](#file-src-app-pages-products-products-component-ts)
- [src/app/services/auth.guard.ts](#file-src-app-services-auth-guard-ts)
- [src/app/services/auth.interceptor.ts](#file-src-app-services-auth-interceptor-ts)
- [src/app/services/auth.service.ts](#file-src-app-services-auth-service-ts)
- [src/app/services/cms.service.ts](#file-src-app-services-cms-service-ts)
- [src/environments/environment.development.ts](#file-src-environments-environment-development-ts)
- [src/environments/environment.ts](#file-src-environments-environment-ts)
- [src/index.html](#file-src-index-html)
- [src/main.ts](#file-src-main-ts)
- [src/styles.css](#file-src-styles-css)
- [tsconfig.app.json](#file-tsconfig-app-json)
- [tsconfig.json](#file-tsconfig-json)
- [tsconfig.spec.json](#file-tsconfig-spec-json)

---

## File Contents

### File: .editorconfig

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

---

### File: .gitignore

```
# See https://docs.github.com/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# Compiled output
/dist
/tmp
/out-tsc
/bazel-out

# Node
/node_modules
npm-debug.log
yarn-error.log

# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/mcp.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings
__screenshots__/

# System files
.DS_Store
Thumbs.db

# Backend
/backend/node_modules
/backend/.env
/backend/uploads
release_spaceship
eriline_release.zip
```

---

### File: .prettierrc

```
{
  "printWidth": 100,
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

---

### File: .vscode/extensions.json

```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=827846
  "recommendations": ["angular.ng-template"]
}
```

---

### File: .vscode/launch.json

```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: start",
      "url": "http://localhost:4200/"
    },
    {
      "name": "ng test",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: test",
      "url": "http://localhost:9876/debug.html"
    }
  ]
}
```

---

### File: .vscode/mcp.json

```json
{
  // For more information, visit: https://angular.dev/ai/mcp
  "servers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    }
  }
}
```

---

### File: .vscode/tasks.json

```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?LinkId=733558
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "start",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "Changes detected"
          },
          "endsPattern": {
            "regexp": "bundle generation (complete|failed)"
          }
        }
      }
    },
    {
      "type": "npm",
      "script": "test",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "Changes detected"
          },
          "endsPattern": {
            "regexp": "bundle generation (complete|failed)"
          }
        }
      }
    }
  ]
}
```

---

### File: README.md

```markdown
# ErilineFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
```

---

### File: angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": "62a68c01-81de-42e4-afd0-3546935b04ec"
  },
  "newProjectRoot": "projects",
  "projects": {
    "eriline-frontend": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": ["src/styles.css"]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.development.ts"
                }
              ]
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "eriline-frontend:build:production"
            },
            "development": {
              "buildTarget": "eriline-frontend:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
```

---

### File: backend/.env

```
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SysAdmin@123
DB_NAME=eriline_db

# Security
JWT_SECRET=super_secret_jwt_key_change_me_in_production

# Email Service Configuration (Optional, used for inquiries & password reset)
# For Gmail, you need to use an App Password: https://support.google.com/accounts/answer/185833
EMAIL_USER=
EMAIL_PASS=
```

---

### File: backend/.env.example

```
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=[PASSWORD]
DB_NAME=eriline_db

# Security
# Set this to a strong random string in production
JWT_SECRET=super_secret_jwt_key_change_me_in_production

# Email Service Configuration (Optional, used for inquiries & password reset)
# For Gmail, you need to use an App Password: https://support.google.com/accounts/answer/185833
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

### File: backend/config/db.js

```javascript
const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'eriline_db'
};

const pool = mysql.createPool(dbConfig);

module.exports = {
    pool,
    dbConfig
};
```

---

### File: backend/controllers/authController.js

```javascript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { pool } = require('../config/db');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
        
        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
        
        const token = jwt.sign(
            { id: user.id, username: user.username }, 
            process.env.JWT_SECRET || 'secret_key', 
            { expiresIn: '1h' }
        );
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.resetPassword = async (req, res) => {
    const { username } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) return res.status(404).json({ message: 'User not found' });

        const user = rows[0];
        const newPassword = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await pool.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, user.id]);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@eriline.lk',
            to: user.email || 'rohansiva1991@gmail.com',
            subject: `Password Reset for ${username} (Eriline Site)`,
            text: `Your admin password has been reset.\n\nUsername: ${username}\nNew Password: ${newPassword}\n\nPlease login and change your password.`
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            res.json({ message: 'A new password has been sent to the admin email.' });
        } else {
            res.json({ message: `(Dev Mode) Email not configured. New password: ${newPassword}` });
        }
    } catch (err) {
        console.error('Reset password error:', err);
        res.status(500).json({ error: 'Failed to reset password' });
    }
};
```

---

### File: backend/controllers/contactController.js

```javascript
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
```

---

### File: backend/controllers/contentController.js

```javascript
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
```

---

### File: backend/controllers/invoiceController.js

```javascript
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

```

---

### File: backend/db.sql

```sql
CREATE DATABASE IF NOT EXISTS eriline_db;
USE eriline_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin'
);

CREATE TABLE IF NOT EXISTS site_content (
  content_key VARCHAR(255) PRIMARY KEY,
  content_value TEXT NOT NULL,
  page VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS site_images (
  image_key VARCHAR(255) PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  alt_text VARCHAR(255)
);

-- Insert default admin (password: admin@123, hashed version below)
-- Note: In production we would hash this properly.
-- $2a$10$wI0F8g8A7qQz8mS7M6Z8u.E5Tz8U1jFmP6B8Vv/K1ZfJ/8wI0F8g8A
INSERT IGNORE INTO users (username, email, password) VALUES ('admin', 'rohansiva1991@gmail.com', '$2a$10$76.q4T8gS6tH.f.f6t5u5.4q7v7K6Vv/K1ZfJ/8wI0F8g8A'); 

-- Insert some default content
INSERT IGNORE INTO site_content (content_key, content_value, page) VALUES 
('hero_title', 'Empowering the Future with Premium Software Solutions', 'home'),
('hero_subtitle', 'Leading the digital transformation with scalable custom software...', 'home'),
('about_story', 'Eriline is a premier software development house dedicated to building high-quality digital products...', 'about');

INSERT IGNORE INTO site_images (image_key, image_url) VALUES 
('hero_bg', '/assets/hero.png'),
('cloud_section_img', '/assets/cloud.png');

CREATE TABLE IF NOT EXISTS invoices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  invoice_number VARCHAR(50) UNIQUE NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  issue_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'Pending',
  items JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS scheduled_invoices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  frequency VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  next_bill_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

---

### File: backend/index.js

```javascript
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
```

---

### File: backend/middlewares/auth.js

```javascript
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.userId = decoded.id;
        req.username = decoded.username;
        next();
    });
};

module.exports = verifyToken;
```

---

### File: backend/middlewares/upload.js

```javascript
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadsDir),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

module.exports = upload;
```

---

### File: backend/models/init.js

```javascript
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
            CREATE TABLE IF NOT EXISTS site_images (
                image_key VARCHAR(255) PRIMARY KEY,
                image_url VARCHAR(255) NOT NULL,
                alt_text VARCHAR(255)
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
            CREATE TABLE IF NOT EXISTS scheduled_invoices (
                id INT AUTO_INCREMENT PRIMARY KEY,
                client_name VARCHAR(255) NOT NULL,
                service_name VARCHAR(255) NOT NULL,
                amount DECIMAL(10, 2) NOT NULL,
                frequency VARCHAR(50) NOT NULL,
                start_date DATE NOT NULL,
                next_bill_date DATE NOT NULL,
                status VARCHAR(50) DEFAULT 'Active',
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
```

---

### File: backend/package.json

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.1",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "multer": "^2.1.1",
    "mysql2": "^3.20.0",
    "nodemailer": "^8.0.5"
  }
}
```

---

### File: backend/routes/authRoutes.js

```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
```

---

### File: backend/routes/contactRoutes.js

```javascript
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.submitContactForm);

module.exports = router;
```

---

### File: backend/routes/contentRoutes.js

```javascript
const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const upload = require('../middlewares/upload');
const verifyToken = require('../middlewares/auth');

router.get('/', contentController.getContent);
router.post('/', verifyToken, contentController.updateContent);
router.post('/upload', verifyToken, upload.single('image'), contentController.uploadImage);

module.exports = router;
```

---

### File: backend/routes/invoiceRoutes.js

```javascript
const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const verifyToken = require('../middlewares/auth');

router.get('/scheduled', verifyToken, invoiceController.getAllScheduledInvoices);
router.post('/scheduled', verifyToken, invoiceController.createScheduledInvoice);
router.delete('/scheduled/:id', verifyToken, invoiceController.deleteScheduledInvoice);
router.patch('/scheduled/:id/status', verifyToken, invoiceController.updateScheduledInvoiceStatus);
router.post('/scheduled/:id/trigger', verifyToken, invoiceController.triggerScheduledInvoice);

router.get('/', verifyToken, invoiceController.getAllInvoices);
router.post('/', verifyToken, invoiceController.createInvoice);
router.delete('/:id', verifyToken, invoiceController.deleteInvoice);
router.patch('/:id/status', verifyToken, invoiceController.updateInvoiceStatus);

module.exports = router;
```

---

### File: deploy-spaceship.bat

```batch
@echo off
REM Deploy script for Eriline Site to Spaceship Server

setlocal enabledelayedexpansion

echo ========================================
echo Spaceship Server Deployment Script
echo ========================================
echo.

REM Clean up
echo [1/5] Cleaning previous deployment...
if exist "spaceship_deploy" (
    rmdir /s /q spaceship_deploy
)
if exist "spaceship_deploy.zip" (
    del /q "spaceship_deploy.zip"
)
echo.

REM Build frontend
echo [2/5] Building frontend (Eriline)...
call npm install
call npm run build -- --configuration production
if errorlevel 1 (
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)
echo.

REM Create deploy structure for Spaceship
echo [3/5] Creating deploy structure...
mkdir spaceship_deploy\server 2>nul
mkdir spaceship_deploy\server\uploads 2>nul
mkdir spaceship_deploy\public 2>nul

REM Copy backend files
echo Copying backend files...
xcopy "backend\*" "spaceship_deploy\server" /E /H /C /I /Y >nul
if exist "spaceship_deploy\server\node_modules" rd /s /q "spaceship_deploy\server\node_modules"
if exist "spaceship_deploy\server\package-lock.json" del /q "spaceship_deploy\server\package-lock.json"

REM Copy frontend build
echo Copying frontend build...
set "FRONTEND_DIST=dist\eriline-frontend\browser"
if exist "%FRONTEND_DIST%" (
    echo Found build at %FRONTEND_DIST%, copying...
    xcopy /E /H /C /I /Y "%FRONTEND_DIST%\*" "spaceship_deploy\public\" >nul
) else if exist "dist\eriline-frontend" (
    echo Found fallback build at dist\eriline-frontend, copying...
    xcopy /E /H /C /I /Y "dist\eriline-frontend\*" "spaceship_deploy\public\" >nul
) else (
    echo WARNING: Frontend build not found!
)

echo.

REM Zip the deployment
echo [4/5] Zipping deploy files...
powershell -command "Compress-Archive -Path spaceship_deploy\* -DestinationPath spaceship_deploy.zip -Force"
if errorlevel 1 (
    echo ERROR: Zipping failed!
    pause
    exit /b 1
)
echo Created spaceship_deploy.zip
echo.

echo.
echo ========================================
echo Deployment Preparation Complete!
echo ========================================
echo.
echo 1. Your application has been packaged into 'spaceship_deploy.zip'
echo 2. Upload and extract it to your 'www' or target folder on Spaceship.
echo 3. Navigate to the 'server' folder and run 'npm install'.
echo 4. Run the server using 'node index.js' or PM2.
echo 5. IMPORTANT: Configure your .env file with production credentials.
echo.
pause

```

---

### File: kill_ports.ps1

```powershell
Get-NetTCPConnection -LocalPort 5000, 4200 -State Listen -ErrorAction SilentlyContinue | ForEach-Object {
    Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
}
```

---

### File: package.json

```json
{
  "name": "eriline-frontend",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "packageManager": "npm@10.9.7",
  "dependencies": {
    "@angular/common": "^21.2.0",
    "@angular/compiler": "^21.2.0",
    "@angular/core": "^21.2.0",
    "@angular/forms": "^21.2.0",
    "@angular/platform-browser": "^21.2.0",
    "@angular/router": "^21.2.0",
    "@ng-select/ng-select": "^23.0.1",
    "ngx-quill": "^30.0.1",
    "quill": "^2.0.3",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^21.2.7",
    "@angular/cli": "^21.2.7",
    "@angular/compiler-cli": "^21.2.0",
    "jsdom": "^28.0.0",
    "prettier": "^3.8.1",
    "typescript": "~5.9.2",
    "vitest": "^4.0.8"
  }
}
```

---

### File: release_spaceship.bat

```batch
@echo off
setlocal enabledelayedexpansion

set RELEASE_DIR=release_spaceship
set ZIP_NAME=eriline_release.zip

echo ======================================================
echo  SPACESHIP RELEASE GENERATOR - Eriline CMS
echo ======================================================
echo.

REM Clean up
echo [1/5] Cleaning previous release files...
if exist "%RELEASE_DIR%" rd /s /q "%RELEASE_DIR%"
if exist "%ZIP_NAME%" del /q "%ZIP_NAME%"
echo.

REM Build frontend
echo [2/5] Building Angular Frontend (eriline-frontend)...
call npm install
call npm run build -- --configuration production
if errorlevel 1 (
    echo.
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)
echo.

REM Create release structure
echo [3/5] Creating release structure...
mkdir "%RELEASE_DIR%" 2>nul
mkdir "%RELEASE_DIR%\public" 2>nul
mkdir "%RELEASE_DIR%\server" 2>nul
echo.

REM Copy frontend build
echo [4/5] Copying Frontend files...
set "FRONTEND_DIST=dist\eriline-frontend\browser"
if exist "%FRONTEND_DIST%" (
    echo Found build at %FRONTEND_DIST%, copying...
    xcopy "%FRONTEND_DIST%\*" "%RELEASE_DIR%\public" /E /H /C /I /Y >nul
) else if exist "dist\eriline-frontend" (
    echo Found fallback build at dist\eriline-frontend, copying...
    xcopy "dist\eriline-frontend\*" "%RELEASE_DIR%\public" /E /H /C /I /Y >nul
) else (
    echo WARNING: Frontend build not found!
)
echo.

REM Copy backend files
echo [5/5] Copying Backend files...
xcopy "backend\*" "%RELEASE_DIR%\server" /E /H /C /I /Y >nul
if exist "%RELEASE_DIR%\server\node_modules" rd /s /q "%RELEASE_DIR%\server\node_modules"
if exist "%RELEASE_DIR%\server\package-lock.json" del /q "%RELEASE_DIR%\server\package-lock.json"
echo.

REM Zip the release
echo [Bonus] Zipping the release for Spaceship deployment...
powershell -command "Compress-Archive -Path %RELEASE_DIR%\* -DestinationPath %ZIP_NAME% -Force"
if errorlevel 1 (
    echo.
    echo ERROR: Zipping failed!
) else (
    echo.
    echo Created %ZIP_NAME% successfully!
)
echo.

echo ======================================================
echo  SPACESHIP RELEASE GENERATED SUCCESSFULLY!
echo ======================================================
echo  Folder: %cd%\%RELEASE_DIR%
echo  Archive: %cd%\%ZIP_NAME%
echo.
echo  Deployment Instructions:
echo  1. Upload %ZIP_NAME% to your 'www' or target folder on Spaceship.
echo  2. Extract the zip file in the file manager.
echo  3. Navigate to the 'server' folder
echo  4. Run: npm install --production
echo  5. Run: node index.js
echo.
echo  NOTE: Ensure your .env file is correctly configured on the server.
echo ======================================================
pause

```

---

### File: run_project.bat

```batch
@echo off
title Eriline Full-Stack Launcher
color 0A
echo ==========================================
echo       ERI-LINE PROJECT LAUNCHER
echo ==========================================
echo.

echo Checking ports 4200 and 5000...
powershell -ExecutionPolicy Bypass -File "%~dp0kill_ports.ps1"
echo.

REM Check frontend node_modules
if not exist "node_modules" (
    echo [0/2] Installing frontend dependencies for Angular...
    call npm install
)

REM Check backend node_modules
if not exist "backend\node_modules" (
    echo [0/2] Installing backend dependencies for Node.js...
    cd backend
    call npm install
    cd ..
)

echo [1/2] Starting Backend Server for MySQL and Node...
start "Eriline Backend" cmd /k "cd backend && node index.js"

echo [2/2] Starting Frontend Dev Server for Angular...
echo Note: This window will stay open to show frontend logs.
npm start

pause
```

---

### File: src/app/app.config.ts

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
```

---

### File: src/app/app.css

```css

```

---

### File: src/app/app.html

```html
<app-header *ngIf="!isAdminPage"></app-header>

<main>
  <router-outlet></router-outlet>
</main>

<app-footer *ngIf="!isAdminPage"></app-footer>
```

---

### File: src/app/app.routes.ts

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetailComponent) },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: LoginComponent },
  { 
    path: 'admin/dashboard', 
    component: DashboardComponent, 
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'home' } },
      { path: 'about', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'about' } },
      { path: 'products', loadComponent: () => import('./pages/admin/pages/products/products.component').then(m => m.AdminProductsComponent) },
      { path: 'portfolio', loadComponent: () => import('./pages/admin/pages/portfolio/portfolio.component').then(m => m.AdminPortfolioComponent) },
      { path: 'clients', loadComponent: () => import('./pages/admin/pages/clients/clients.component').then(m => m.AdminClientsComponent) },
      { path: 'billing', loadComponent: () => import('./pages/admin/pages/billing/billing.component').then(m => m.AdminBillingComponent) },
      { path: 'scheduled-billing', loadComponent: () => import('./pages/admin/pages/scheduled-billing/scheduled-billing.component').then(m => m.AdminScheduledBillingComponent) },
      { path: 'contact', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'contact' } },
      { path: 'seo', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'seo' } }
    ]
  },
  { path: '**', redirectTo: '' }
];
```

---

### File: src/app/app.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, eriline-frontend');
  });
});
```

---

### File: src/app/app.ts

```typescript
import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { CmsService } from './services/cms.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'eriline-frontend';
  isAdminPage = false;
  private hasInitializedAnalytics = false;

  constructor(
    private router: Router,
    private cms: CmsService,
    private renderer: Renderer2,
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isAdminPage = event.url.startsWith('/admin');
    });

    this.initGlobalSettings();
  }

  initGlobalSettings() {
    this.cms.getContent().subscribe(data => {
      const seoTitle = data.find(i => i.content_key === 'seo_title');
      if (seoTitle && seoTitle.content_value) {
        this.titleService.setTitle(seoTitle.content_value);
      }

      const seoDesc = data.find(i => i.content_key === 'seo_description');
      if (seoDesc && seoDesc.content_value) {
        this.metaService.updateTag({ name: 'description', content: seoDesc.content_value });
      }

      const seoKeywords = data.find(i => i.content_key === 'seo_keywords');
      if (seoKeywords && seoKeywords.content_value) {
        this.metaService.updateTag({ name: 'keywords', content: seoKeywords.content_value });
      }

      const gaConfig = data.find(i => i.content_key === 'ga_tracking_id');
      if (gaConfig && gaConfig.content_value && gaConfig.content_value.trim() !== '' && !this.hasInitializedAnalytics) {
        const trackingId = gaConfig.content_value.trim();
        
        const script1 = this.renderer.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        this.renderer.appendChild(this.document.head, script1);

        const script2 = this.renderer.createElement('script');
        script2.text = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `;
        this.renderer.appendChild(this.document.head, script2);

        this.hasInitializedAnalytics = true;
      }
    });
  }
}
```

---

### File: src/app/components/footer/footer.component.css

```css
.footer {
  background: var(--secondary-dark);
  padding-top: 80px;
  border-top: 1px solid var(--glass-border);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 60px;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  display: block;
  margin-bottom: 1rem;
}

.brand-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.footer h3 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.footer ul {
  list-style: none;
}

.footer ul li {
  margin-bottom: 0.8rem;
}

.footer ul li a {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.footer ul li a:hover {
  color: var(--accent);
  padding-left: 5px;
}

.footer-contact p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.footer-bottom {
  padding: 2rem 0;
  border-top: 1px solid var(--glass-border);
  background: var(--primary-dark);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--glass);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--glass-border);
  font-weight: 600;
  font-size: 0.8rem;
}

.social-icon:hover {
  background: var(--accent);
  color: var(--primary-dark);
  border-color: var(--accent);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .footer-bottom-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
```

---

### File: src/app/components/footer/footer.component.html

```html
<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <div class="logo">
        <span class="logo-text">ERI<span class="accent-text">LINE</span></span>
      </div>
      <p class="brand-desc">Empowering digital transformation with custom software, mobile apps, and elite cloud
        engineering.</p>
    </div>

    <div class="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div class="footer-services">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Software Development</a></li>
        <li><a href="#">Mobile App Dev</a></li>
        <li><a href="#">Cloud Migration</a></li>
        <li><a href="#">DevOps & Security</a></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h3>Contact Us</h3>
      <p>Colombo 06, Sri Lanka</p>
      <p>Phone: +94 71 919 5591</p>
      <p>Email: info&#64;eriline.lk</p>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-content">
      <p>&copy; {{currentYear}} Eriline (Pvt) Ltd. All Rights Reserved.</p>
      <div class="social-links">
        <a href="#" class="social-icon">Li</a>
        <a href="#" class="social-icon">Fb</a>
        <a href="#" class="social-icon">Tw</a>
      </div>
    </div>
  </div>
</footer>
```

---

### File: src/app/components/footer/footer.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
```

---

### File: src/app/components/header/header.component.css

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 33, 77, 0.85);
  /* Deep Brand Navy with opacity */
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--glass-border);
  padding: 1rem 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 40px;
  /* Optimal size for the brushless font style */
  width: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
  position: relative;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
}

.mobile-cta {
  display: none;
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--secondary-dark);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }

  .desktop-cta {
    display: none;
  }

  .mobile-cta {
    display: inline-flex;
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }
}
```

---

### File: src/app/components/header/header.component.html

```html
<header class="header">
  <div class="container nav-container">
    <div class="logo" routerLink="/">
      <img src="/logo.png" alt="Eriline Logo" class="logo-img">
    </div>

    <nav class="nav-links" [class.active]="isMenuOpen">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
        (click)="isMenuOpen = false">Home</a>
      <a routerLink="/about" routerLinkActive="active" (click)="isMenuOpen = false">About Us</a>
      <a routerLink="/products" routerLinkActive="active" (click)="isMenuOpen = false">Products</a>
      <a routerLink="/portfolio" routerLinkActive="active" (click)="isMenuOpen = false">Portfolio</a>
      <a routerLink="/contact" routerLinkActive="active" (click)="isMenuOpen = false">Contact</a>
      <button class="btn-primary mobile-cta" routerLink="/contact">Get a Quote</button>
    </nav>

    <div class="header-actions">
      <button class="btn-primary desktop-cta" routerLink="/contact">Get a Quote</button>
      <button class="menu-toggle" (click)="toggleMenu()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </div>
</header>
```

---

### File: src/app/components/header/header.component.ts

```typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
```

---

### File: src/app/pages/about/about.component.css

```css
.about-hero {
  padding: 120px 0 80px;
  background: var(--primary-dark);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero-bg-accent {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
  opacity: 0.1;
  filter: blur(80px);
  z-index: 0;
}

.about-hero .container {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 4.5rem);
  margin-top: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 1.5rem auto 0;
}

.story-section {
  padding: 100px 0;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}

.story-image {
  position: relative;
  padding: 1rem;
}

.story-image img {
  width: 100%;
  border-radius: 12px;
  display: block;
}

.experience-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background: var(--accent);
  padding: 1.5rem;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.experience-badge .num {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.experience-badge .txt {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.story-content h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.story-content .desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.mv-card {
  padding: 2rem;
  transition: transform 0.3s ease;
}

.mv-card:hover {
  transform: translateY(-5px);
}

.mv-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.mv-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.8rem;
}

.mv-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.values-section {
  padding: 100px 0;
  background: rgba(255, 255, 255, 0.02);
}

.center-head {
  text-align: center;
  margin-bottom: 4rem;
}

.center-head p {
  color: var(--text-secondary);
  margin-top: 1rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  padding: 2.5rem;
  text-align: center;
}

.val-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.cta-section {
  padding-bottom: 100px;
}

.cta-card {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

.cta-card h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-card p {
  margin-bottom: 2.5rem;
  color: var(--text-secondary);
}

@media (max-width: 992px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .experience-badge {
    right: 1.5rem;
    bottom: -15px;
  }
}

@media (max-width: 768px) {
  .mission-vision-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### File: src/app/pages/about/about.component.html

```html
<section class="about-hero">
  <div class="hero-bg-accent"></div>
  <div class="container animate-fade-in">
    <span class="badge">About Eriline</span>
    <h1 class="hero-title">{{content['about_title']}}</h1>
    <p class="hero-subtitle">{{content['about_subtitle']}}</p>
  </div>
</section>

<section class="story-section container">
  <div class="story-grid">
    <div class="story-image glass-card animate-slide-up">
      <img [src]="getImageUrl()" alt="Eriline Team">
      <div class="experience-badge">
        <span class="num">12+</span>
        <span class="txt">Years of Excellence</span>
      </div>
    </div>
    <div class="story-content">
      <h2 class="section-title">Our <span class="text-gradient">Story</span></h2>
      <div class="desc" [innerHTML]="content['about_story_text']"></div>
      
      <div class="mission-vision-grid mt-2">
        <div class="mv-card glass-card">
          <div class="mv-icon">🎯</div>
          <h3>Mission</h3>
          <div [innerHTML]="content['about_mission_text']"></div>
        </div>
        <div class="mv-card glass-card">
          <div class="mv-icon">👁️</div>
          <h3>Vision</h3>
          <div [innerHTML]="content['about_vision_text']"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="values-section">
  <div class="container">
    <div class="center-head">
      <h2 class="section-title">Core <span class="text-gradient">Values</span></h2>
      <p>The principles that drive every line of code we write.</p>
    </div>
    
    <div class="values-grid mt-3">
      <div *ngFor="let val of values" class="value-card glass-card animate-hover">
        <div class="val-icon">{{val.icon}}</div>
        <h3>{{val.title}}</h3>
        <p>{{val.desc}}</p>
      </div>
    </div>
  </div>
</section>

<section class="cta-section container mt-4">
  <div class="cta-card glass-card text-center">
    <h2>Ready to start your digital journey?</h2>
    <p>Let's build something extraordinary together.</p>
    <button class="btn-primary" routerLink="/contact">Get in Touch</button>
  </div>
</section>
```

---

### File: src/app/pages/about/about.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsService } from '../../services/cms.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  content: any = {
    about_title: 'Engineering the Future',
    about_subtitle: 'We blend art and logic to create world-class digital experiences.',
    about_story_text: 'Eriline is a premier software development house dedicated to building high-quality digital products...',
    about_mission_text: 'Our mission is to empower businesses with the right technology stack, ensuring they remain competitive in an ever-evolving digital landscape.',
    about_vision_text: 'To be the most trusted global partner for high-performance software engineering.',
    about_image_url: '/about-hero.png'
  };

  values = [
    { title: 'Innovation', desc: 'Pushing boundaries with cutting-edge tech.', icon: '🚀' },
    { title: 'Quality', desc: 'Obsessive attention to code craftsmanship.', icon: '💎' },
    { title: 'Trust', desc: 'Long-term partnerships built on transparency.', icon: '🤝' },
    { title: 'Scale', desc: 'Systems designed to grow with your ambition.', icon: '📈' }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      data.forEach(item => {
        if (item.page === 'about') {
          this.content[item.content_key] = item.content_value;
        }
      });
    });
  }

  getImageUrl() {
    const url = this.content['about_image_url'];
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/about-hero.png';
  }
}
```

---

### File: src/app/pages/admin/dashboard/dashboard.component.css

```css
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background: var(--primary-dark);
}

.sidebar {
  width: 280px;
  padding: 2rem;
  border-radius: 0;
  border-right: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
}

.logo {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.logo-img {
  height: 45px;
  width: auto;
  object-fit: contain;
}

.sidebar nav {
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-section-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--text-secondary);
  letter-spacing: 1px;
  margin: 1.5rem 0 0.5rem 0;
  text-transform: uppercase;
}

.sidebar nav a {
  padding: 0.8rem 1rem;
  border-radius: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
}

.sidebar nav a:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
}

.sidebar nav a.active {
  background: var(--glass);
  color: var(--accent);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.sidebar-footer {
  margin-top: auto;
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.5;
}

.dashboard-main {
  flex: 1;
  padding: 3rem 4rem;
  overflow-y: auto;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.user-pill {
  padding: 0.5rem 1rem 0.5rem 0.6rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.avatar {
  width: 32px;
  height: 32px;
  background: var(--accent);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.stat-icon {
  font-size: 2.5rem;
}

.stat-data h3 {
  font-size: 1.8rem;
  line-height: 1;
}

.stat-data p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-top: 0.3rem;
}

/* Submenu Styles */
.submenu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 1.5rem;
  margin-top: 0.25rem;
}

.submenu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  font-size: 0.85rem;
  color: var(--text-secondary) !important;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submenu-item:hover {
  background: rgba(255, 255, 255, 0.05) !important;
  color: var(--text-primary) !important;
}

.submenu-item.active {
  background: var(--glass) !important;
  color: var(--accent) !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.submenu-dot {
  color: var(--accent);
  opacity: 0.7;
}
```

---

### File: src/app/pages/admin/dashboard/dashboard.component.html

```html
<div class="dashboard-layout">
  <aside class="sidebar glass-card">
    <div class="logo">
      <img src="/logo.png" alt="Eriline Logo" class="logo-img">
    </div>

    <nav>
      <div class="nav-section-label">PAGES</div>
      <div *ngFor="let page of pages" class="nav-item-wrapper">
        <!-- Main Menu Item (No Submenu) -->
        <a *ngIf="!page.submenu"
           [routerLink]="['/admin/dashboard', page.id]"
           routerLinkActive="active"
           style="display: flex; align-items: center; gap: 0.8rem; width: 100%;">
          <span class="nav-icon">{{page.icon}}</span>
          {{page.label}}
        </a>

        <!-- Main Menu Item (With Submenu) -->
        <a *ngIf="page.submenu"
           [class.active]="isSubmenuActive(page)"
           (click)="selectPage(page)"
           style="display: flex; justify-content: space-between; align-items: center; width: 100%; cursor: pointer;">
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <span class="nav-icon">{{page.icon}}</span>
            {{page.label}}
          </div>
          <span class="submenu-arrow" style="font-size: 0.6rem; opacity: 0.7;">
            {{ isSubmenuActive(page) ? '▼' : '▶' }}
          </span>
        </a>

        <!-- Submenu rendering -->
        <div *ngIf="page.submenu && isSubmenuActive(page)" class="submenu" style="padding-left: 1.5rem; margin-top: 0.25rem; display: flex; flex-direction: column; gap: 0.25rem;">
          <a *ngFor="let sub of page.submenu" 
             [routerLink]="['/admin/dashboard', sub.id]"
             routerLinkActive="active"
             class="submenu-item"
             style="padding: 0.5rem 0.8rem; font-size: 0.85rem; border-radius: 8px;">
             <span class="submenu-dot">•</span> {{sub.label}}
          </a>
        </div>
      </div>

      <div class="nav-section-label mt-2">ACCOUNT</div>
      <a (click)="auth.logout()" class="logout-link" style="cursor: pointer;">
        <span class="nav-icon">🚪</span>
        Logout
      </a>
    </nav>

    <div class="sidebar-footer">
      <p>v2.1.0 Premium Admin</p>
    </div>
  </aside>

  <main class="dashboard-main">
    <header class="dash-header">
      <div class="header-content">
        <div>
          <h1>{{selectedPage | titlecase}} Management</h1>
          <p>Global CMS Controls for Eriline Software Portal</p>
        </div>
        <div class="header-actions">
          <a href="/" target="_blank" class="btn-outline btn-sm">View Site</a>
          <div class="user-pill glass-card">
            <div class="avatar">{{auth.currentUser()?.charAt(0)}}</div>
            <span>{{auth.currentUser()}}</span>
          </div>
        </div>
      </div>
    </header>

    <div class="stats-grid">
      <div *ngFor="let stat of stats" class="stat-card glass-card">
        <div class="stat-icon">{{stat.icon}}</div>
        <div class="stat-data">
          <h3>{{stat.value}}</h3>
          <p>{{stat.label}}</p>
        </div>
      </div>
    </div>

    <!-- Active Child Page Render Target -->
    <router-outlet></router-outlet>
  </main>
</div>
```

---

### File: src/app/pages/admin/dashboard/dashboard.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedPage = 'home';

  pages = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Us', icon: 'ℹ️' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'portfolio', label: 'Portfolio', icon: '🎨' },
    { id: 'clients', label: 'Clients', icon: '🤝' },
    { 
      id: 'billing', 
      label: 'Invoices', 
      icon: '🧾',
      submenu: [
        { id: 'billing', label: 'Invoice Generator' },
        { id: 'scheduled-billing', label: 'Scheduled Maintenance' }
      ]
    },
    { id: 'contact', label: 'Contact', icon: '📧' },
    { id: 'seo', label: 'SEO Settings', icon: '🔍' }
  ];

  stats = [
    { label: 'Active Pages', value: '5', icon: '📄' },
    { label: 'Content Keys', value: '19', icon: '🔑' },
    { label: 'Live Projects', value: '6', icon: '🚀' }
  ];

  constructor(public auth: AuthService, private router: Router) {
    // Synchronize active menu state with route transitions
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlSegments = event.urlAfterRedirects.split('/');
        const lastSegment = urlSegments[urlSegments.length - 1];
        this.selectedPage = lastSegment || 'home';
      }
    });
  }

  ngOnInit() {
    // Initial sync
    const urlSegments = this.router.url.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    this.selectedPage = lastSegment && lastSegment !== 'dashboard' ? lastSegment : 'home';
  }

  isSubmenuActive(page: any): boolean {
    if (!page.submenu) return false;
    return page.submenu.some((sub: any) => sub.id === this.selectedPage);
  }

  selectPage(page: any) {
    if (page.submenu && page.submenu.length > 0) {
      this.router.navigate(['/admin/dashboard', page.submenu[0].id]);
    } else {
      this.router.navigate(['/admin/dashboard', page.id]);
    }
  }
}
```

---

### File: src/app/pages/admin/login/login.component.css

```css
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-dark);
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 3rem;
  text-align: center;
}

.center {
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.form-group {
  text-align: left;
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: var(--font-main);
}

.form-group input:focus {
  outline: none;
  border-color: var(--accent);
}

.error-msg {
  color: #ef4444;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

.w-full {
  width: 100%;
  justify-content: center;
}

.reset-link {
  color: var(--accent);
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}

.reset-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.text-center {
  text-align: center;
}

.mt-3 {
  margin-top: 1.5rem;
}

.mb-2 {
  margin-bottom: 1rem;
}

.success-msg {
  color: #10b981;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}
```

---

### File: src/app/pages/admin/login/login.component.html

```html
<div class="login-container">
  <div class="glass-card login-box animate-fade-in">
    <div class="logo center">
      <span class="logo-text">ERI<span class="accent-text">LINE</span></span>
    </div>
    <ng-container *ngIf="!showResetForm">
      <h2>Admin Login</h2>
      <p class="subtitle">Enter your credentials to manage site content.</p>

      <form (submit)="onSubmit()" #loginForm="ngForm">
        <div class="form-group">
          <label>Username</label>
          <input type="text" name="username" [(ngModel)]="credentials.username" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" name="password" [(ngModel)]="credentials.password" required>
        </div>
        
        <div *ngIf="error" class="error-msg">{{error}}</div>
        
        <button type="submit" class="btn-primary w-full mb-2" [disabled]="!loginForm.valid">Login</button>
      </form>
      <div class="text-center mt-3">
        <a href="javascript:void(0)" (click)="showResetForm = true; resetMessage=''; resetError=''; error=''" class="reset-link">Forgot Password?</a>
      </div>
    </ng-container>

    <ng-container *ngIf="showResetForm">
      <h2>Reset Password</h2>
      <p class="subtitle">Enter your username to reset your password.</p>

      <form (submit)="onReset()" #resetForm="ngForm">
        <div class="form-group">
          <label>Username</label>
          <input type="text" name="resetUsername" [(ngModel)]="resetUsername" required>
        </div>
        
        <div *ngIf="resetError" class="error-msg">{{resetError}}</div>
        <div *ngIf="resetMessage" class="success-msg">{{resetMessage}}</div>
        
        <button type="submit" class="btn-primary w-full mb-2" [disabled]="!resetForm.valid || isResetting">
          {{ isResetting ? 'Sending...' : 'Reset Password' }}
        </button>
      </form>
      <div class="text-center mt-3">
        <a href="javascript:void(0)" (click)="showResetForm = false; error=''" class="reset-link">Back to Login</a>
      </div>
    </ng-container>
  </div>
</div>
```

---

### File: src/app/pages/admin/login/login.component.ts

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  error = '';
  
  showResetForm = false;
  resetUsername = '';
  resetError = '';
  resetMessage = '';
  isResetting = false;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/admin/dashboard']),
      error: (err) => this.error = 'Invalid username or password'
    });
  }

  onReset() {
    if (!this.resetUsername) return;
    this.isResetting = true;
    this.resetError = '';
    this.resetMessage = '';

    this.auth.resetPassword(this.resetUsername).subscribe({
      next: (res) => {
        this.isResetting = false;
        this.resetMessage = res.message || 'Password reset instructions sent.';
        this.resetUsername = '';
      },
      error: (err) => {
        this.isResetting = false;
        this.resetError = err.error?.message || 'Failed to reset password.';
      }
    });
  }
}
```

---

### File: src/app/pages/admin/pages/billing/billing.component.html

```html
<section class="dash-section glass-card">
  <div class="flex-between mb-2">
    <h3>Invoice Generator</h3>
    <span class="badge">PRO VERSION</span>
  </div>

  <div *ngIf="message" class="alert-success animate-fade-in" style="margin-bottom: 1.5rem; padding: 0.8rem; background: rgba(40, 167, 69, 0.2); border: 1px solid #28a745; border-radius: 8px;">{{message}}</div>

  <!-- Create New Invoice Form -->
  <div class="invoice-creator glass-card mb-2" style="background: rgba(10, 33, 77, 0.2); border: 1px solid var(--accent); padding: 1.5rem; border-radius: 12px;">
    <h4 class="mb-1" style="font-size: 1.1rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem; margin-bottom: 1rem;">Create New Invoice</h4>
    
    <div class="grid-3 mb-1">
      <div class="input-group">
        <label>Client Name</label>
        <ng-select 
          [items]="(editableClients$ | async) || []"
          bindLabel="name"
          bindValue="name"
          [(ngModel)]="newInvoice.client_name"
          placeholder="Select a Client"
          class="custom-dark-select">
        </ng-select>
      </div>
      <div class="input-group">
        <label>Invoice #</label>
        <input [(ngModel)]="newInvoice.invoice_number" placeholder="INV-XXXXXX">
      </div>
      <div class="input-group">
        <label>Issue Date</label>
        <input type="date" [(ngModel)]="newInvoice.issue_date">
      </div>
    </div>

    <!-- Line Items Table -->
    <div class="items-table mt-2">
      <div class="flex-between mb-1" style="border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem;">
        <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">LINE ITEMS</label>
        <button class="btn-primary btn-xs" (click)="addInvoiceItem()">+ Add Item</button>
      </div>

      <div *ngFor="let item of newInvoice.items; let i = index; trackBy: trackByIndex" class="row-items" style="display: flex; gap: 0.8rem; align-items: center; margin-bottom: 0.8rem;">
        <div class="input-group" style="flex: 3;">
          <input [(ngModel)]="item.description" placeholder="Description (e.g. Monthly Maintenance)">
        </div>
        <div class="input-group" style="flex: 0.8;">
          <input type="number" [(ngModel)]="item.qty" placeholder="Qty">
        </div>
        <div class="input-group" style="flex: 1.2;">
          <input type="number" [(ngModel)]="item.price" placeholder="Price">
        </div>
        <button class="btn-danger btn-xs" style="height: 40px; padding: 0 1rem;" (click)="removeInvoiceItem(i)">X</button>
      </div>
    </div>

    <!-- Footer of Creator -->
    <div class="flex-between mt-2 pt-2" style="border-top: 1px solid var(--glass-border);">
      <div class="total-preview">
        <strong style="color: var(--text-secondary);">Total Amount: </strong>
        <span style="color: var(--accent); font-size: 1.4rem; font-weight: 700; margin-left: 0.5rem;">${{calculateTotal() | number:'1.2-2'}}</span>
      </div>
      <button class="btn-primary" [disabled]="!newInvoice.client_name || newInvoice.amount <= 0" (click)="saveInvoice()">Generate & Save Invoice</button>
    </div>
  </div>

  <!-- Recent Invoices List -->
  <h3 class="mb-1" style="font-size: 1.2rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem; margin-top: 2rem;">Recent Invoices</h3>
  <div class="invoice-list mt-1">
    <table class="w-full" style="border-collapse: collapse; text-align: left; width: 100%;">
      <thead>
        <tr style="border-bottom: 2px solid var(--glass-border); color: var(--text-secondary); font-size: 0.8rem;">
          <th style="padding: 0.8rem 0.5rem;"># NUMBER</th>
          <th style="padding: 0.8rem 0.5rem;">CLIENT</th>
          <th style="padding: 0.8rem 0.5rem;">DATE</th>
          <th style="padding: 0.8rem 0.5rem;">AMOUNT</th>
          <th style="padding: 0.8rem 0.5rem; text-align: center;">STATUS</th>
          <th style="padding: 0.8rem 0.5rem; text-align: right;">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let inv of invoices" style="border-bottom: 1px solid var(--glass-border); transition: var(--transition);">
          <td style="padding: 0.8rem 0.5rem;"><strong>{{inv.invoice_number}}</strong></td>
          <td style="padding: 0.8rem 0.5rem;">{{inv.client_name}}</td>
          <td style="padding: 0.8rem 0.5rem;">{{inv.issue_date | date}}</td>
          <td style="padding: 0.8rem 0.5rem; color: var(--accent); font-weight: 600;">${{inv.amount | number:'1.2-2'}}</td>
          <td style="padding: 0.8rem 0.5rem; text-align: center;">
            <span class="badge" [style.background]="inv.status === 'Paid' ? '#28a745' : '#dc3545'" 
                  (click)="toggleInvoiceStatus(inv)" style="cursor: pointer; user-select: none;" title="Click to toggle status">
              {{inv.status}}
            </span>
          </td>
          <td style="padding: 0.8rem 0.5rem; text-align: right;">
            <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <button class="btn-primary btn-xs" (click)="printInvoice(inv)">📄 Print</button>
              <button class="btn-danger btn-xs" (click)="deleteInvoice(inv.id)">🗑️</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p *ngIf="invoices.length === 0" class="empty-state mt-2">No invoices generated yet.</p>
  </div>
</section>
```

---

### File: src/app/pages/admin/pages/billing/billing.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../../../services/cms.service';

@Component({
  selector: 'app-admin-billing',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './billing.component.html'
})
export class AdminBillingComponent implements OnInit {
  contents: any[] = [];
  invoices: any[] = [];
  editableClients$ = new BehaviorSubject<any[]>([]);
  message = '';

  newInvoice: any = {
    invoice_number: 'INV-' + Date.now().toString().slice(-6),
    client_name: '',
    issue_date: new Date().toISOString().split('T')[0],
    amount: 0,
    status: 'Pending',
    items: [{ description: '', qty: 1, price: 0 }]
  };

  constructor(private cms: CmsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadInvoices();
    this.loadClients();
    
    // Check if clientName was passed via route query params
    this.route.queryParams.subscribe(params => {
      if (params['client']) {
        this.newInvoice.client_name = params['client'];
      }
    });
  }

  loadClients() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      const clientsItem = this.contents.find(i => i.content_key === 'clients_list');
      if (clientsItem) {
        try { this.editableClients$.next(JSON.parse(clientsItem.content_value)); } catch (e) { this.editableClients$.next([]); }
      }
    });
  }

  loadInvoices() {
    this.cms.getInvoices().subscribe(data => {
      this.invoices = data.map(inv => ({ 
        ...inv, 
        items: typeof inv.items === 'string' ? JSON.parse(inv.items) : inv.items 
      }));
    });
  }

  addInvoiceItem() {
    this.newInvoice.items.push({ description: '', qty: 1, price: 0 });
  }

  removeInvoiceItem(index: number) {
    this.newInvoice.items.splice(index, 1);
  }

  calculateTotal() {
    this.newInvoice.amount = this.newInvoice.items.reduce((acc: number, item: any) => acc + (item.qty * item.price), 0);
    return this.newInvoice.amount;
  }

  saveInvoice() {
    this.calculateTotal();
    this.cms.createInvoice(this.newInvoice).subscribe(() => {
        this.showMessage('Invoice generated successfully!');
        this.loadInvoices();
        this.newInvoice = {
            invoice_number: 'INV-' + Date.now().toString().slice(-6),
            client_name: '',
            issue_date: new Date().toISOString().split('T')[0],
            amount: 0,
            status: 'Pending',
            items: [{ description: '', qty: 1, price: 0 }]
        };
    });
  }

  deleteInvoice(id: number) {
    if (confirm('Are you sure you want to delete this invoice?')) {
        this.cms.deleteInvoice(id).subscribe(() => {
            this.showMessage('Invoice deleted');
            this.loadInvoices();
        });
    }
  }

  toggleInvoiceStatus(inv: any) {
    const newStatus = inv.status === 'Paid' ? 'Pending' : 'Paid';
    this.cms.updateInvoiceStatus(inv.id, newStatus).subscribe(() => {
        inv.status = newStatus;
        this.showMessage(`Invoice #${inv.invoice_number} marked as ${newStatus}`);
    });
  }

  printInvoice(inv: any) {
    const client = this.editableClients$.value.find(c => c.name === inv.client_name);
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const itemsHtml = inv.items.map((it: any, index: number) => `
        <tr style="background: ${index % 2 === 0 ? '#fff' : '#ffe9da'};">
            <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: 500;">${it.description}</td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: center;">${it.qty || ''}</td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right; font-weight: 500;">${Number(it.price * (it.qty || 1)).toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
        </tr>
    `).join('');

    printWindow.document.write(`
        <html>
            <head>
                <title>Eriline Invoice - ${inv.invoice_number}</title>
                <style>
                    @page { size: A4; margin: 0; }
                    body { 
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                        margin: 0; 
                        padding: 0;
                        -webkit-print-color-adjust: exact;
                        color: #333;
                    }
                    .a4-container {
                        width: 210mm;
                        min-height: 297mm;
                        margin: auto;
                        background: #fff;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .top-header {
                        height: 120px;
                        display: flex;
                        align-items: flex-end;
                        position: relative;
                        overflow: hidden;
                    }
                    .header-accent-yellow {
                        position: absolute;
                        top: 0; left: 0;
                        width: 45%;
                        height: 100px;
                        background: #F2A93B;
                        clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
                    }
                    .header-accent-navy {
                        position: absolute;
                        top: 20px; left: 40%;
                        width: 60%;
                        height: 80px;
                        background: #0A214D;
                        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
                    }
                    .header-logo-container {
                        position: absolute;
                        top: 25px;
                        left: 50px;
                        z-index: 10;
                        background: #0A214D;
                        padding: 10px 20px;
                        border-radius: 4px;
                        border-left: 8px solid #F2A93B;
                    }
                    .date-box {
                        position: absolute;
                        top: 70px;
                        right: 0;
                        background: #e9ecef;
                        padding: 8px 40px;
                        font-weight: 500;
                        font-size: 14px;
                    }
                    .client-info {
                        padding: 40px 60px;
                        font-size: 15px;
                        line-height: 1.6;
                    }
                    .items-table {
                        width: calc(100% - 120px);
                        margin: 0 60px;
                        border-collapse: collapse;
                    }
                    .items-table th {
                        background: #f18c35;
                        color: white;
                        text-align: left;
                        padding: 12px;
                        font-size: 18px;
                        text-transform: uppercase;
                    }
                    .totals-section {
                        margin: 20px 60px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }
                    .totals-row {
                        display: grid;
                        grid-template-columns: 150px 150px;
                        text-align: right;
                        padding: 5px 0;
                    }
                    .note-box {
                        margin: 40px 60px;
                        border: 1.5px solid #f18c35;
                        padding: 15px 25px;
                        border-radius: 4px;
                    }
                    .footer-info {
                        margin-top: auto;
                        padding: 40px 60px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        font-size: 14px;
                        font-weight: 500;
                    }
                    .footer-accent {
                        height: 30px;
                        display: flex;
                    }
                    .footer-yellow { background: #F2A93B; flex: 1; clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%); }
                    .footer-navy { background: #0A214D; width: 40%; }
                    
                    @media print {
                        .no-print { display: none; }
                        body { margin: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="a4-container">
                    <div class="top-header">
                        <div class="header-accent-yellow"></div>
                        <div class="header-accent-navy"></div>
                        <div class="header-logo-container">
                            <img src="${window.location.origin}/logo.png" style="height: 45px; display: block;">
                        </div>
                        <div class="date-box">
                            Date: ${new Date(inv.issue_date).toLocaleDateString('en-GB')}
                        </div>
                    </div>

                    <div class="client-info">
                        <p style="margin-bottom: 5px;">To,</p>
                        <h2 style="margin: 0; color: #000;">${inv.client_name}</h2>
                        ${client && client.address ? `<p style="white-space: pre-line; margin: 5px 0;">${client.address}</p>` : ''}
                        ${client && client.phone ? `<p style="margin: 5px 0; display: inline-block;">${client.phone}</p>` : ''}
                        ${client && client.email ? `<p style="margin: 5px 0;">${client.email}</p>` : ''}
                    </div>

                    <table class="items-table" style="width: calc(100% - 120px); margin: 0 60px; border-collapse: collapse;">
                        <thead>
                            <tr>
                                <th style="width: 65%; text-align: left; padding: 12px; background: #f18c35; color: white;">Description</th>
                                <th style="text-align: center; width: 15%; padding: 12px; background: #f18c35; color: white;">QTY</th>
                                <th style="text-align: right; width: 20%; padding: 12px; background: #f18c35; color: white;">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                            <tr style="height: 40px;"><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>

                    <div class="totals-section">
                        <div class="totals-row">
                            <span style="color: #666;">Total</span>
                            <span style="font-weight: bold;">${Number(inv.amount).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                        </div>
                        <div class="totals-row">
                            <span style="color: #666;">Paid</span>
                            <span>-0.00</span>
                        </div>
                         <div class="totals-row" style="border-top: 1px solid #ddd; margin-top: 5px; padding-top: 10px; font-size: 20px;">
                            <span style="font-weight: bold;">Total</span>
                            <span style="font-weight: bold; color: #0A214D;">${Number(inv.amount).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                        </div>
                    </div>

                    <div class="note-box">
                        <strong style="color: #d9534f; font-size: 18px;">Note:</strong>
                        <ul style="margin: 10px 0; color: #444;">
                            <li>Thank you for choosing Eriline Software Solutions.</li>
                            <li>Payments are due within 15 days of issue.</li>
                        </ul>
                    </div>

                    <div class="footer-info">
                        <p style="margin: 5px 0;">roshansiva1991@gmail.com ✉️</p>
                        <p style="margin: 5px 0;">+94719195591 📞</p>
                        <p style="margin: 5px 0;">Eriline.lk / Eriline.co 🌐</p>
                    </div>

                    <div class="footer-accent">
                        <div style="background: #0A214D; width: 50%;"></div>
                        <div style="background: #F2A93B; flex: 1; clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);"></div>
                    </div>

                    <div class="no-print" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);">
                         <button onclick="window.print()" style="padding: 15px 40px; background: #0A214D; color: white; border: none; border-radius: 50px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">🖨️ PRINT INVOICE / SAVE PDF</button>
                    </div>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
```

---

### File: src/app/pages/admin/pages/clients/clients.component.html

```html
<section class="dash-section glass-card">
  <div class="flex-between mb-2">
    <h3>Corporate Clients & Partners</h3>
    <button class="btn-primary" (click)="addClient()">+ Add Client</button>
  </div>

  <div *ngIf="message$ | async" class="alert-success animate-fade-in"
    style="margin-bottom: 1rem; padding: 0.8rem; background: rgba(40, 167, 69, 0.2); border: 1px solid #28a745; border-radius: 8px;">
    {{message$ | async}}</div>

  <div class="portfolio-manager-list grid-2">
    <div *ngFor="let client of (editableClients$ | async); let i = index" id="client-card-{{i}}" class="portfolio-edit-item glass-card mb-1">
      <div class="proj-img-preview">
        <img [src]="getImageUrl(client.logo)"
          style="background: white; padding: 10px; border-radius: 8px; object-fit: contain;max-width: 10rem; height: auto !important;">
        <div class="img-controls mt-1">
          <input type="file" (change)="onFileSelected($event)">
          <button class="btn-primary btn-xs mt-1" [disabled]="uploading$ | async" (click)="uploadListItemImage(client)">
            {{(uploading$ | async) ? 'Processing...' : 'Update Logo'}}
          </button>
        </div>
      </div>
      <div class="proj-fields mt-1">
        <div class="input-group">
          <label>Client Name</label>
          <input [(ngModel)]="client.name" placeholder="Client Name">
        </div>
        <div class="input-group mt-1">
          <label>Industry</label>
          <input [(ngModel)]="client.industry" placeholder="Industry">
        </div>
        <div class="input-group mt-1">
          <label>Address</label>
          <input [(ngModel)]="client.address" placeholder="Client Address">
        </div>
        <div class="input-group mt-1">
          <label>Phone Number</label>
          <input [(ngModel)]="client.phone" placeholder="Phone Number">
        </div>
        <div class="input-group mt-1">
          <label>Email Address</label>
          <input [(ngModel)]="client.email" placeholder="Email Address">
        </div>

        <div class="input-group mt-1">
          <label style="display: block; margin-bottom: 5px;">Utilized Products</label>
          <div class="flex-row gap-0-5 flex-wrap">
            <span *ngFor="let prod of editableProducts" (click)="toggleClientProduct(client, prod.name)" class="badge"
              [style.background]="isProductSelected(client, prod.name) ? 'var(--accent)' : 'rgba(255,255,255,0.1)'"
              [style.border]="isProductSelected(client, prod.name) ? '1px solid white' : '1px solid rgba(255,255,255,0.2)'"
              style="cursor: pointer; font-size: 0.75rem; padding: 4px 10px; transition: all 0.2s;">
              {{prod.name}}
            </span>
            <p *ngIf="editableProducts.length === 0" style="font-size: 0.8rem; color: #888;">No products defined.</p>
          </div>
        </div>

        <div class="flex-row gap-0-5 mt-1">
          <button class="btn-primary btn-xs" (click)="saveClients()">💾 Save Client</button>
          <button *ngIf="!client.isNew" class="btn-primary btn-xs" (click)="quickInvoice(client.name)">🧾 Create Invoice</button>
          <button class="btn-danger btn-xs" (click)="removeClient(i)">🗑️</button>
        </div>
      </div>
    </div>
  </div>
  <button class="btn-primary w-full mt-2" (click)="saveClients()">Publish Client List Updates</button>
</section>

<!-- Saved Clients Directory Table -->
<section class="dash-section glass-card mt-2" style="margin-top: 2rem;">
  <div class="flex-between mb-2">
    <h3>Saved Clients Directory</h3>
    <span class="badge">{{(editableClients$ | async)?.length || 0}} Active</span>
  </div>

  <div class="invoice-list mt-1">
    <table class="w-full" style="border-collapse: collapse; text-align: left; width: 100%;">
      <thead>
        <tr style="border-bottom: 2px solid var(--glass-border); color: var(--text-secondary); font-size: 0.8rem;">
          <th style="padding: 0.8rem 0.5rem; width: 80px;">LOGO</th>
          <th style="padding: 0.8rem 0.5rem;">CLIENT NAME</th>
          <th style="padding: 0.8rem 0.5rem;">INDUSTRY</th>
          <th style="padding: 0.8rem 0.5rem;">CONTACT INFO</th>
          <th style="padding: 0.8rem 0.5rem;">UTILIZED PRODUCTS</th>
          <th style="padding: 0.8rem 0.5rem; text-align: right;">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let client of (editableClients$ | async); let i = index" style="border-bottom: 1px solid var(--glass-border); transition: var(--transition);">
          <td style="padding: 0.8rem 0.5rem;">
            <img [src]="getImageUrl(client.logo)" style="width: 40px; height: 40px; border-radius: 6px; object-fit: contain; background: white; padding: 2px;">
          </td>
          <td style="padding: 0.8rem 0.5rem;"><strong>{{client.name}}</strong></td>
          <td style="padding: 0.8rem 0.5rem;"><span class="badge">{{client.industry}}</span></td>
          <td style="padding: 0.8rem 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            <div *ngIf="client.email">📧 {{client.email}}</div>
            <div *ngIf="client.phone">📞 {{client.phone}}</div>
          </td>
          <td style="padding: 0.8rem 0.5rem;">
            <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
              <span *ngFor="let prod of client.products" class="badge" style="background: rgba(242, 169, 59, 0.15); border-color: var(--accent); color: var(--accent); font-size: 0.7rem;">
                {{prod}}
              </span>
              <span *ngIf="!client.products || client.products.length === 0" style="font-size: 0.8rem; color: #666; font-style: italic;">None</span>
            </div>
          </td>
          <td style="padding: 0.8rem 0.5rem; text-align: right;">
            <button class="btn-outline btn-xs" (click)="scrollToClient(i)">✏️ Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p *ngIf="!(editableClients$ | async) || (editableClients$ | async)?.length === 0" class="empty-state mt-2">No saved clients found.</p>
  </div>
</section>
```

---

### File: src/app/pages/admin/pages/clients/clients.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../../../services/cms.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-admin-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html'
})
export class AdminClientsComponent implements OnInit {
  contents: any[] = [];
  editableProducts: any[] = [];
  editableClients$ = new BehaviorSubject<any[]>([]);
  selectedFile: File | null = null;
  uploading$ = new BehaviorSubject<boolean>(false);
  message$ = new BehaviorSubject<string>('');

  constructor(private cms: CmsService, private router: Router) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      
      // Parse products list for utilized products selection
      const productItem = this.contents.find(i => i.content_key === 'products_list');
      if (productItem) {
        try { this.editableProducts = JSON.parse(productItem.content_value); } catch (e) { this.editableProducts = []; }
      }

      // Parse clients list
      const clientsItem = this.contents.find(i => i.content_key === 'clients_list');
      if (clientsItem) {
        try { this.editableClients$.next(JSON.parse(clientsItem.content_value)); } catch (e) { this.editableClients$.next([]); }
      }
    });
  }

  addClient() {
    const clients = [...this.editableClients$.value];
    clients.push({ 
      name: 'New Client', 
      industry: 'Retail', 
      logo: '/client-1.png',
      address: '',
      phone: '',
      email: '',
      products: [],
      isNew: true
    });
    this.editableClients$.next(clients);
  }

  toggleClientProduct(client: any, productName: string) {
    if (!client.products) client.products = [];
    const index = client.products.indexOf(productName);
    if (index > -1) {
      client.products.splice(index, 1);
    } else {
      client.products.push(productName);
    }
    this.editableClients$.next([...this.editableClients$.value]);
  }

  isProductSelected(client: any, productName: string) {
    return client.products && client.products.includes(productName);
  }

  removeClient(index: number) {
    const clients = [...this.editableClients$.value];
    clients.splice(index, 1);
    this.editableClients$.next(clients);
  }

  quickInvoice(clientName: string) {
    this.router.navigate(['/admin/dashboard/billing'], { queryParams: { client: clientName } });
  }

  saveClients() {
    const cleanedClients = this.editableClients$.value.map(c => {
      const { isNew, ...rest } = c;
      return rest;
    });
    this.cms.updateContent({ content_key: 'clients_list', content_value: JSON.stringify(cleanedClients), page: 'clients' }).subscribe(() => {
        this.showMessage('Client list published successfully!');
        this.loadContent();
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadListItemImage(item: any) {
      if (!this.selectedFile) return;
      this.uploading$.next(true);
      this.cms.uploadImage(this.selectedFile).subscribe({
          next: (res) => {
              item.logo = res.url;
              this.editableClients$.next([...this.editableClients$.value]);
              this.saveClients();
              this.uploading$.next(false);
              this.selectedFile = null;
          },
          error: () => this.uploading$.next(false)
      });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/hero.png';
  }

  showMessage(msg: string) {
    this.message$.next(msg);
    setTimeout(() => this.message$.next(''), 3000);
  }

  scrollToClient(index: number) {
    const element = document.getElementById(`client-card-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('highlight-flash');
      setTimeout(() => {
        element.classList.remove('highlight-flash');
      }, 2000);
    }
  }
}
```

---

### File: src/app/pages/admin/pages/content-editor/content-editor.component.html

```html
<div *ngIf="message" class="alert-success animate-fade-in" style="margin-bottom: 1.5rem; padding: 0.8rem; background: rgba(40, 167, 69, 0.2); border: 1px solid #28a745; border-radius: 8px;">{{message}}</div>

<!-- SEO & Analytics Manager (Shown on Home or SEO page) -->
<section *ngIf="selectedPage === 'home' || selectedPage === 'seo'" class="dash-section glass-card" style="margin-bottom: 2rem;">
  <div class="flex-between mb-2">
    <h3>SEO & Google Analytics</h3>
    <span class="badge">GLOBAL SETTINGS</span>
  </div>
  <div class="input-group">
    <label>Google Analytics Tracking ID (e.g. G-XXXXXXXXXX)</label>
    <div style="display: flex; gap: 10px;">
      <input [(ngModel)]="gaTrackingId" placeholder="Leave empty to disable tracking" style="flex: 1;">
      <button class="btn-primary" (click)="saveAnalytics()">Save Analytics Config</button>
    </div>
  </div>
</section>

<!-- Content Editor Section -->
<section class="dash-section glass-card">
  <div class="flex-between mb-2" style="border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem;">
    <h3>Content Editor</h3>
    <span class="badge" style="text-transform: uppercase;">{{selectedPage}} Page</span>
  </div>

  <div class="content-table" *ngIf="filteredContents.length > 0; else noContent">
    <div *ngFor="let item of filteredContents" class="content-item" style="border-bottom: 1px solid var(--glass-border); padding: 1.5rem 0; display: flex; flex-direction: column; gap: 1rem;">
      
      <!-- Image Upload Fields -->
      <ng-container *ngIf="item.content_key.endsWith('_image_url')">
        <div class="item-header flex-between">
          <span class="key-label" style="font-weight: 700; color: var(--accent); letter-spacing: 0.5px;">{{item.content_key | uppercase}}</span>
        </div>
        
        <div class="hero-upload-preview" style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; background: rgba(255,255,255,0.02); padding: 1rem; border-radius: 8px;">
          <img [src]="getImageUrl(item.content_value)" class="mini-hero" style="width: 120px; height: 80px; object-fit: cover; border-radius: 8px; border: 1px solid var(--glass-border); background: #fff;">
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <input type="file" (change)="onFileSelected($event)" style="font-size: 0.85rem; border: none; background: transparent; padding: 0;">
            <button class="btn-primary btn-xs" [disabled]="uploading" (click)="uploadCmsImage(item.content_key, item.page)" style="align-self: flex-start;">
              {{uploading ? 'Uploading...' : 'Upload & Publish Image'}}
            </button>
          </div>
        </div>
      </ng-container>

      <!-- Text / HTML Content Fields -->
      <ng-container *ngIf="item.content_key !== 'products_list' && item.content_key !== 'portfolio_list' && item.content_key !== 'clients_list' && !item.content_key.endsWith('_image_url')">
        <div class="item-header flex-between">
          <span class="key-label" style="font-weight: 600; color: var(--text-primary);">{{item.content_key}}</span>
          <button class="btn-primary btn-xs" (click)="saveContent(item)">💾 Save Item</button>
        </div>

        <!-- Rich Text Editor (ngx-quill) -->
        <div *ngIf="richTextKeys.includes(item.content_key); else plainText" class="quill-wrapper">
          <quill-editor [(ngModel)]="item.content_value" [modules]="quillConfig" theme="snow">
          </quill-editor>
        </div>

        <!-- Plain Text Area -->
        <ng-template #plainText>
          <div class="input-group">
            <textarea [(ngModel)]="item.content_value" rows="4" style="resize: vertical;"></textarea>
          </div>
        </ng-template>
      </ng-container>

    </div>
  </div>

  <ng-template #noContent>
    <p class="empty-state">No editable text or image fields found for this page.</p>
  </ng-template>
</section>
```

---

### File: src/app/pages/admin/pages/content-editor/content-editor.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { CmsService } from '../../../../services/cms.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-admin-content-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, QuillModule],
  templateUrl: './content-editor.component.html'
})
export class AdminContentEditorComponent implements OnInit {
  contents: any[] = [];
  filteredContents: any[] = [];
  selectedPage = 'home';
  selectedFile: File | null = null;
  uploading = false;
  message = '';
  gaTrackingId = '';

  richTextKeys = [
    'hero_subtitle', 
    'about_title',
    'about_subtitle',
    'about_story_text', 
    'about_mission_text', 
    'about_vision_text', 
    'products_subtitle', 
    'portfolio_subtitle', 
    'contact_subtitle'
  ];

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean'],
      ['link']
    ]
  };

  constructor(private cms: CmsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.selectedPage = data['page'] || 'home';
      this.loadContent();
    });
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      this.filteredContents = this.contents.filter(item => item.page === this.selectedPage);
      
      // Load Analytics Tracking ID
      const gaItem = this.contents.find(i => i.content_key === 'ga_tracking_id');
      if (gaItem) {
        this.gaTrackingId = gaItem.content_value;
      } else {
        this.gaTrackingId = '';
      }
    });
  }

  saveContent(item: any) {
    this.cms.updateContent(item).subscribe(() => {
      this.showMessage('Content updated successfully!');
      this.loadContent();
    });
  }

  saveAnalytics() {
    this.cms.updateContent({ 
      content_key: 'ga_tracking_id', 
      content_value: this.gaTrackingId || '', 
      page: 'global' 
    }).subscribe(() => {
      this.showMessage('Analytics settings updated successfully!');
      this.loadContent();
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadCmsImage(key: string, page: string) {
    if (!this.selectedFile) return;
    this.uploading = true;
    this.cms.uploadImage(this.selectedFile).subscribe({
      next: (res) => {
        this.cms.updateContent({ 
          content_key: key, 
          content_value: res.url, 
          page: page 
        }).subscribe(() => {
          this.showMessage('Image uploaded successfully!');
          this.uploading = false;
          this.loadContent();
          this.selectedFile = null;
        });
      },
      error: () => {
        this.uploading = false;
        this.showMessage('Failed to upload image.');
      }
    });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/hero.png';
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3500);
  }
}
```

---

### File: src/app/pages/admin/pages/portfolio/portfolio.component.html

```html
<section class="dash-section glass-card">
  <div class="flex-between mb-2">
    <h3>Project Showcase Manager</h3>
    <button class="btn-primary" (click)="addPortfolioItem()">+ Add Project</button>
  </div>

  <div *ngIf="message" class="alert-success animate-fade-in"
    style="margin-bottom: 1rem; padding: 0.8rem; background: rgba(40, 167, 69, 0.2); border: 1px solid #28a745; border-radius: 8px;">
    {{message}}</div>

  <div class="portfolio-manager-list grid-2">
    <div *ngFor="let proj of (editablePortfolio | async); let i = index" class="portfolio-edit-item glass-card mb-1">
      <div class="proj-img-preview">
        <img [src]="getImageUrl(proj.image)" style="max-width: 10rem !important; height: auto !important;">
        <div class="img-controls mt-1">
          <input type="file" (change)="onFileSelected($event)">
          <button class="btn-primary btn-xs mt-1" [disabled]="uploading" (click)="uploadListItemImage(proj)">
            {{uploading ? 'Processing...' : 'Change Image'}}
          </button>
        </div>
      </div>
      <div class="proj-fields mt-1">
        <div class="input-group">
          <label>Project Title</label>
          <input [(ngModel)]="proj.title" placeholder="Project Title">
        </div>
        <div class="input-group mt-1">
          <label>Category</label>
          <input [(ngModel)]="proj.category" placeholder="Category">
        </div>
        <button class="btn-danger btn-xs mt-1" (click)="removePortfolioItem(i)">Remove Project</button>
      </div>
    </div>
  </div>
  <button class="btn-primary w-full mt-2" (click)="savePortfolio()">Publish Portfolio Updates</button>
</section>
```

---

### File: src/app/pages/admin/pages/portfolio/portfolio.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CmsService } from '../../../../services/cms.service';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html'
})
export class AdminPortfolioComponent implements OnInit {
  contents = new BehaviorSubject<any[]>([]);
  editablePortfolio = new BehaviorSubject<any[]>([]);
  selectedFile: File | null = null;
  uploading = false;
  message = '';

  constructor(private cms: CmsService) { }

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents.next(data);
      const portfolioItem = this.contents.value.find(i => i.content_key === 'portfolio_list');
      if (portfolioItem) {
        try {
          this.editablePortfolio.next(JSON.parse(portfolioItem.content_value));
        } catch (e) {
          this.editablePortfolio.next([]);
        }
      }
    });
  }

  addPortfolioItem() {
    this.editablePortfolio.next([...this.editablePortfolio.value, { title: 'New Project', category: 'Software', image: '/startup.png' }]);
  }

  removePortfolioItem(index: number) {
    this.editablePortfolio.next(this.editablePortfolio.value.filter((_, i) => i !== index));
  }

  savePortfolio() {
    const portfolioItem = this.contents.value.find(i => i.content_key === 'portfolio_list');
    if (portfolioItem) {
      portfolioItem.content_value = JSON.stringify(this.editablePortfolio.value);
      this.cms.updateContent(portfolioItem).subscribe(() => {
        this.showMessage('Portfolio updates published successfully!');
        this.loadContent();
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadListItemImage(item: any) {
    if (!this.selectedFile) return;
    this.uploading = true;
    this.cms.uploadImage(this.selectedFile).subscribe({
      next: (res) => {
        item.image = res.url;
        this.savePortfolio();
        this.uploading = false;
        this.selectedFile = null;
      },
      error: () => this.uploading = false
    });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/hero.png';
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }
}
```

---

### File: src/app/pages/admin/pages/products/products.component.html

```html
<section class="dash-section glass-card">
  <div class="flex-between mb-2">
    <h3>Software Catalog Editor</h3>
    <button class="btn-primary" (click)="addProduct()">+ New Product</button>
  </div>

  <div *ngIf="message" class="alert-success animate-fade-in"
    style="margin-bottom: 1rem; padding: 0.8rem; background: rgba(40, 167, 69, 0.2); border: 1px solid #28a745; border-radius: 8px;">
    {{message}}</div>

  <div class="product-manager-list">
    <div *ngFor="let prod of (editableProducts | async); let i = index" class="product-edit-item glass-card mb-1"
      style="background: rgba(255,255,255,0.02); margin-bottom: 1.5rem; padding: 1.5rem; border-radius: 12px; border: 1px solid var(--glass-border);">
      <div class="prod-row" style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div class="input-group" style="flex: 1; min-width: 150px;">
          <label>ID (URL Slug)</label>
          <input [(ngModel)]="prod.id" placeholder="e.g. pos">
        </div>
        <div class="input-group" style="flex: 2; min-width: 200px;">
          <label>System Name</label>
          <input [(ngModel)]="prod.name" placeholder="Product Name">
        </div>
        <div class="input-group" style="flex: 1; min-width: 150px;">
          <label>Type / Badge</label>
          <input [(ngModel)]="prod.type" placeholder="Type (e.g. POS)">
        </div>
        <div class="input-group" style="flex: 0.5; min-width: 80px;">
          <label>Icon</label>
          <input [(ngModel)]="prod.icon" placeholder="💡" style="text-align: center;">
        </div>
        <button class="btn-danger btn-icon" style="align-self: flex-end; height: 42px; width: 42px;"
          (click)="removeProduct(i)">🗑️</button>
      </div>

      <div class="input-group mt-1">
        <label>Short Description (Card View)</label>
        <input [(ngModel)]="prod.shortDesc" placeholder="Brief summary of the product...">
      </div>

      <div class="features-edit-row mt-1 p-1" style="background: rgba(0,0,0,0.1); border-radius: 8px; padding: 1rem;">
        <label class="field-label flex-between"
          style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.85rem; font-weight: 600;">
          <span>Key Features (Card View)</span>
          <button class="btn-primary btn-xs" (click)="addProductFeature(i)">+ Add Feature</button>
        </label>
        <div *ngFor="let feat of prod.features; let fIndex = index; trackBy: trackByIndex" class="flex-between mt-1"
          style="display: flex; gap: 10px; margin-bottom: 0.5rem;">
          <input [(ngModel)]="prod.features[fIndex]" style="flex: 1;" placeholder="Feature detail...">
          <button class="btn-danger btn-xs" style="padding: 0.2rem 0.5rem;"
            (click)="removeProductFeature(i, fIndex)">X</button>
        </div>
      </div>

      <div class="quill-wrapper mt-2">
        <label class="field-label"
          style="display: block; margin-bottom: 0.5rem; font-size: 0.85rem; font-weight: 600; color: #333;">Rich
          Description (Details Page)</label>
        <quill-editor [(ngModel)]="prod.description" [modules]="quillConfig" theme="snow">
        </quill-editor>
      </div>
    </div>
  </div>
  <button class="btn-primary w-full mt-2" (click)="saveProducts()">Publish Catalog Updates</button>
</section>
```

---

### File: src/app/pages/admin/pages/products/products.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CmsService } from '../../../../services/cms.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, FormsModule, QuillModule],
  templateUrl: './products.component.html'
})
export class AdminProductsComponent implements OnInit {
  contents = new BehaviorSubject<any[]>([]);
  editableProducts = new BehaviorSubject<any[]>([]);
  message = '';

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean'],
      ['link']
    ]
  };

  constructor(private cms: CmsService) { }

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents.next(data);
      const productItem = this.contents.value.find(i => i.content_key === 'products_list');
      if (productItem) {
        try {
          this.editableProducts.next(JSON.parse(productItem.content_value));
        } catch (e) {
          this.editableProducts.next([]);
        }
      }
    });
  }

  addProduct() {
    this.editableProducts.next([...this.editableProducts.value, {
      id: 'new-product',
      type: 'NEW',
      name: 'New Product',
      shortDesc: 'Briefly describe this solution.',
      icon: '💡',
      features: ['Highlight Feature 1'],
      description: '<h2>Overview</h2><p>Extended details here...</p>',
      clients: []
    }]);
  }

  removeProduct(index: number) {
    this.editableProducts.next(this.editableProducts.value.filter((_, i) => i !== index));
  }

  addProductFeature(prodIndex: number) {
    if (!this.editableProducts.value[prodIndex].features) {
      this.editableProducts.value[prodIndex].features = [];
    }
    this.editableProducts.value[prodIndex].features.push('New Feature');
  }

  removeProductFeature(prodIndex: number, featureIndex: number) {
    this.editableProducts.value[prodIndex].features.splice(featureIndex, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  saveProducts() {
    const productItem = this.contents.value.find((i: any) => i.content_key === 'products_list');
    if (productItem) {
      productItem.content_value = JSON.stringify(this.editableProducts);
      this.cms.updateContent(productItem).subscribe(() => {
        this.showMessage('Catalog updates published successfully!');
        this.loadContent();
      });
    }
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }
}
```

---

### File: src/app/pages/admin/pages/scheduled-billing/scheduled-billing.component.html

```html
<section class="dash-section glass-card">
  <div class="flex-between mb-2">
    <h3>Scheduled Maintenance Billing</h3>
    <span class="badge">RECURRING BILLING</span>
  </div>

  <div *ngIf="message" class="alert-success animate-fade-in" style="margin-bottom: 1.5rem; padding: 0.8rem; background: rgba(40, 167, 69, 0.2); border: 1px solid #28a745; border-radius: 8px;">{{message}}</div>

  <!-- Create New Scheduled Invoice Form -->
  <div class="invoice-creator glass-card mb-2" style="background: rgba(10, 33, 77, 0.2); border: 1px solid var(--accent); padding: 1.5rem; border-radius: 12px;">
    <h4 class="mb-1" style="font-size: 1.1rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem; margin-bottom: 1rem;">Setup Recurring Maintenance Contract</h4>
    
    <div class="grid-3 mb-1">
      <div class="input-group">
        <label>Client Name</label>
        <ng-select 
          [items]="(editableClients$ | async) || []"
          bindLabel="name"
          bindValue="name"
          [(ngModel)]="newScheduledInvoice.client_name"
          placeholder="Select a Client"
          class="custom-dark-select">
        </ng-select>
      </div>
      <div class="input-group">
        <label>Service / Contract Name</label>
        <input [(ngModel)]="newScheduledInvoice.service_name" placeholder="e.g. VPS Maintenance / ERP Support">
      </div>
      <div class="input-group">
        <label>Billing Frequency</label>
        <ng-select 
          [items]="frequencies"
          [(ngModel)]="newScheduledInvoice.frequency"
          [searchable]="false"
          [clearable]="false"
          class="custom-dark-select">
        </ng-select>
      </div>
    </div>

    <div class="grid-2 mb-1">
      <div class="input-group">
        <label>Base Price / Cycle Amount ($)</label>
        <input type="number" [(ngModel)]="newScheduledInvoice.amount" placeholder="0.00">
      </div>
      <div class="input-group">
        <label>First Billing Date</label>
        <input type="date" [(ngModel)]="newScheduledInvoice.start_date">
      </div>
    </div>

    <!-- Actions Footer -->
    <div class="flex-between mt-2 pt-2" style="border-top: 1px solid var(--glass-border);">
      <p style="font-size: 0.8rem; color: var(--text-secondary);">Generates invoice automaticaly on next bill date or can be run manually.</p>
      <button class="btn-primary" [disabled]="!newScheduledInvoice.client_name || !newScheduledInvoice.service_name || newScheduledInvoice.amount <= 0" (click)="saveScheduledInvoice()">Create Recurring Contract</button>
    </div>
  </div>

  <!-- Active Schedules Listing -->
  <h3 class="mb-1" style="font-size: 1.2rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem; margin-top: 2.5rem;">Active Recurring Contracts</h3>
  
  <div class="grid-2 mt-1" *ngIf="scheduledInvoices.length > 0; else emptySchedules">
    <div *ngFor="let sched of scheduledInvoices" class="glass-card" style="padding: 1.2rem; display: flex; flex-direction: column; justify-content: space-between; border-radius: 12px; min-height: 220px; transition: var(--transition); background: rgba(255,255,255,0.02);">
      <div>
        <div class="flex-between mb-1">
          <h4 style="color: var(--accent); font-size: 1.1rem; margin: 0;">{{sched.service_name}}</h4>
          <span class="badge" [style.background]="sched.status === 'Active' ? '#28a745' : '#dc3545'">{{sched.status}}</span>
        </div>
        <p style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.8rem;">Client: {{sched.client_name}}</p>
        
        <div style="font-size: 0.85rem; color: var(--text-secondary); display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
          <div>Frequency: <strong style="color: #fff;">{{sched.frequency}}</strong></div>
          <div>Cycle Amount: <strong style="color: #fff;">${{sched.amount | number:'1.2-2'}}</strong></div>
          <div>Start Date: <strong style="color: #fff;">{{sched.start_date | date:'shortDate'}}</strong></div>
          <div>Next Bill Date: <strong style="color: #fff;">{{sched.next_bill_date | date:'shortDate'}}</strong></div>
        </div>
      </div>

      <div style="display: flex; gap: 0.4rem; border-top: 1px solid var(--glass-border); padding-top: 0.8rem; margin-top: auto;">
        <button class="btn-primary btn-xs" style="flex: 1; justify-content: center;" [disabled]="loading" (click)="triggerScheduledInvoiceNow(sched)">⚡ Run Now</button>
        <button class="btn-outline btn-xs" style="flex: 1; justify-content: center;" (click)="toggleScheduledInvoiceStatus(sched)">
          {{sched.status === 'Active' ? '⏸️ Pause' : '▶️ Resume'}}
        </button>
        <button class="btn-danger btn-xs" style="padding: 0 0.8rem;" (click)="deleteScheduledInvoice(sched.id)">🗑️</button>
      </div>
    </div>
  </div>

  <ng-template #emptySchedules>
    <p class="empty-state">No recurring maintenance contracts configured yet.</p>
  </ng-template>
</section>
```

---

### File: src/app/pages/admin/pages/scheduled-billing/scheduled-billing.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../../../services/cms.service';

@Component({
  selector: 'app-admin-scheduled-billing',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './scheduled-billing.component.html'
})
export class AdminScheduledBillingComponent implements OnInit {
  contents: any[] = [];
  scheduledInvoices: any[] = [];
  editableClients$ = new BehaviorSubject<any[]>([]);
  message = '';
  loading = false;

  frequencies = ['Monthly', 'Quarterly', 'Bi-annually', 'Annually'];

  newScheduledInvoice: any = {
    client_name: '',
    service_name: '',
    amount: 0,
    frequency: 'Monthly',
    start_date: new Date().toISOString().split('T')[0]
  };

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.loadScheduledInvoices();
    this.loadClients();
  }

  loadClients() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      const clientsItem = this.contents.find(i => i.content_key === 'clients_list');
      if (clientsItem) {
        try {
          this.editableClients$.next(JSON.parse(clientsItem.content_value));
        } catch (e) {
          this.editableClients$.next([]);
        }
      }
    });
  }

  loadScheduledInvoices() {
    this.cms.getScheduledInvoices().subscribe(data => {
      this.scheduledInvoices = data;
    });
  }

  saveScheduledInvoice() {
    this.cms.createScheduledInvoice(this.newScheduledInvoice).subscribe(() => {
      this.showMessage('Scheduled invoice created successfully!');
      this.loadScheduledInvoices();
      this.newScheduledInvoice = {
        client_name: '',
        service_name: '',
        amount: 0,
        frequency: 'Monthly',
        start_date: new Date().toISOString().split('T')[0]
      };
    });
  }

  deleteScheduledInvoice(id: number) {
    if (confirm('Are you sure you want to delete this scheduled invoice?')) {
      this.cms.deleteScheduledInvoice(id).subscribe(() => {
        this.showMessage('Scheduled invoice deleted');
        this.loadScheduledInvoices();
      });
    }
  }

  toggleScheduledInvoiceStatus(sched: any) {
    const newStatus = sched.status === 'Active' ? 'Paused' : 'Active';
    this.cms.updateScheduledInvoiceStatus(sched.id, newStatus).subscribe(() => {
      sched.status = newStatus;
      this.showMessage(`Schedule for ${sched.client_name} marked as ${newStatus}`);
    });
  }

  triggerScheduledInvoiceNow(sched: any) {
    this.loading = true;
    this.cms.triggerScheduledInvoice(sched.id).subscribe({
      next: (res: any) => {
        this.showMessage(res.message || 'Invoice generated successfully!');
        this.loadScheduledInvoices();
        this.loading = false;
      },
      error: (err) => {
        this.showMessage('Error triggering scheduled invoice: ' + err.message);
        this.loading = false;
      }
    });
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3500);
  }
}
```

---

### File: src/app/pages/contact/contact.component.css

```css
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  padding: 80px 0;
}

.contact-info-boxes {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-box h4 {
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem;
  background: var(--primary-dark);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: var(--font-main);
}

.btn-primary:active {
  transform: translateY(0);
}

.success-alert {
  background: rgba(40, 167, 69, 0.2);
  border: 1px solid #28a745;
  color: #28a745;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

@media (max-width: 800px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
```

---

### File: src/app/pages/contact/contact.component.html

```html

<section class="page-header">
  <div class="container animate-fade-in">
    <h1 class="page-title">{{content['contact_title']}}</h1>
    <p class="page-subtitle">{{content['contact_subtitle']}}</p>
  </div>
</section>

<section class="contact-section container">
  <div class="contact-grid">
    <div class="contact-info-boxes">
      <div class="glass-card info-box">
        <h4>Visit Us</h4>
        <p>{{content['contact_address']}}</p>
      </div>
      <div class="glass-card info-box">
        <h4>Call Us</h4>
        <p>{{content['contact_phone']}}</p>
      </div>
      <div class="glass-card info-box">
        <h4>Email Us</h4>
        <p>{{content['contact_email']}}</p>
      </div>
    </div>

    <div class="contact-form glass-card">
      <!-- Success Alert (Inline) -->
      <div *ngIf="successMessage" class="success-alert mb-2">
        {{successMessage}}
      </div>

      <form (submit)="onSubmit()">
        <div class="form-row">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" name="name" [(ngModel)]="formData.name" placeholder="John Doe" required>
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" name="email" [(ngModel)]="formData.email" placeholder="john&#64;example.com" required>
          </div>
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea name="message" [(ngModel)]="formData.message" rows="5" placeholder="How can we help?"
            required></textarea>
        </div>
        <button type="submit" class="btn-primary" [disabled]="(submitting | async)">
          {{(submitting | async )? 'Sending...' : 'Send Message'}}
        </button>
      </form>
    </div>
  </div>
</section>
```

---

### File: src/app/pages/contact/contact.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CmsService } from '../../services/cms.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  content: any = {
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch with our engineering experts today.',
    contact_address: 'Colombo 06, Sri Lanka',
    contact_phone: '+94 71 919 5591',
    contact_email: 'info@eriline.lk'
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitting = new BehaviorSubject<boolean>(false);
  successMessage = '';

  constructor(private cms: CmsService) { }

  ngOnInit() {
    this.cms.getContent().subscribe({
      next: (data) => {
        data.forEach(item => {
          if (item.page === 'contact') {
            this.content[item.content_key] = item.content_value;
          }
        });
      },
      error: (err) => console.error('Failed to load CMS content', err)
    });
  }

  onSubmit() {
    if (this.submitting.value) return;
    this.submitting.next(true);
    this.cms.sendContactMessage(this.formData).subscribe({
      next: () => {
        this.submitting.next(false);
        this.successMessage = 'Thank you! Your message has been sent to our engineering team.';
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => this.successMessage = '', 6000);
      },
      error: () => {
        this.submitting.next(false);
        alert('Failed to send message. Please try again later.');
      }
    });
  }
}
```

---

### File: src/app/pages/home/home.component.css

```css
.hero {
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  /* background: url('/hero.png') center/cover no-repeat; - moved to dynamic */
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(11, 17, 32, 0.95) 0%, rgba(11, 17, 32, 0.6) 50%, rgba(11, 17, 32, 0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.badge {
  background: rgba(242, 169, 59, 0.1);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: inline-block;
  border: 1px solid rgba(242, 169, 59, 0.2);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-btns {
  display: flex;
  gap: 1rem;
}



/* Stats */
.stats-section {
  margin-top: -60px;
  position: relative;
  z-index: 20;
  padding: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
  padding: 2.5rem 1.5rem;
}

.stat-value {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
}

/* Services */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.05);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.service-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.read-more {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
}

/* Featured Project */
.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.project-img-box {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-img-box:hover .project-img {
  transform: scale(1.05);
}

.project-title {
  font-size: 2rem;
  margin: 1rem 0;
}

.project-features {
  list-style: none;
  margin: 1.5rem 0;
}

.project-features li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-features li::before {
  content: '✓';
  color: var(--accent);
  font-weight: bold;
}

/* CTA */
.cta-box {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(26, 31, 44, 0.8) 0%, rgba(11, 17, 32, 0.9) 100%);
}

.cta-title {
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

.cloud-mini-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.cloud-item strong {
  display: block;
  color: var(--accent);
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.cloud-item p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.mt-2 {
  margin-top: 2rem;
}

.consulting-btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.products-grid-home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-item-home {
  text-align: center;
  padding: 2.5rem;
}

.p-price-tag {
  color: var(--accent);
  font-weight: 700;
  margin: 1rem 0;
  font-size: 1.1rem;
}

.center-btn {
  display: flex;
  justify-content: center;
}

@media (max-width: 900px) {
  .project-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

---

### File: src/app/pages/home/home.component.html

```html
<!-- Hero Section -->
<section class="hero" [style.background-image]="'url(' + getHeroImage() + ')'">
  <div class="hero-overlay"></div>
  <div class="container hero-content animate-fade-in">
    <span class="badge">Innovation in Code</span>
    <h1 class="hero-title">{{contentMap['hero_title']}}</h1>
    <p class="hero-subtitle">{{contentMap['hero_subtitle']}}</p>
    <div class="hero-btns">
      <button class="btn-primary" routerLink="/contact">Get a Quote</button>
      <button class="btn-outline" routerLink="/portfolio">View Portfolio</button>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="stats-section">
  <div class="container stats-grid">
    <div *ngFor="let stat of stats" class="stat-item glass-card">
      <h3 class="stat-value text-gradient">{{stat.value}}</h3>
      <p class="stat-label">{{stat.label}}</p>
    </div>
  </div>
</section>

<!-- Core Services Section -->
<section id="services" class="services-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Core <span class="accent-text">Software</span> Services</h2>
      <p class="section-subtitle">We build resilient digital products that drive growth and operational efficiency.</p>
    </div>

    <div class="services-grid">
      <div *ngFor="let service of coreServices" class="service-card glass-card">
        <div class="service-icon">{{service.icon}}</div>
        <h3 class="service-title">{{service.title}}</h3>
        <p class="service-desc">{{service.description}}</p>
        <a routerLink="/contact" class="read-more">Inquire Now →</a>
      </div>
    </div>
  </div>
</section>

<!-- Cloud Services Section -->
<section class="cloud-section">
  <div class="container project-container">
    <div class="project-img-box">
      <img src="cloud.png" alt="Cloud Infrastructure" class="project-img">
    </div>
    <div class="project-content">
      <span class="accent-text uppercase">Cloud Excellence</span>
      <h2 class="project-title">Future-Proof Your Business with Cloud Services</h2>
      <p>From strategic consulting to managed operations, we ensure your cloud journey is secure, scalable, and optimized.</p>
      
      <div class="cloud-mini-grid">
        <div *ngFor="let item of cloudServices" class="cloud-item">
          <strong>{{item.title}}</strong>
          <p>{{item.desc}}</p>
        </div>
      </div>
      
      <button class="btn-primary mt-2">Consult our Experts</button>
    </div>
  </div>
</section>

<!-- Startup Tech Enablement -->
<section class="consulting-section">
  <div class="container glass-card cta-box">
    <span class="accent-text">Consulting & Support</span>
    <h2 class="cta-title">Digital Transformation & Startup Enablement</h2>
    <p>We help SMEs and Startups fast-track their ideas to market with Product Prototyping, MVP development, and ongoing tech support.</p>
    <div class="consulting-btns mt-2">
      <button class="btn-primary">MVP Development</button>
      <button class="btn-outline">IT Strategy</button>
    </div>
  </div>
</section>
```

---

### File: src/app/pages/home/home.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CmsService } from '../../services/cms.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contentMap: any = {
    hero_title: 'Empowering the Future with Premium Software Solutions',
    hero_subtitle: 'Leading the digital transformation with scalable custom software, cross-platform mobile apps, and secure cloud infrastructure.',
    hero_image_url: '/hero.png'
  };

  coreServices = [
    {
      title: 'Custom Software Development',
      description: 'Tailor-made applications designed specifically for your business logic and workflows.',
      icon: '💻'
    },
    {
      title: 'Web Application Development',
      description: 'Scalable, responsive web portals, dashboards, and e-commerce solutions.',
      icon: '🌐'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform iOS and Android apps using Flutter and React Native.',
      icon: '📱'
    },
    {
      title: 'API Development',
      description: 'Robust API design and seamless integration between disparate systems.',
      icon: '🔌'
    }
  ];

  cloudServices = [
    { title: 'Cloud Migration', desc: 'Moving from on-premise to AWS, Azure, or GCP.' },
    { title: 'SaaS Development', desc: 'Building cloud-native SaaS solutions.' },
    { title: 'DevOps & CI/CD', desc: 'Infrastructure as code and automated pipelines.' },
    { title: 'Cloud Security', desc: 'Ensuring compliant and secure cloud operations.' }
  ];

  stats = [
    { label: 'Solutions Delivered', value: '120+' },
    { label: 'Satisfied Clients', value: '80+' },
    { label: 'Lines of Code', value: '5M+' },
    { label: 'Team Members', value: '45+' }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      data.forEach(item => {
        if (item.page === 'home') {
          this.contentMap[item.content_key] = item.content_value;
        }
      });
    });
  }

  getHeroImage() {
    const url = this.contentMap['hero_image_url'];
    if (url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url;
  }
}
```

---

### File: src/app/pages/portfolio/portfolio.component.css

```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  padding: 100px 1.5rem;
}

.portfolio-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/10;
  cursor: pointer;
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.2) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;
  z-index: 2;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.portfolio-item:hover .project-overlay {
  opacity: 1;
}

.category {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 0.8rem;
}

.project-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.btn-sm {
  align-self: flex-start;
  font-size: 0.8rem;
  padding: 0.6rem 1.2rem;
}
```

---

### File: src/app/pages/portfolio/portfolio.component.html

```html
<section class="page-header">
  <div class="container animate-fade-in">
    <h1 class="page-title">{{content['portfolio_title']}}</h1>
    <p class="page-subtitle">{{content['portfolio_subtitle']}}</p>
  </div>
</section>

<section class="portfolio-grid container">
  <div *ngFor="let project of projects" class="portfolio-item glass-card animate-slide-up">
    <div class="project-overlay">
      <span class="category">{{project.category}}</span>
      <h3>{{project.title}}</h3>
      <button class="btn-outline btn-sm">View Case Study</button>
    </div>
    <img [src]="getImageUrl(project.image)" [alt]="project.title">
  </div>
</section>
```

---

### File: src/app/pages/portfolio/portfolio.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsService } from '../../services/cms.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  content: any = {
    portfolio_title: 'Our Portfolio',
    portfolio_subtitle: 'Showcasing our precision and expertise across diverse projects.'
  };

  // Modern Default Projects (Self-healing)
  projects: any[] = [
    { title: 'Enterprise ERP System', category: 'Custom Software', image: '/erp.png' },
    { title: 'Global Fintech Mobile App', category: 'Mobile Banking', image: '/fintech.png' },
    { title: 'E-commerce Marketplace', category: 'Web Development', image: '/ecommerce.png' },
    { title: 'Cloud Infrastructure Migration', category: 'Cloud Services', image: '/cloud-mig.png' },
    { title: 'Identity Management API', category: 'Cyber Security', image: '/api-sec.png' },
    { title: 'Startup MVP Platform', category: 'Product Engineering', image: '/startup.png' }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      const dbPortfolio = data.find(i => i.content_key === 'portfolio_list');
      if (dbPortfolio) {
        try {
          this.projects = JSON.parse(dbPortfolio.content_value);
        } catch (e) {
          console.error('Portfolio parse error', e);
        }
      }

      data.forEach(item => {
        if (item.page === 'portfolio' && item.content_key !== 'portfolio_list') {
          this.content[item.content_key] = item.content_value;
        }
      });
    });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/erp.png';
  }
}
```

---

### File: src/app/pages/product-detail/product-detail.css

```css
.product-detail-page {
  background-color: var(--primary-dark);
  color: var(--text-primary);
  min-height: 100vh;
}

/* Premium Hero */
.premium-hero {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  filter: blur(40px) brightness(0.7);
  transform: scale(1.1);
}

.hero-image-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(10, 10, 10, 0) 0%, var(--primary-dark) 80%);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.breadcrumb {
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  color: var(--text-secondary);
}

.breadcrumb a { color: var(--accent); font-weight: 700; transition: color 0.3s; }
.breadcrumb a:hover { color: #fff; }
.breadcrumb .sep { margin: 0 0.8rem; opacity: 0.3; }

.p-type-badge {
  display: inline-block;
  background: var(--accent);
  color: #000;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.premium-hero h1 {
  font-size: clamp(3rem, 10vw, 5.5rem);
  line-height: 0.95;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -2px;
}

.premium-hero .subtitle {
  font-size: 1.4rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

/* Highlights */
.highlights-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -100px;
  position: relative;
  z-index: 10;
}

.highlight-card {
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(20, 20, 20, 0.6);
}

.h-icon {
  font-size: 2rem;
  background: rgba(242, 169, 59, 0.1);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: var(--accent);
}

.h-info h4 { font-size: 1.1rem; margin-bottom: 0.3rem; color: #fff; }
.h-info p { font-size: 0.85rem; color: var(--text-secondary); }

/* Detail Content Group */
.detail-main {
  padding: 100px 0;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
}

.body-card {
  padding: 5rem;
}

.detail-sticky-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.cta-vertical {
  padding: 3rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
}

.cta-badge {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 1rem;
}

.cta-header h3 { font-size: 1.75rem; margin-bottom: 1rem; }
.cta-header p { font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 2rem; }

.cta-features { margin-bottom: 2.5rem; }
.feat { 
  font-size: 0.9rem; 
  padding: 0.6rem 0; 
  display: flex; 
  gap: 0.8rem; 
  align-items: center;
  color: var(--text-secondary);
}
.feat span { color: var(--accent); font-weight: 800; }

/* Bottom CTA */
.cta-banner {
  padding: 6rem 2rem;
  margin-bottom: 100px;
}

.cta-banner h2 { font-size: 2.8rem; margin-bottom: 1rem; }
.cta-banner p { color: var(--text-secondary); margin-bottom: 3rem; }

/* Rich Content styles mapping */
.rich-html-content { line-height: 1.8; color: rgba(255, 255, 255, 0.8); font-size: 1.15rem; }
.rich-html-content h2 { color: var(--accent); margin: 3rem 0 1.5rem; font-size: 2.2rem; }
.rich-html-content p { margin-bottom: 1.5rem; }
.rich-html-content ul { padding-left: 2rem; margin: 1.5rem 0; list-style: none; }
.rich-html-content li { position: relative; padding-bottom: 1rem; }
.client-head {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff;
  opacity: 0.9;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.client-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: 12px;
}

.glass-card-lite {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: var(--transition);
}

.glass-card-lite:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.client-card img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: brightness(0) invert(1); /* Force to white for clean look */
  opacity: 0.8;
}

.client-info d-flex flex-column { }
.client-info strong { display: block; font-size: 1rem; color: #fff; }
.client-info span { font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; }

.mt-3 { margin-top: 3rem; }
.mt-4 { margin-top: 4rem; }

@media (max-width: 1200px) {
  .detail-grid { grid-template-columns: 1fr; }
  .highlights-row { grid-template-columns: 1fr; }
  .body-card { padding: 3rem; }
}

@media (max-width: 768px) {
  .premium-hero h1 { font-size: 3.5rem; }
  .hero-actions { flex-direction: column; }
}
```

---

### File: src/app/pages/product-detail/product-detail.html

```html
<ng-container *ngIf="product$ | async as product; else stateCheck">
  <div class="product-detail-page">
    <!-- Immersive Hero Section -->
    <section class="premium-hero">
      <div class="hero-image-overlay">
        <img src="/product-hero.png" alt="Product Hero">
      </div>
      <div class="container hero-content">
        <div class="breadcrumb animate-fade-in">
          <a routerLink="/products">Solutions</a> <span class="sep">/</span> <span class="curr">{{product.name}}</span>
        </div>
        <div class="hero-text-gate">
          <span class="p-type-badge">{{product.type}}</span>
          <h1 class="animate-slide-up">{{product.name}}</h1>
          <p class="subtitle animate-slide-up delay-1">{{product.shortDesc}}</p>
          <div class="hero-actions animate-slide-up delay-2">
             <button class="btn-primary" (click)="scrollToDesc()">Explore Features</button>
             <button class="btn-outline" routerLink="/contact">Get a Quote</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Specs / Highlights -->
    <section class="highlights-row container animate-slide-up delay-3">
      <div class="highlight-card glass-card">
        <div class="h-icon">⚡</div>
        <div class="h-info">
          <h4>Performance</h4>
          <p>Ultra-low latency processing</p>
        </div>
      </div>
      <div class="highlight-card glass-card">
        <div class="h-icon">🛡️</div>
        <div class="h-info">
          <h4>Security</h4>
          <p>Enterprise-grade encryption</p>
        </div>
      </div>
      <div class="highlight-card glass-card">
        <div class="h-icon">☁️</div>
        <div class="h-info">
          <h4>Cloud Native</h4>
          <p>Infinite scalability & sync</p>
        </div>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="detail-main container" id="description">
      <div class="detail-grid">
        <div class="detail-body">
          <div class="body-card glass-card animate-fade-in">
            <div class="rich-html-content" [innerHTML]="product.description"></div>
          </div>

          <!-- Trusted By Section -->
          <div class="clients-section mt-3 animate-slide-up delay-1" *ngIf="product.clients?.length">
            <h3 class="client-head">Trusted By</h3>
            <div class="clients-grid">
              <div *ngFor="let client of product.clients" class="client-card glass-card-lite">
                <img [src]="client.logo" [alt]="client.name">
                <div class="client-info">
                  <strong>{{client.name}}</strong>
                  <span>{{client.industry}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside class="detail-sticky-sidebar">
          <div class="cta-vertical glass-card animate-slide-up">
            <div class="cta-header">
               <span class="cta-badge">LATEST VERSION v4.2</span>
               <h3>Ready to deploy?</h3>
               <p>Scalable licensing options for startups and enterprises.</p>
            </div>
            <div class="cta-features">
              <div class="feat"><span>✔</span> Integration Support</div>
              <div class="feat"><span>✔</span> Maintenance & Updates</div>
              <div class="feat"><span>✔</span> Training Sessions</div>
            </div>
            <button class="btn-primary w-full mt-2" routerLink="/contact">Contact Sales Team</button>
          </div>
        </aside>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="bottom-cta container mt-4">
      <div class="cta-banner glass-card text-center">
        <h2>Transform your business today.</h2>
        <p>Join 200+ companies using {{product.name}} to power their operations.</p>
        <button class="btn-outline" routerLink="/products">Discover Other Solutions</button>
      </div>
    </section>
  </div>
</ng-container>

<!-- Loading & State Management -->
<ng-template #stateCheck>
  <div class="loading-state" *ngIf="loading">
    <div class="spinner"></div>
  </div>

  <div class="error-state text-center" *ngIf="!loading">
    <span class="err-icon">📭</span>
    <h2>Solution Not Found</h2>
    <p>The requested digital product could not be found or has been moved.</p>
    <button class="btn-primary" routerLink="/products">Return to Catalog</button>
  </div>
</ng-template>
```

---

### File: src/app/pages/product-detail/product-detail.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail } from './product-detail';

describe('ProductDetail', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

---

### File: src/app/pages/product-detail/product-detail.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CmsService } from '../../services/cms.service';
import { Observable, map, switchMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<any> | undefined;
  loading = true;

  defaultProducts = [
    { 
      id: 'pos', 
      type: 'POS', 
      name: 'Elara POS', 
      shortDesc: 'The next generation Point of Sale system for modern retail.', 
      description: '<h2>Advanced Inventory & Sales</h2><p>Elara POS provides real-time stock tracking, multi-branch support, and integrated payment processing.</p>',
      clients: [
        { name: 'TechFlow Systems', logo: '/client-1.png', industry: 'Retail Tech' },
        { name: 'GlobalLink Logistics', logo: '/client-2.png', industry: 'E-commerce' }
      ]
    },
    { 
      id: 'dms', 
      type: 'DMS', 
      name: 'Distribution Management', 
      shortDesc: 'End-to-end supply chain and logistics orchestration.', 
      description: '<h2>Global Supply Chain Control</h2><p>Manage warehouses, fleets, and orders across borders with precision.</p>',
      clients: [
        { name: 'SecureCore Freight', logo: '/client-3.png', industry: 'Logistics' },
        { name: 'GlobalLink Corp', logo: '/client-2.png', industry: 'Distribution' }
      ]
    },
    {
      id: 'logistics',
      type: 'Delivery',
      name: 'Logistics Tracker',
      shortDesc: 'Real-time transit visibility and fleet management.',
      description: '<h2>Fleet Orchestration</h2><p>GPS tracking, route optimization, and driver management in one dashboard.</p>',
      clients: [
        { name: 'TechFlow Global', logo: '/client-1.png', industry: 'Last Mile' }
      ]
    },
    { 
      id: 'studio', 
      type: 'Studio', 
      name: 'Media Studio', 
      shortDesc: 'High-performance digital asset management for media teams.', 
      description: '<h2>Media Asset HUB</h2><p>Organize, collaborate, and distribute your digital content at scale.</p>',
      clients: [
        { name: 'Creative Hub', logo: '/client-2.png', industry: 'Production' }
      ]
    },
    { 
      id: 'hrm', 
      type: 'HRM', 
      name: 'Human Resource Management', 
      shortDesc: 'A holistic approach to employee life-cycle management.', 
      description: '<h2>People First Platforms</h2><p>Manage your entire workforce effectively.</p>',
      clients: [
        { name: 'SecureCore Industries', logo: '/client-3.png', industry: 'Enterprise' }
      ]
    },
    { 
      id: 'ecommerce', 
      type: 'E-Commerce', 
      name: 'Web Store Pro', 
      shortDesc: 'Scalable cloud-ready e-commerce platform.', 
      description: '<h2>High-Conversion E-Commerce</h2><p>Custom themes and integrated payment gateways.</p>',
      clients: [
        { name: 'TrendSetter Shop', logo: '/client-1.png', industry: 'Fashion' }
      ]
    },
    { 
      id: 'cms', 
      type: 'CMS', 
      name: 'Content Hub', 
      shortDesc: 'Agile content management for enterprise websites.', 
      description: '<h2>Manage with Ease</h2><p>Giving non-technical users the power to update site content.</p>',
      clients: [
        { name: 'Global Media', logo: '/client-2.png', industry: 'Publishing' }
      ]
    },
    { 
      id: 'static', 
      type: 'Business', 
      name: 'Elite Profile', 
      shortDesc: 'Bespoke corporate presence for global brands.', 
      description: '<h2>Make your mark</h2><p>Ultra-responsive, high-performance landing pages.</p>',
      clients: [
        { name: 'Brand Builders', logo: '/client-3.png', industry: 'Consultancy' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private cms: CmsService) { }

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      tap(() => this.loading = true),
      switchMap(params => {
        const id = params['id'];
        return this.cms.getContent().pipe(
          map(data => {
            const dbProductsItem = data.find(i => i.content_key === 'products_list');
            let productList = this.defaultProducts;

            if (dbProductsItem) {
              try { 
                const parsed = JSON.parse(dbProductsItem.content_value);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  productList = parsed;
                }
              } catch (e) { }
            }

            let found = productList.find(p => 
              (p.id && p.id.toLowerCase() === id.toLowerCase()) || 
              (p.name && p.name.toLowerCase().replace(/ /g, '-') === id.toLowerCase())
            );

            if (!found) {
               found = this.defaultProducts.find(p => p.id === id);
            }

            this.loading = false;
            return found;
          })
        );
      })
    );
  }

  scrollToDesc() {
    document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' });
  }
}
```

---

### File: src/app/pages/products/products.component.css

```css
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 80px 1.5rem;
}

.product-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent);
}

.product-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.p-icon {
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.4rem;
  border-radius: 8px;
  line-height: 1;
}

.p-type {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.product-features {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--glass-border);
}

.product-features ul {
  list-style: none;
}

.product-features li {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.6rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.product-features li::before {
  content: '✓';
  color: var(--accent);
  font-weight: 900;
}

.mt-auto { margin-top: auto; }
.pt-2 { padding-top: 1.5rem; }

.product-card h3 {
  font-size: 1.7rem;
  margin-bottom: 1rem;
}

.short-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
}

.sub-cta {
  padding: 100px 0;
}

.cta-content {
  padding: 5rem 2rem;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  margin-bottom: 2.5rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### File: src/app/pages/products/products.component.html

```html
<section class="page-header">
  <div class="container animate-fade-in">
    <h1 class="page-title">{{content['products_title']}}</h1>
    <p class="page-subtitle">{{content['products_subtitle']}}</p>
  </div>
</section>

<section class="products-grid container">
  <div *ngFor="let product of products" class="product-card glass-card animate-slide-up">
    <div class="product-header">
      <div class="product-badge-row">
        <span class="p-icon" *ngIf="product.icon">{{product.icon}}</span>
        <span class="p-type">{{product.type}}</span>
      </div>
      <h3>{{product.name}}</h3>
      <p class="short-desc">{{product.shortDesc}}</p>
    </div>

    <!-- Extra details section -->
    <div class="product-features mt-2" *ngIf="product.features && product.features.length">
      <ul>
        <li *ngFor="let feat of product.features">{{feat}}</li>
      </ul>
    </div>

    <div class="product-actions mt-auto pt-2">
      <button class="btn-primary w-full" [routerLink]="['/products', product.id]">Learn More</button>
    </div>
  </div>
</section>

<!-- Custom Consultation CTA -->
<section class="sub-cta">
  <div class="container glass-card cta-content text-center">
    <h2>Need a Customized Solution?</h2>
    <p>Our engineers can build bespoke systems tailored to your unique business requirements.</p>
    <button class="btn-outline" routerLink="/contact">Schedule a Consultation</button>
  </div>
</section>
```

---

### File: src/app/pages/products/products.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmsService } from '../../services/cms.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  content: any = {
    products_title: 'Digital Solutions',
    products_subtitle: 'Premium engineering tailored for enterprise-grade performance.'
  };

  products: any[] = [
    { 
      id: 'pos', type: 'POS', name: 'Elara POS', icon: '🏪',
      shortDesc: 'The next generation Point of Sale system for modern retail.', 
      features: ['Real-time stock tracking', 'Multi-branch support', 'Cloud-based sync'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'dms', type: 'DMS', name: 'Distribution Management', icon: '🚚',
      shortDesc: 'End-to-end supply chain and logistics orchestration.', 
      features: ['Global Supply Chain Control', 'Warehouse Management', 'Cross-border precision'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'logistics', type: 'Delivery', name: 'Logistics Tracker', icon: '📍',
      shortDesc: 'Real-time transit visibility and fleet management.', 
      features: ['Fleet Orchestration', 'GPS tracking', 'Route optimization'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'studio', type: 'Studio', name: 'Media Studio', icon: '🎬',
      shortDesc: 'High-performance digital asset management for media teams.', 
      features: ['Media Asset HUB', 'Collab workflow', 'Distribute at scale'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'hrm', type: 'HRM', name: 'Human Resource Management', icon: '👥',
      shortDesc: 'A holistic approach to employee life-cycle management.', 
      features: ['People First Platforms', 'Payroll automation', 'Performance tracking'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'ecommerce', type: 'E-Commerce', name: 'Web Store Pro', icon: '🛒',
      shortDesc: 'Scalable cloud-ready e-commerce platform.', 
      features: ['High-Conversion', 'Custom themes', 'Mobile-first design'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'cms', type: 'CMS', name: 'Content Hub', icon: '📝',
      shortDesc: 'Agile content management for enterprise websites.', 
      features: ['Manage with Ease', 'Role-based access', 'Real-time publishing'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'static', type: 'Business', name: 'Elite Profile', icon: '⚡',
      shortDesc: 'Bespoke corporate presence for global brands.', 
      features: ['Ultra-responsive', 'High-performance SEO', 'Premium animations'],
      description: '<p>Extended details here...</p>' 
    }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      const dbProducts = data.find(i => i.content_key === 'products_list');
      if (dbProducts) {
        try {
          this.products = JSON.parse(dbProducts.content_value);
        } catch (e) {
          console.error('Products parse error', e);
        }
      }

      data.forEach(item => {
        if (item.page === 'products' && item.content_key !== 'products_list') {
          this.content[item.content_key] = item.content_value;
        }
      });
    });
  }
}
```

---

### File: src/app/services/auth.guard.ts

```typescript
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/admin/login']);
    return false;
  }
};
```

---

### File: src/app/services/auth.interceptor.ts

```typescript
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }
  return next(req);
};
```

---

### File: src/app/services/auth.service.ts

```typescript
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  currentUser = signal<string | null>(localStorage.getItem('username'));

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username);
        this.currentUser.set(res.username);
      })
    );
  }

  resetPassword(username: string) {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, { username });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.currentUser.set(null);
    this.router.navigate(['/admin/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
```

---

### File: src/app/services/cms.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getContent() {
    return this.http.get<any[]>(`${this.apiUrl}/content`);
  }

  updateContent(data: { content_key: string, content_value: string, page: string }) {
    return this.http.post(`${this.apiUrl}/content`, data);
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(`${this.apiUrl}/content/upload`, formData);
  }

  // --- Invoicing ---
  getInvoices() {
    return this.http.get<any[]>(`${this.apiUrl}/invoices`);
  }

  createInvoice(data: any) {
    return this.http.post(`${this.apiUrl}/invoices`, data);
  }

  deleteInvoice(id: number) {
    return this.http.delete(`${this.apiUrl}/invoices/${id}`);
  }

  updateInvoiceStatus(id: number, status: string) {
    return this.http.patch(`${this.apiUrl}/invoices/${id}/status`, { status });
  }

  getScheduledInvoices() {
    return this.http.get<any[]>(`${this.apiUrl}/invoices/scheduled`);
  }

  createScheduledInvoice(data: any) {
    return this.http.post(`${this.apiUrl}/invoices/scheduled`, data);
  }

  deleteScheduledInvoice(id: number) {
    return this.http.delete(`${this.apiUrl}/invoices/scheduled/${id}`);
  }

  updateScheduledInvoiceStatus(id: number, status: string) {
    return this.http.patch(`${this.apiUrl}/invoices/scheduled/${id}/status`, { status });
  }

  triggerScheduledInvoice(id: number) {
    return this.http.post(`${this.apiUrl}/invoices/scheduled/${id}/trigger`, {});
  }

  sendContactMessage(data: any) {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }
}
```

---

### File: src/environments/environment.development.ts

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  serverUrl: 'http://localhost:5000'
};
```

---

### File: src/environments/environment.ts

```typescript
export const environment = {
  production: true,
  apiUrl: '/api',
  serverUrl: ''
};
```

---

### File: src/index.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Eriline - Empowering the Future with Premium Software Solutions</title>
  <base href="/" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" href="logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Sora:wght@400;600;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.snow.css">
</head>

<body>
  <app-root></app-root>
</body>

</html>
```

---

### File: src/main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
```

---

### File: src/styles.css

```css
@import "@ng-select/ng-select/themes/default.theme.css";

:root {
  --primary-dark: #070f21;
  --secondary-dark: #0a214d;
  /* Matches Logo Background */
  --accent: #f2a93b;
  /* Matches Logo Accent */
  --accent-hover: #ffb84d;
  --text-primary: #FFFFFF;
  --text-secondary: #94a3b8;
  --glass: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.08);
  --font-main: 'Outfit', sans-serif;
  --font-heading: 'Sora', sans-serif;
  --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--primary-dark);
  color: var(--text-primary);
  font-family: var(--font-main);
  line-height: 1.6;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  font-family: var(--font-main);
  transition: var(--transition);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
  color: var(--primary-dark);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(242, 169, 59, 0.2);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-outline:hover {
  background: var(--glass);
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}


.glass-card {
  background: var(--glass);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

section {
  padding: 80px 0;
}

.page-header {
  margin: 2rem 0px 0px 0px;
}

.text-gradient {
  background: linear-gradient(135deg, #FFF 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Reusable Admin UI Dashboard Utilities */
.dash-section {
  padding: 2.5rem;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.input-group input, .input-group select, .input-group textarea {
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: var(--font-main);
  outline: none;
  width: 100%;
}

.input-group input:focus, .input-group select:focus, .input-group textarea:focus {
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.08);
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-row {
  display: flex;
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-0-5 {
  gap: 0.5rem;
}

.gap-1 {
  gap: 1rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.badge {
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-block;
}

.btn-xs {
  font-size: 0.7rem;
  padding: 0.4rem 0.8rem;
}

.btn-sm {
  font-size: 0.85rem;
  padding: 0.6rem 1.2rem;
}

.btn-danger {
  background: #dc3545;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-danger:hover {
  background: #c82333;
}

.quill-wrapper {
  margin: 1.5rem 0;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  color: #333;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  font-style: italic;
}

.w-full {
  width: 100%;
}

.mb-1 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 2rem; }
.mt-1 { margin-top: 1rem; }
.mt-2 { margin-top: 2rem; }
.p-1 { padding: 0.5rem; }

/* ng-select dark theme customization */
.ng-select.custom-dark-select .ng-select-container {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid var(--glass-border) !important;
  border-radius: 8px !important;
  color: var(--text-primary) !important;
  min-height: 43px !important;
}

.ng-select.custom-dark-select .ng-select-container .ng-value-container .ng-input input {
  color: var(--text-primary) !important;
}

.ng-select.custom-dark-select .ng-select-container .ng-value-container .ng-value {
  color: var(--text-primary) !important;
}

.ng-select.custom-dark-select .ng-select-container .ng-value-container .ng-placeholder {
  color: var(--text-secondary) !important;
}

.ng-select.custom-dark-select .ng-dropdown-panel {
  background: #0a214d !important;
  border: 1px solid var(--glass-border) !important;
  border-radius: 8px !important;
}

.ng-select.custom-dark-select .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {
  background: #0a214d !important;
  color: var(--text-primary) !important;
  border-bottom: 1px solid var(--glass-border) !important;
}

.ng-select.custom-dark-select .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {
  background: rgba(255, 255, 255, 0.1) !important;
}

.ng-select.custom-dark-select .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected {
  background: var(--accent) !important;
  color: var(--primary-dark) !important;
}

.ng-select.custom-dark-select .ng-arrow-wrapper .ng-arrow {
  border-color: var(--text-secondary) transparent transparent !important;
}

@keyframes flashHighlight {
  0% { border-color: var(--accent); box-shadow: 0 0 15px rgba(242, 169, 59, 0.4); }
  50% { border-color: var(--accent); box-shadow: 0 0 25px rgba(242, 169, 59, 0.7); }
  100% { border-color: var(--glass-border); box-shadow: none; }
}

.highlight-flash {
  animation: flashHighlight 2s ease-in-out;
}
```

---

### File: tsconfig.app.json

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts"]
}
```

---

### File: tsconfig.json

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
```

---

### File: tsconfig.spec.json

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.d.ts", "src/**/*.spec.ts"]
}
```

---

