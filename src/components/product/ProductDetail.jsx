import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMock';
import ButtonComponnent from '../ButtonComponnent';

export default function ProductDetail() {
  const { prodId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);

  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = ()=>{
    setShowMenu((isShown) => !isShown);
} 

  return (
    <>
      <div>
        {/* <h1>{product.id}</h1> */}
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

