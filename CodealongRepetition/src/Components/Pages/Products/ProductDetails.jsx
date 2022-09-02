import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../App/Layout/Layout";
import { ProductDetailItem } from "./ProductDetailItem";

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
        <ProductDetailItem data={productData} />
      ) : null}
    </Layout>
  );
};
