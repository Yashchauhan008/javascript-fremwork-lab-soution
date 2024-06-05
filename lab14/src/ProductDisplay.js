// ProductDisplay.js
import React from 'react';

function ProductDisplay() {
  const products = [
    { id: 1, name: 'Laptop', price: '$1000' },
    { id: 2, name: 'Smartphone', price: '$500' },
    { id: 3, name: 'Tablet', price: '$300' },
    { id: 4, name: 'Smartwatch', price: '$200' },
  ];

  return (
    <div>
      <h2>Product List:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDisplay;
