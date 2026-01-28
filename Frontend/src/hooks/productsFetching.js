import axios from 'axios';

export const fetchApprovedProductsData = async () => {
    try {
        //fetch products
        const response = await axios.get(
            'http://localhost:5000/v1/api/products/approved'
        );
        const products = response.data.data;
        //fetch seller name for each product
        const productsWithSellerName = await Promise.all(
            products.map(async (product) => {
                const sellerRes = await axios.get(
                    `http://localhost:5000/v1/api/users/${product.sellerId}`
                );
                return {
                    ...product,
                    sellerName: sellerRes.data.data.name
                };
            })
        );
        return productsWithSellerName;

    } catch (error) {
        console.log(error);
        return [];
    }
};
