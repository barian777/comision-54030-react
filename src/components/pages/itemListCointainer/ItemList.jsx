import styles from "./ItemListContainer.module.css";

import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemList = ({ items }) => {
  
  return (
    <>
    <div style={{padding:"2rem"}}>
      <h1 className={styles.title}>TODOS LOS PRODUCTOS</h1>
      <div style={{display: 'grid' , gridTemplateColumns: 'repeat(5, 1fr)', justifyItems:'center'}}>
        {items.map(({ img, name, subname, price, stock, id }) => {
          return (
            <ProductCard
              key={id}
              img={img}
              name={name}
              subname={subname}
              price={price}
              stock={stock}
              id={id}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};
