const mongoose = require('mongoose');
const {Schema} = mongoose;
const objectId = mongoose.Schema.Types.ObjectId;
const orderItemSchema =new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type:objectId,
        ref: 'products',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const ORDERITEM = mongoose.model('OrderItems', orderItemSchema);
module.exports = {ORDERITEM}
