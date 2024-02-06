import { FaOpencart } from "react-icons/fa";

const CartWidget = () => {
    return (
      <div>
        <span style={{color:'white', fontSize:'0.75rem'}}>0</span>
        <FaOpencart color='white' size={'1.5em'}/>
      </div>
    );
  };
  
  export default CartWidget;