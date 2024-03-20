import React from 'react';

export default function Cart() {
  const addToCart = (item) => {
    console.log('Item agregado al carrito:', item);
  };

  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={() => addToCart({ id: 1, name: 'Producto ejemplo' })}>Agregar al Carrito</button>
    </div>
  );
}
