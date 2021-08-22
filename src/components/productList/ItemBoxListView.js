import React from 'react';
import { handleLimitedText } from "../helper/functions/handleText";
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Card from "@material-ui/core/Card";
import ReactHtmlParser from 'react-html-parser'
import { Link } from "react-router-dom";
import AddToWishListButton from "./AddToWishListButton";
import { Grid } from "@material-ui/core";

function ItemBoxListView({ product }) {

    const text = product.description

    return (
        <Card className='product-item'>
            <Grid
            container
            item
            spacing={2}
            >
            <Grid container
                  className="product-item_image"
                  item
                  sm={4}
            >
                <Link to={`/${product.id}`}>
                    <img
                        src={product.media.source}
                        alt={product.name}/></Link>
            </Grid>

            <Grid container item direction={"column"} sm={8} className="product-item_content">
                <div className="product-item_tittle">
                    <Link to={`/${product.id}`}>
                        <h2>
                            {product.name}
                        </h2>
                    </Link>

                </div>
                <div className="product-item_availability">
                    <h4>Availability :</h4>
                    <p>In Stock ( {product.inventory.available} items)</p>
                </div>
                <div className="product-item_description">
                    <h4>Product Description :</h4>
                    {ReactHtmlParser(handleLimitedText(text, 180))}
                    <Link to={`/${product.id}`}>
                        <small>ReadMore...</small>
                    </Link>
                </div>
                <div className="product-item_rating">
                    <Rating name="read-only" value={5} readOnly/>
                </div>
                <div className="product-item_price">
                    <h2>&#8377; {product.price.raw}</h2>
                </div>

                <div className="product-item_buttons">
                    <Button className='product-item_buttons_addtocart' variant="contained" color="primary"
                            endIcon={<ArrowForwardIcon/>} href=''>
                        Add To Cart
                    </Button>
                    <AddToWishListButton product_id={product.id}/>
                </div>
            </Grid>
            </Grid>
        </Card>
    );
}

export default ItemBoxListView;