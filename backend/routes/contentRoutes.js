const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const upload = require('../middlewares/upload');
const verifyToken = require('../middlewares/auth');

router.get('/', contentController.getContent);
router.post('/', verifyToken, contentController.updateContent);
router.post('/upload', verifyToken, upload.single('image'), contentController.uploadImage);

module.exports = router;
