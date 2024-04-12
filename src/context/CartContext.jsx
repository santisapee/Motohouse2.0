import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const cantidadEnCarrito = carrito.reduce((acc, prod) => acc + prod.amount, 0);

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const precioTotal = carrito.reduce(
    (acc, prod) => acc + prod.amount * prod.price,
    0
  );

  const deleteProduct = (id) => {
    setCarrito(carrito.filter((prod) => prod.id != id));
  };

  const restarProduct = (id, amount) => {
    const updatedData = carrito.map((obj) =>
      obj.id === id ? { ...obj, amount: amount - 1 } : obj
    );
    setCarrito(updatedData);
  };
  const sumarProduct = (id, amount) => {
    const updatedData = carrito.map((obj) =>
      obj.id === id ? { ...obj, amount: amount + 1 } : obj
    );
    setCarrito(updatedData);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        cantidadEnCarrito,
        vaciarCarrito,
        precioTotal,
        deleteProduct,
        restarProduct,
        sumarProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
