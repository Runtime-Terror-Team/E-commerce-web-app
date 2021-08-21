import React, { useEffect, useState } from 'react'
import ItemBoxListView from "../components/productList/ItemBoxListView";
import { commerce } from "../lib/commerce";

export const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list() // default 20 max 200
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)

        return (
            <>
                <div>
                    {
                        products.length === 0 ?
                            <h1>Loading</h1> :
                            products.map((product, id) => {
                                return (
                                    <ItemBoxListView
                                        key={product.id}
                                        product={product}
                                    />
                                )
                            })
                    }
                </div>

            </>

        )
}
