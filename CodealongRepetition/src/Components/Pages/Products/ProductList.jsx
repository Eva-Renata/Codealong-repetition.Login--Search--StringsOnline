import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../App/Layout/Layout";
import { ProductListItem } from "./ProductListItem";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  //vi skriver 0 fordi vi skal have en id
  const { group_id } = useParams(0);

  //useEffect for re-renders
  useEffect(() => {
    const getProductList = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/stringsonline/products/group/${group_id}`
      );
      //console.log(result);
      setProductList(result.data.products);
    };
    getProductList();
    //i dependency array sætter vi id, fordi vi vil gerne have ny liste når id skiftes
  }, [group_id]);

  return (
    <Layout title="Produkter" description="Se vores produkter">
      {productList &&
        productList.map((product) => {
          return (
            //making a new component, to be easier to reuse.
            <ProductListItem
              key={product.id}
              data={product}
              group_id={group_id}
            />
          );
        })}
    </Layout>
  );
};
