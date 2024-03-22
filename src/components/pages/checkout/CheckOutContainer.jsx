import { useContext, useState } from "react";
import { CheckOut } from "./CheckOut";
import { CartContext } from "../../../context/cartcontext/CartContext";
import {addDoc, collection, updateDoc, doc} from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig";
import styles from "./CheckOut.module.css"

export const CheckOutContainer = () => {


  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    mail: "",
    phone: "",
  });

  const[orderId, setOrderId]=useState(null)

  const { cart, totalPrice, cleanCart } = useContext(CartContext)

  let getTotalPrice = totalPrice();

  const sendForm = (event) => {
    event.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: getTotalPrice,
    };

    let orderCollec = collection(dataBase, "orders")

    addDoc(orderCollec, order).then((res)=> setOrderId(res.id))

    cart.forEach(element => {
      let docRef = doc(dataBase, "products", element.id )

      updateDoc( docRef, {stock: element.stock - element.quantity})
    });

    cleanCart()

  };

  const getInfo = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <CheckOut  orderId={orderId} sendForm={sendForm} getInfo={getInfo} />
    </>
  );
};
