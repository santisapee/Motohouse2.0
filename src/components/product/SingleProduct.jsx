import { useState } from "react";
import ButtonComponnent from "../ButtonComponnent";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function SingleProduct({ product }) {
  const [showMenu, setShowMenu] = useState(true);
  const [amount, setAmount] = useState(1);
  const { carrito, setCarrito } = useContext(CartContext);

  const toggleMenu = () => {
    setShowMenu((isShown) => !isShown);
  };

  const handleAddToCart = () => {
    let productToAdd = { ...product, amount };
    let nuevoCarrito = [...carrito];
    let index = carrito.findIndex((prod) => prod.id === product.id);
    if (index === -1) {
      nuevoCarrito.push(productToAdd);
    } else {
      nuevoCarrito[index].amount += amount;
    }
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      <div>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.categories}</p>
        <p>Precio $ {product.price}</p>
        <ButtonComponnent
          amount={amount}
          setAmount={setAmount}
          stock={10}
          isDisabled={showMenu}
        />
        <button onClick={toggleMenu}>Elegir cantidad</button>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </>
  );
}
