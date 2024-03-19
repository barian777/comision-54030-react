export const CheckOut = ({ sendForm, getInfo, orderId }) => {
  return (
    <>
      {orderId ? (
        <h1>Tu orden de compra es {orderId}</h1>
      ) : (
        <div>
          <form onSubmit={sendForm}>
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
            <button type="submit">Comprar</button>
          </form>
        </div>
      )}
    </>
  );
};
