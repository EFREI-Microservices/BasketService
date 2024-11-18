const express = require('express');
const router = express.Router();
const basketController = require('../controllers/BasketController');
const authMiddleware = require('../middlewares/AuthMiddleware');

router.post('/add', authMiddleware, basketController.addItem);
router.delete('/remove', authMiddleware, basketController.removeItem);
router.get('/view', authMiddleware, basketController.viewBasket);

module.exports = router;
