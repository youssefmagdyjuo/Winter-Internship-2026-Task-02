const router = require('express').Router();
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryControllers');
const { protect } = require('../middleware/protectedRoutes');
const { allowedTo } = require('../middleware/protectedRoutes');

router.route('/')
    .post(protect, allowedTo('admin'), createCategory)
    .get(getAllCategories);
router.route('/:id')
    .get(getCategoryById)
    .put(protect, allowedTo('admin'), updateCategory)
    .delete(protect, allowedTo('admin'), deleteCategory);
module.exports = router;