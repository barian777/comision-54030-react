import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { getOneProdcut} from "../../../productsMockUp";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [itemSelect, setItemSelect] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    getOneProdcut(id).then((response) => 
    setItemSelect(response), setIsLoading(false))
  }, []);

    return (
    <>
        {isLoading ? <h1>Cargando</h1> : <ItemDetail itemSelect={itemSelect} />}
    </>
        );
};
