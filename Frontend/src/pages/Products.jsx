import React, { useEffect } from 'react'
import Input from '../components/Input'
import ProductCard from '../components/ProductCard'
import { getApprovedProducts } from '../features/products/approvedProducts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApprovedProductsData } from '../hooks/productsFetching'
export default function Products() {
    const dispatch = useDispatch()
        const isOpen = useSelector((state) => state.navBar.isOpen);
    const approvedProducts = useSelector((state) => state.approvedProducts);
    useEffect(() => {
        const renderFun = async ()=>{
            const data = await fetchApprovedProductsData()
            dispatch(getApprovedProducts(data))
        }
        renderFun()
    }, [])

    return (
        <div>
            <div className={`search_section_container center ${isOpen?'':'full_layout'}`}>
                <div className="search_section">
                    <span className='text-lg w-full center font-bold'>Search by: </span>
                    <Input
                        placeholder={"Product Name"}
                    />
                    <Input
                        placeholder={"Ctegory Name"}
                    />
                    <Input
                        placeholder={"Vendor Name"}
                    />
                </div>
            </div>
            <div className="Products_container">
                {
                    approvedProducts.map((product, index) => (
                        <ProductCard key={index}>
                            <div className='productImg'>
                                <img src={`http://localhost:5000/${product.heroImage}`} />
                            </div>
                            <div className="productContent">
                                <h3 className="productTitle">{product.title}</h3>
                                <p className="productDesc">{product.description}</p>
                                <h3 className="productPrice">{product.price}$</h3>
                            </div>
                            <p className="productProvider">{`provided by : ${product.sellerName}`}</p>
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
