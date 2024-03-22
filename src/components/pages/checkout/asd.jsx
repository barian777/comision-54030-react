import styles from "./CheckOut.module.css"

export const CheckOut = ({ sendForm, getInfo, orderId }) => {
  return (
    <>
      {orderId ? (
        <h1>Tu orden de compra es {orderId}</h1>
      ) : (
        <div>
          <h1 className={styles.title}>Rellene el formulario para completarla orden de compra</h1>
          <div style={{backgroundColor:"black", height:"75vh", borderBottom: "solid 2px white"}} >
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
            </form>
          </div>
          
            <button className={styles.btnBuy}  type="submit">Comprar</button>
          
        </div>
      )}
    </>
  );
};