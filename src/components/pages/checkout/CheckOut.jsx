import styles from "./CheckOut.module.css"
import { Link } from "react-router-dom";

export const CheckOut = ({ sendForm, getInfo, orderId }) => {
  return (
    <>
      {orderId ? (
        <div style={{height:"600px"}}>
          <h1 className={styles.title}>🎊LA ORDEN DE COMPRA SE REALIZO CON EXITO🎊</h1>
          <h2 className={styles.title}>Tu orden es <span style={{backgroundColor:"black", color:"white", padding:".5rem"}}>{orderId}</span></h2>
          <Link to="/">
            <button className={styles.btnBuy}>Seguir Comprando</button>
          </Link>
        </div>
      ) : (
        <div style={{height:"600px"}}>
          <h1 className={styles.title}>Completa el formulario para finalizar la orden de compra</h1>
          <form className={styles.formCont} onSubmit={sendForm}>
            <input
              type="text"
              placeholder="Nombre"
              onChange={getInfo}
              name="name"
            />
            <input
              type="text"
              placeholder="Apellido/s"
              onChange={getInfo}
              name="lastname"
            />
            <input
              type="text"
              placeholder="E-Mail"
              onChange={getInfo}
              name="mail"
            />
            <input
              type="text"
              placeholder="Telefono"
              onChange={getInfo}
              name="phone"
            />
            <button className={styles.btnBuy} type="submit">Comprar</button>
          </form>
        </div>
      )}
    </>
  );
};
