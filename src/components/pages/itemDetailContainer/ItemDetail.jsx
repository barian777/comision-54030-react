import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer"
import styles from "./ItemDetailContainer.module.css"

export const ItemDetail = ({itemSelect, onAdd, totalQuantityOneProduct}) => {
    return (
        <>
        <div>
            <section>
                <div className={styles.containerDetails}>
                    <div>
                        <img src={itemSelect.img} alt="" />
                    </div>
                    <div>
                        <h1>{itemSelect.name}</h1>
                        <h2>{itemSelect.subname}</h2>
                        <h2>${itemSelect.price}</h2>
                        <div>
                            <ItemCountContainer stock={itemSelect.stock} onAdd={onAdd} valueInitial={totalQuantityOneProduct} />
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <h2 style={{padding:"1rem"}}>Descripcion</h2>
                    <p style={{padding:"1rem"}}>{itemSelect.description}</p>
                </div>
            </section>
        </div>
        </>
    )
}
