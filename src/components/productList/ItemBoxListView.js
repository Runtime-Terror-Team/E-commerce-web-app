import React, { useState } from 'react';
import { handleLimitedText } from "../helper/functions/handleText";
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import ReactHtmlParser from 'react-html-parser'

function ItemBoxListView({product}) {

    const [toogleWishList, setToogleWishList] = useState(true)

    const handleToggle = () => {
        setToogleWishList(!toogleWishList)
    }

    const text = product.description

    return (
        <>
            <Card className='product-item'>
                <div className="product-item_image">
                    <img
                        src={product.media.source}
                        alt=""/>
                </div>

                <div className="product-item_content">
                    <div className="product-item_tittle"><h1>{product.name}</h1></div>
                    <div className="product-item_availability">
                        <h4>Availability :</h4>
                        <p>In Stock({product.inventory.available} items)</p>
                    </div>
                    <div className="product-item_description">
                        <h4>Product Description :</h4>
                        {ReactHtmlParser(handleLimitedText(text, 200))}
                        <a href="/"><small>Readmore...</small></a>

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
                        <Tooltip
                            title={"Wishlist"}
                            placement="right"
                            arrow
                            TransitionComponent={Zoom}
                        >
                            <div className='product-item_buttons_addtowishlist' onClick={() => handleToggle()}>
                                <IconButton aria-label="delete" color="primary" onClick={() => handleToggle()}>
                                    {toogleWishList ? <FavoriteBorderIcon/> :
                                        <FavoriteIcon color='secondary'/>}
                                </IconButton>
                                <Typography variant="body2" color="primary">
                                    Add to Wishlist
                                </Typography>
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default ItemBoxListView;