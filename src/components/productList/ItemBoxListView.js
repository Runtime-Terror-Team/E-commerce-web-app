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

function ItemBoxListView() {
    const { title, stock, description, price } = {
        title: 'Green Dress',
        stock: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n' +
            '\n' +
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        price: 500
    }

    const [toogleWishList, setToogleWishList] = useState(true)

    const handleToggle = () => {
        setToogleWishList(!toogleWishList)
    }

    return (
        <>
            <Card className='product-item'>
                <div className="product-item_image">
                    <img
                        src="https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt=""/>
                </div>
                <div className="product-item_content">
                    <div className="product-item_tittle"><h1>{title}</h1></div>
                    <div className="product-item_availability">
                        <h4>Availability :</h4>
                        <p>In Stock({stock} items)</p>
                    </div>
                    <div className="product-item_description">
                        <small>
                            {handleLimitedText(description, 200)}
                        </small>
                    </div>
                    <div className="product-item_rating">
                        <Rating name="read-only" value={3} readOnly/>
                    </div>
                    <div className="product-item_price">
                        <h2>&#8377;{price}</h2>
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