import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer"
import styles from "./ItemDetailContainer.module.css"

export const ItemDetail = ({itemSelect, onAdd, totalQuantityOneProduct}) => {
    return (
        <>
        <div>
            <section>
                <div className={styles.containerDetails}>
                    <div>
                        <img className={styles.imgDtl} src={itemSelect.img} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.name}>{itemSelect.name}</h1>
                        <h2 className={styles.subname}>{itemSelect.subname}</h2>
                        <h2 className={styles.price}>${itemSelect.price}</h2>
                        <div className={styles.count}>
                            <ItemCountContainer stock={itemSelect.stock} onAdd={onAdd} valueInitial={totalQuantityOneProduct} />
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <h2>Descripcion</h2>
                    <p style={{padding:"1.5rem"}}>{itemSelect.description}</p>
                </div>
            </section>
        </div>
        </>
    )
}
