const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        passwordChangedAt: {
            type: Date
        },
        role: {
            type: String,
            enum: ['admin', 'seller', 'customer'],
            default: 'customer'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
