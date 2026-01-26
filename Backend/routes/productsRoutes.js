const router = require('express').Router();
const {getProductsBySellerId,getApprovedProducts,updateProductStatus, getAllProducts,getSpecificProduct,addProduct,updateProduct,deleteProduct, } = require('../controllers/productControllers');
const { protect } = require('../middleware/protectedRoutes');
const { allowedTo } = require('../middleware/protectedRoutes');
const upload = require('../middleware/upload.middleware');
router.route('/')
    // Seller only
    .post(protect, allowedTo('seller'),upload.array('images',5), addProduct)
    // get all products 
    .get(protect, getAllProducts);

// Get products by seller ID
router.route('/seller')
    .get(protect,allowedTo('seller'),getProductsBySellerId);

// Public get only approved products
router .route('/approved').get( getApprovedProducts);

router.route('/:id')
    .get(getSpecificProduct)
    .put(protect, allowedTo('seller'), updateProduct)
    .delete(protect, allowedTo('seller'), deleteProduct);

// Admin only
router.route('/status/:id')
    .put(protect, allowedTo('admin'), updateProductStatus);
module.exports = router;