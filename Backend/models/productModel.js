const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true,
            default: 0
        },
        images: [
            {
                type: String
            }
        ],
        heroImage:{
            type:String,
            required: [true, 'Hero image is required'],
        },
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        isApproved: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
