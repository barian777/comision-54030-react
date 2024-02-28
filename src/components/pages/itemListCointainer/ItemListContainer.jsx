import styles from "./ItemListContainer.module.css";

import { getProducts} from "../../../productsMockUp";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

  const { category } = useParams()
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true)
    getProducts().then((response) => {
      
      if(category){
        const productsFilter = response.filter( product => product.category === category);
        setItems(productsFilter)
      }else{
        setItems(response)
      }
      setIsLoading(false)
    });
  }, [category]);

  return (
    <div className={styles.containerProducts}>
      {isLoading ? <h1>Cargando</h1> : <ItemList items={items} />}
    </div>
  );
};
