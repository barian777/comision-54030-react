import styles from "./ItemListContainer.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

import { getProducts } from "../../../productsMockUp";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    let productsCollection = collection(dataBase, "products");

    let consult = productsCollection;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consult = productsCollectionFiltered;
    }

    getDocs(consult)
      .then((res) => {
        let arrayDtBs = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });

        setItems(arrayDtBs);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <>
          <div className={styles.loading}>
            <PacmanLoader color="#000000" />
          </div>
      </>
    );
  }

  return <ItemList items={items} />;
};
