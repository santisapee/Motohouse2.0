import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMock';
import ButtonComponnent from '../ButtonComponnent';

export default function SingleProduct({product}) {

  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = ()=>{
    setShowMenu((isShown) => !isShown);
} 

  return (
    <>
      <div>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.categories}</p>
        <p>Precio $ {product.price}</p>
        <ButtonComponnent stock={10} isDisabled={showMenu} />
        <button onClick={toggleMenu}>Elegir cantidad</button>
        <button>
          Agregar al Carrito
        </button>
      </div>
    </>
  );
}