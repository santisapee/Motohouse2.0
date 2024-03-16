import { useParams } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function CategoryComponent() {
  const [products, setProducts] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    const asyncFunc = catId ? products : getProducts

    asyncFunc(catId)
    .then(Response => {
      setProducts(Response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [catId])

  return (
    <>
      <div>Category Component {catId}</div>
    </>
  );
}
