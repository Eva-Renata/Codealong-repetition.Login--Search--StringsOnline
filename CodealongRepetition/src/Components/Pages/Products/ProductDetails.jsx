import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../App/Layout/Layout";
//import { ProductDetailItem } from "./ProductDetailItem";
import styles from "./Scss/ProductDetails.module.scss";

export const ProductDetails = () => {
  //deconstructor
  const { product_id } = useParams();
  //produkt id ved vi fra useParams
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const getProductData = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/stringsonline/products/${product_id}`
        );
        console.log(result.data.item);
        setProductData(result.data.item);
      } catch (err) {
        console.error(err);
      }
    };
    getProductData();
    //efter kald af funktion den kører kun en gang.
    //vi skriver i dependency product_id, så den re-renderer hver gang vi trykker på id.
  }, [product_id]);

  return (
    <Layout title="Produkt detaljer">
      {productData ? (
        //make  a component out of this?? div.
        <div className={styles.DTwrapper}>
          <h2>{productData.name}</h2>
          <h3>Brand: {productData.brand}</h3>
          {productData.image && productData.image.fullpath && (
            <img src={productData.image.fullpath} alt="image" />
          )}
          <p className="nl2br">{productData.description_long}</p>
          <p>Price: DKK {productData.price} </p>
          <p>Rating: {productData.rating} *</p>
          <p>Der er {productData.stock} produkter tilbæge på lager.</p>
        </div>
      ) : null}
    </Layout>
  );
};
