const mongoose = require('mongoose');

const basketItemSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    userId: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model('BasketItem', basketItemSchema);
