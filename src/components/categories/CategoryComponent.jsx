import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function CategoriesComponent() {
  const [products, setProducts] = useState([]);
  const { categories } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductsByCategory(categories);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categories]);

  return (
    <>
      <h1>Productos: {categories}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
