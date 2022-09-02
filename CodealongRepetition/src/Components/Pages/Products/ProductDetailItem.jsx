import styles from "./Scss/ProductDetails.module.scss";

//props are in the ProductDetails
export const ProductDetailItem = (props) => {
  //we make const data so we write less code
  const data = props.data;
  return (
    <div className={styles.DTwrapper}>
      <h2>{data.name}</h2>
      <h3>Brand: {data.brand}</h3>
      {data.image && data.image.fullpath && (
        <img src={data.image.fullpath} alt="guitars" />
      )}
      <p>{data.description_long}</p>
      <p>Price: DKK {data.price} </p>
      <p>Rating: {data.rating} *</p>
      <p>Der er {data.stock} produkter tilbæge på lager.</p>
    </div>
  );
};
