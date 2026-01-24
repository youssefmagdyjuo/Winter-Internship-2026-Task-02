const product = require('../models/productModel');

// Function to get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.json({
            status: 'success',
            message: 'Products fetched successfully',
            data: products,
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Function to get a specific product by ID
const getSpecificProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const foundProduct = await product.findById(productId);
        if (!foundProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({
            status: 'success',
            message: 'Product fetched successfully',
            data: foundProduct,
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};
// Function to add a new product
const addProduct = async (req, res) => {
    try {
        const { title, description, price, stock, categoryId } = req.body;
        // Handle uploaded images
        let images = [];
        if (req.files) {
            images = req.files.map(file => file.path);
        }
        // sellerId from token 
        const sellerId = req.user._id;
        const productData = {
            title,
            description,
            price,
            stock,
            categoryId,
            sellerId,
            images
        };
        const savedProduct = await product.create(productData);
        res.status(201).json({
            status: 'success',
            message: 'Product added successfully',
            data: savedProduct,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updateData = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
        };
        const updatedProduct = await product.findByIdAndUpdate(productId, updateData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({
            status: 'success',
            message: 'Product updated successfully',
            data: updatedProduct,
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};
// Function to delete a product
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({
            status: 'success',
            message: 'Product deleted successfully',
            data: deletedProduct,
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};

module.exports = {
    getAllProducts,
    getSpecificProduct,
    addProduct,
    updateProduct,
    deleteProduct,
};