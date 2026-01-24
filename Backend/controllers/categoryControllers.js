const category = require('../models/categoryModel');

createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        
        // check if category already exists
        const existingCategory = await category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }
        const newCategory = await category.create({ name });
        res.status(201).json({
            status: 'success',
            message: 'Category created successfully',
            data: newCategory,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
};
getAllCategories = async (req, res) => {
    try {
        const categories = await category.find();
        res.json({
            status: 'success',
            message: 'Categories fetched successfully',
            data: categories,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
};

getCategoryById = async (req, res) => {
    try {
        const foundCategory = await category.findById(req.params.id);
        if (!foundCategory) return res.status(404).json({ message: "Category not found" });
        res.json({
            status: 'success',
            message: 'Category fetched successfully',
            data: foundCategory,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
};

updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const updatedCategory = await category.findByIdAndUpdate(req.params.id, { name }, { new: true });
        if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
        res.json({
            status: 'success',
            message: 'Category updated successfully',
            data: updatedCategory,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
};

deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedCategory = await category.findByIdAndDelete(id);
        if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
        res.json({
            status: 'success',
            message: 'Category deleted successfully',
            data: deletedCategory,
        });
    } catch (error) {
        console.log(error)

        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
};
module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};