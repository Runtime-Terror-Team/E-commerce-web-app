import React, { useState } from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";

function AddToWishListButton() {
    const [toogleWishList, setToogleWishList] = useState(true)

    const handleToggle = () => {
        setToogleWishList(!toogleWishList)
    }

    return (
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
    );
}

export default AddToWishListButton;