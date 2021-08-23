import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Toggle from "./Toggle";



const ProductCard = ({product, onAddToCart}) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);
 

  return (
    <div className="product-card">
    <Link to={`/product/${product.id}`}>
      <div className="product-card__image">
        <img src={product.media.source} alt= {product.name} />
        <img src={product.assets[1].url} alt= {product.name} />
      </div>
      <h3 className="product-card__name"> {product.name}</h3>
      <div className="product-card__price">
        &#8377; ${product.price.formatted}
        <span className="product-card__price__old">
          <del>&#8377; 123231</del>
        </span>
      </div>
    </Link>
    <div
      className="product-card__btn"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Button size="sm" icon="bx bx-cart" animate={true}
      onClick={handleAddToCart}>
        Add to Cart
      </Button>
      <Toggle />
    </div>
  </div>
  );
};


export default ProductCard;
