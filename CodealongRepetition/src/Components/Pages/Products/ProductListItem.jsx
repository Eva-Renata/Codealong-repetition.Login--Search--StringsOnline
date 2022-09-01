import { Link } from "react-router-dom";
import styles from "../Products/Scss/ProductList.module.scss";

//props kommer fra PoductList (product)
export const ProductListItem = (props) => {
  return (
    <div className={styles.PLwrapper}>
      <figure>
        <img src={props.data.image_fullpath} alt={props.data.name} />
        <figcaption>
          <h3>{props.data.name}</h3>
          <p>{props.data.description_short}</p>
          <p>
            {/* link helt ud til en produkt efter id */}
            {/* produkt/group/subgroup/id*/}
            <Link to={`/products/${props.group_id}/${props.data.id}`}>
              Læs mere &raquo;
            </Link>
          </p>
          <p>Pris: DKK: {props.data.price}</p>
          <button>Læg i kurv</button>
        </figcaption>
      </figure>
    </div>
  );
};
