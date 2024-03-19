import { Badge } from "@mui/material";
import { FaOpencart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../context/cartcontext/CartContext";


const CartWidget = () => {

  const { getTotalProducts } = useContext(CartContext)

  let numberWidget = getTotalProducts()

    return (
      <>
         <Badge badgeContent = {numberWidget} showZero  color="secondary" anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
          <FaOpencart color='white' size={'1.5em'}/>
        </Badge>
      </>
    );
  };
  
  export default CartWidget;