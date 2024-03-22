import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartcontext/CartContext";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cart, cleanCart, removeCart, totalPrice } = useContext(CartContext);

  const cleanWithSw = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Se vaciara el carrito completamente",
      color: "black",
      icon: "warning",
      iconColor: "black",
      showCancelButton: true,
      confirmButtonColor: "black",
      cancelButtonColor: "#6a1b9a",
      cancelButtonText: "Cancelar",
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

  if (cart.length == 0) {
    return (
      <>
        <h1 className={styles.cartEmty}>Su carrito esta vacio 😴😴</h1>
        <Link to="/">
          <button className={styles.btnStBuy}>IR A COMPRAR</button>
        </Link>
      </>
    );
  }
  return (
    <>
      <div style={{ height: "100vh" }}>
        {cart.map((product) => (
          <div className={styles.cardDetailCont}>
            <div className={styles.cardDetail} key={product.id}>
              <img className={styles.img} src={product.img} alt="" />
              <div className={styles.fullName}>
                <h3 className={styles.nameCtg}>PRODUCTO</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".3rem",
                  }}
                >
                  <h1 className={styles.name}>{product.name}</h1>
                  <h2>{product.subname}</h2>
                </div>
              </div>
              <div style={{ width: "350px" }}>
                <h3 className={styles.nameCtg}>CANTIDAD</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100px",
                  }}
                >
                  <h1 className={styles.qnTity}>{product.quantity}</h1>
                </div>
              </div>
              <div style={{ width: "250px" }}>
                <h3 className={styles.nameCtg}>SUBTOTAL</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100px",
                  }}
                >
                  <h1 className={styles.qnTity}>{`$${
                    product.quantity * product.price
                  }`}</h1>
                </div>
              </div>
              <button
                className={styles.btnRmv}
                onClick={() => removeCart(product.id)}
              >
                <RiDeleteBin3Fill />
              </button>
            </div>
          </div>
        ))}
        <div style={{display:"flex", justifyContent:"flex-end"}}>
          <h2 className={styles.total}>Total :{"  $ " + totalPrice()}</h2>
        </div>

        <div style={{display:"flex", justifyContent:"space-between", marginLeft:"15rem", marginRight:"15rem"}}>
          <button className={styles.btnEmpty} onClick={cleanWithSw}>
            Vaciar Carrito
          </button>

          <Link to={"/checkout"}>
            <button className={styles.btnBuy}>Finalizar Compra</button>
          </Link>
        </div>
      </div>
    </>
  );
};
