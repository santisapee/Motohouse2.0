/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const cantidadEnCarrito = carrito.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const precioTotal = carrito.reduce(
    (acc, prod) => acc + prod.quantity * prod.price,
    0
  );

  const deleteProduct = (id)=>{
    setCarrito(carrito.filter(prod=>prod.id != id))
  }

  return (
    <div>
    <h2>Carrito de compras</h2>
    <p>Cantidad en carrito: {cantidadEnCarrito}</p>
    <p>Precio total: ${precioTotal}</p>
    <button onClick={vaciarCarrito}>Vaciar carrito</button>
    <ul>
      {carrito.map((producto) => (
        <li key={producto.id}>
          {producto.nombre} - Cantidad: {producto.quantity} - Precio: ${producto.price}
          <button onClick={() => deleteProduct(producto.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  </div>
  );
}