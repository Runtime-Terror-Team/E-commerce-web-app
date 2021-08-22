import React, { useEffect, useState } from 'react'
import ItemBoxListView from "../components/productList/ItemBoxListView";
import { commerce } from "../lib/commerce";
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from "@material-ui/core";
import FilterProducts from "../components/productList/FilterProducts";

export const ProductList = () => {

    const [products, setProducts] = useState([])
    const [metaData, setMetaData] = useState([])
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true)

    const fetchProducts = async () => {
        const response = await commerce.products.list({ limit: 10 }) // default 20 max 200
        const { data, meta } = response
        setMetaData(meta)
        setProducts(data)
        setIsLoading(false)
    }

    const pagenation = async (page) => {
        const url = new URL(
            `https://api.chec.io/v1/products?page=${page}`
        );
        let params = {
            "limit": "10",
        };
        Object.keys(params)
            .forEach(key => url.searchParams.append(key, params[key]));

        let headers = {
            "X-Authorization": "pk_test_32031720fb8c7ad98cdb765b9103a100bcdc202970e38",
            "Accept": "application/json",
            "Content-Type": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => {
                const { data, meta } = json
                setMetaData(meta)
                setProducts(data)
                setIsLoading(false)
            });
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const handleChange = (event, value) => {
        setPage(value);
        pagenation(value)
        setIsLoading(true)
    };

    return (
        <>
            <div>
                <Grid
                    container
                    item
                >
                    <FilterProducts
                        setIsLoading={setIsLoading}
                        setProducts={setProducts}
                        setMetaData={setMetaData}
                    />
                    {
                        isLoading ?
                            <h1>Loading</h1> :
                            <Grid container item sm={8} direction={'column'}
                                  alignItems={'center'}
                                  spacing={2}>
                                {
                                    (products.length !== 0) ?
                                        <>
                                            {
                                                products.map((product, id) => {
                                                    return (
                                                        <ItemBoxListView
                                                            key={product.id}
                                                            product={product}
                                                        />
                                                    )
                                                })
                                            }
                                            <Pagination count={metaData.pagination.total_pages} color="primary" page={page} onChange={handleChange}/></>:<h1>not found product</h1>
                                }

                            </Grid>
                    }
                </Grid>
            </div>

        </>

    )
}
