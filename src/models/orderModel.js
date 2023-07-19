const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('Order', orderSchema);