import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../asyncMock';
import { useEffect, useState } from 'react';
import SingleProduct from '../product/SingleProduct';

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
      <ul style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent:'center',  gap: '10px'}}>
        {products.map(product => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
