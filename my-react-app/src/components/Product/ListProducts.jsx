import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData('/products');
        setProducts(data);
      } catch (error) {
        alert('Error fetching products');
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListProducts;
