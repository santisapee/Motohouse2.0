import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const {
    carrito,
    vaciarCarrito,
    checkOut,
    precioTotal,
    deleteProduct,
    restarProduct,
    sumarProduct,
  } = useContext(CartContext);

  console.log(carrito);
  return (
    <>
      <div>
        <h1>Carrito</h1>
        <ul>
          {carrito.map((prod) => (
            <li key={prod.id}>
              <img src={prod.image} alt={prod.title} />
              <p>{prod.title}</p>
              <p>{prod.price}</p>
              <p>{prod.amount}</p>
              <button onClick={() => deleteProduct(prod.id)}>Eliminar</button>
              <button onClick={() => restarProduct(prod.id, prod.amount)}>
                -
              </button>
              <button onClick={() => sumarProduct(prod.id, prod.amount)}>
                +
              </button>
            </li>
          ))}
        </ul>
        <p>Total: {precioTotal}</p>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <button onClick={checkOut}>Pagar</button>
      </div>
    </>
  );
}
