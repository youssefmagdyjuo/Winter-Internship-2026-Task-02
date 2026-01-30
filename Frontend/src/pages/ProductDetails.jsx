import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/v1/api/products/${id}`)
                const productData = response.data.data
                setProduct(productData)
                console.log(productData)
                setImages([productData.heroImage, ...productData.images])
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    }, [id])

    return (
        <div>
            {product.heroImage && (
                <div className='productImages'>
                    {images.map((i, index) => (
                        <div key={index} className='img'>
                            <img src={`http://localhost:5000/${i}`} alt={`product-${index}`} />
                        </div>
                    ))}
                </div>
            )}
            <h2 className='title text-center'>{product.title}</h2>
            <table>
                <tr>
                    <th>Description:</th>
                    <td>{product.description}</td>
                </tr>
                <tr>
                    <th>Price:</th>
                    <td>{product.price}$</td>
                </tr>
                <tr>
                    <th>Stock:</th>
                    <td>{product.stock}</td>
                </tr>
            </table>
            <div className='w-45'>
                <Button style={'btn-primary'} >
                    Order
                </Button>
            </div>
        </div>
    )
}
