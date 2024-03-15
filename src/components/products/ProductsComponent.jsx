import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function ProductsComponent() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

    return (
      <>
      <div>
        <h1>Los destacados</h1>
        <section style={{ display: 'flex', gap: 10 }}>
          {products.map((product) => (
            <article
              key={product.id}
              style={{ border: '1px solid white', padding: 10 }}
            >
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} />
              <p>Precio $ {product.price}</p>
              <button onClick={() => handleClick(product.id)}>
                Ver detalles
              </button>
            </article>
          ))}
        </section>
      </div>
    </>
    );
  }