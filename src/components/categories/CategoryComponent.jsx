import { useParams } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function CategoryComponent() {
  const { catId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      if (catId) {
        setProducts(res.filter((prod) => prod.category === catId));
      } else {
        setProducts(res);
      }
    });
  }, [catId]);

  return (
    <>
      <div>Category Component {catId}</div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}
