import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartcontext/CartContext";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, cleanCart, removeCart, totalPrice } = useContext(CartContext);

  const cleanWithSw = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Se vaciara el carrito completamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si, vaciar carrito",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Carrito vacio!",
          text: "Tus productos se han eliminado",
          icon: "success",
        });
        cleanCart();
      }
    });
  };

  return (
    <>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h1>{product.quantity}</h1>
            <button onClick={() => removeCart(product.id)}>Eliminar</button>
          </div>
        ))}

        <h2>Total:{"$" + totalPrice()}</h2>
        <button onClick={cleanWithSw}>Vaciar Carrito</button>

        <Link to={"/checkout"}>
          <button>Finalizar Compra</button>
        </Link>
      </div>
    </>
  );
};
