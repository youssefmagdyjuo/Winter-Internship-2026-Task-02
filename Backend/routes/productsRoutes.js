const router = require('express').Router();
const { getAllProducts,getSpecificProduct,addProduct,updateProduct,deleteProduct, } = require('../controllers/productControllers');
const { protect } = require('../middleware/protectedRoutes');
const { allowedTo } = require('../middleware/protectedRoutes');
const upload = require('../middleware/upload.middleware');
router.route('/')
    .post(protect, allowedTo('seller'),upload.array('images',5), addProduct)
    .get(getAllProducts);
router.route('/:id')
    .get(getSpecificProduct)
    .put(protect, allowedTo('seller'), updateProduct)
    .delete(protect, allowedTo('seller'), deleteProduct);

module.exports = router;