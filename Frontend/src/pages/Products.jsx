import React from 'react'
import Input from '../components/Input'
import BoxLayout from '../components/BoxLayout'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
export default function Products() {
    const test = [
        {
            _id: "6974b7e3d8576abb8572b230",
            title: "Redmi A5 Xiaome",
            description: "smartphone featuring a large 6.88-inch 120Hz HD+ display, a 5200mAh battery with 15W charging, a 32MP rear camera, and up to 4GB RAM with 128GB storage.",
            price: 5000,
            stock: 41,
            images: [
                "uploads/1769521109148-685290187.png",
                "uploads/1769521109154-566584725.png"
            ],
            sellerId: "6974b6091040e27d46b39133",
            categoryId: "69748dd4380c549bc67b6be6",
            createdAt: "2026-01-24T12:15:31.695Z",
            updatedAt: "2026-01-25T10:06:23.019Z",
            __v: 0,
            isApproved: "approved"
        }
    ]


    return (
        <div>
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
            <div className="Products_container">
                {
                    test.map((p, index) => (
                        <ProductCard key={index}>
                            <div className='productImg'>
                                <img src={`http://localhost:5000/${p.images[1]}`} />
                            </div>
                            <div className="productContent">
                                <h3 className="productTitle">{p.title}</h3>
                                <p className="productDesc">{p.description}</p>
                                <h3 className="productPrice">{p.price}$</h3>
                            </div>
                            <p className="productProvider">{`provided by : ${'Ahmed salah'}`}</p>
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
