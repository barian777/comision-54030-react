import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState( JSON.parse( localStorage.getItem("cart") ) || [] );

    const cleanCart = () => { 
      setCart([])
      localStorage.removeItem("cart")
     }

    const removeCart = (id) => { 
      let newArray = cart.filter((element) => element.id !== id)
      setCart(newArray);
      if(newArray.length > 0){
        localStorage.setItem("cart", JSON.stringify(newArray))
      }else {
        setCart([])
        localStorage.removeItem("cart")
      }
     }

    const productExistentInCart = (id) => { 
      let exist= cart.some((element) => element.id === id)
      return exist
     }


    const addCart = (product) => {
      let productValidation = productExistentInCart(product.id);
    
      let updatedCart;
    
      if (productValidation) {
        updatedCart = cart.map((element) => {
          if (element.id === product.id) {
            return {
              ...element,
              quantity: product.quantity,
            };
          } else {
            return element;
          }
        });
      } else {
        updatedCart = [...cart, product];
      }
    
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    

    const getTotalProducts = () => {
      
      if (!cart || cart.length === 0) {
        return 0;
      }

      let totalQuantities = cart.reduce((acc, element) => {
        return acc + element.quantity
      }, 0)

      return totalQuantities
    }

     const totalPrice = () => {

      if (!cart || cart.length === 0) {
        return 0;
      }

      let priceTotalProducts = cart.reduce((acc, element) => {

        return acc + element.price * element.quantity

      }, 0) 

      return priceTotalProducts
     }

     const howQuantity = (id) =>{

      let product = cart.find((element) => element.id === id )
      
      if(product){
        return product.quantity
      }else{
        return product
      }
     }

    let data = {
        cart,
        addCart,
        cleanCart,
        removeCart,
        getTotalProducts,
        totalPrice,
        howQuantity
    }

  return <CartContext.Provider value={ data }>
    {children}
  </CartContext.Provider>
    
}
