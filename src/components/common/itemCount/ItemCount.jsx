import  styles  from './ItemCount.module.css';

export const ItemCount = ({counter, addProduct, subsProduct, stock, onAdd}) => {
  return (
    <div>
        <div className={styles.countsElements}>
            <button onClick={subsProduct} disabled={counter === 1 ? true : false} className={styles.btnAddSub} >-</button>
            <p className={styles.counter}>{counter}</p>
            <button onClick={addProduct} disabled={counter === stock ? true : false} className={styles.btnAddSub}>+</button>
        </div>
        <button className={styles.buttonAddCart} onClick={() => onAdd(counter)} >Add to Cart</button>
    </div>
  );
};
