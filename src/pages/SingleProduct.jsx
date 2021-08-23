import { Grid, Hidden } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/helper/ImageSlider";
import ImageGrid from "../components/singleProduct/ImageGrid";
import Info from "../components/singleProduct/Info";
import MainImage from "../components/singleProduct/MainImage";
import { commerce } from "../lib/commerce";
import Loaders from "../components/Loaders";

function SingleProduct({ onAddToCart }) {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  //   console.log(product);

  const [isLoading, setIsLoading] = useState(true);
  const fetchProduct = async () => {
    // const { data } = await commerce.products.list({ query: "prod_Kvg9l6AzdR51bB" }) // default 20 max 200
    const { data } = await commerce.products.list({ query: product_id }); // default 20 max 200
    setProduct(data[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!isLoading) {
    return (
      <div style={{ padding: 15 }}>
        <Grid
          container
          item
          justifyContent="center"
          spacing={2}
          sm={12}
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <Hidden smDown>
            <Grid item sm={1}>
              <ImageGrid
                images={product.assets}
                onSelect={setSelectedImage}
                selectedImage={selectedImage}
              />
            </Grid>

            <Grid item sm={4}>
              <MainImage src={product.assets[selectedImage]} />
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container item sm={6} spacing={1}>
              <ImageSlider images={product.assets} />
            </Grid>
          </Hidden>
          <Info product={product} onAddToCart={onAddToCart} />
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Loaders />
      </div>
    );
  }
}

export default SingleProduct;
