const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const verifyToken = require('../middlewares/auth');

router.get('/', verifyToken, invoiceController.getAllInvoices);
router.post('/', verifyToken, invoiceController.createInvoice);
router.delete('/:id', verifyToken, invoiceController.deleteInvoice);
router.patch('/:id/status', verifyToken, invoiceController.updateInvoiceStatus);

module.exports = router;
