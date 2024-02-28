import { useState } from "react";
import { ItemCount } from "./ItemCount";

export const ItemCountContainer = ({stock}) => {
  
    const [counter, setCounter]= useState( 1 )

    const addProduct = () => {
        if( counter < stock ){
            setCounter( counter + 1 )
        }
    }

    const subsProduct = () => {
        if( counter > 1 ){
            setCounter( counter - 1 )
        }
    }

    return <ItemCount counter={counter} addProduct={addProduct} subsProduct={subsProduct} stock={stock}/>;
};
