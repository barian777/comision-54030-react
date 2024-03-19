import { useState } from "react";
import { ItemCount } from "./ItemCount";
import Swal from 'sweetalert2'


export const ItemCountContainer = ({stock, onAdd, valueInitial=1 }) => {
  
    const [counter, setCounter]= useState(valueInitial )

    const addProduct = () => {
        if( counter < stock ){
            setCounter( counter + 1 );
        } else{
            Swal.fire({
                title: "Stock Máximo",
                text: "Has llegado al máximo stock que disponemos",
            });
        }
    }

    const subsProduct = () => {
        if( counter > 1 ){
            setCounter( counter - 1 )
        }
    }

    return <ItemCount counter={counter} addProduct={addProduct} subsProduct={subsProduct} stock={stock} onAdd={onAdd} />;
};
