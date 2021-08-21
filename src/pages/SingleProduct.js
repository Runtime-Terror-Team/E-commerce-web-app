import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { commerce } from "../lib/commerce";

function SingleProduct() {
    const { product_id } = useParams()
    const [product, setProduct] = useState([])

    const fetchProduct = async () => {
        const { data } = await commerce.products.list({ query: product_id }) // default 20 max 200
        setProduct(data[0])
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    console.log(product)

    return (
        <div>
            {
                product.length !== 0 &&
                <div className="product-item_image">
                    <img
                        src={product.media.source}
                        alt=""/>
                </div>
            }

        </div>
    );
}

export default SingleProduct;