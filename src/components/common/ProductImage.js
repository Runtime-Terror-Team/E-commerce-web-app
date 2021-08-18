import React from 'react';

function ProductImage() {
    const url = "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    return (
        <div className="product-item_image">
            <img
                src={url}
                alt=""/>
        </div>
    );
}

export default ProductImage;