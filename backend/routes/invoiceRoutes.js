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
