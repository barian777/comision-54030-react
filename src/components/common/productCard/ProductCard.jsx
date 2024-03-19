import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ img, name, subname, price, id }) => {
  return (
    <>
      <div className={styles.cardElemnts}>
        <div className={styles.img}>
          <Link to={`/item/${id}`}>
            <img src={img} alt="" style={{ height: "18rem" }} />
          </Link>    
        </div>
        <section className={styles.descProduct}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.descParagraph}>{subname}</p>
          <h3 className={styles.price}>${price}</h3>
        </section>
        <Link to={`/item/${id}`}>
          <button className={styles.buttonDetail}>Ver Detalles</button>
        </Link>
      </div>
    </>
  );
};
