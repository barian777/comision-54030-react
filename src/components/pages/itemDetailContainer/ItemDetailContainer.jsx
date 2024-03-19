import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/cartcontext/CartContext";
import PacmanLoader from "react-spinners/PacmanLoader"
import styles from "./ItemDetailContainer.module.css"
import { dataBase } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [itemSelect, setItemSelect] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { addCart, howQuantity } = useContext(CartContext)

  let totalQuantityOneProduct = howQuantity(id)

  useEffect(() => {
    setIsLoading(true)
    let prodCollec = collection(dataBase, "products")
    let prodDoc = doc(prodCollec, id)
    getDoc(prodDoc).then(res => {
      setItemSelect({...res.data(), id: res.id })
    }).finally(()=> setIsLoading(false))

  }, [id]);

  const onAdd = (quantity) => {

    let infoProduct ={
      ...itemSelect,
      quantity:quantity
    }
    addCart(infoProduct)
  };

  if(isLoading){
    return(
      <>
        <div className={styles.loading} >
          <PacmanLoader color="#000000"/>
        </div>
      </>
    )
  }

  return (
    <>
        <ItemDetail itemSelect={itemSelect} onAdd={onAdd} totalQuantityOneProduct={totalQuantityOneProduct}/>
    </>
  );
};
