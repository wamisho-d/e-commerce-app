import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';

const ReadProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchData(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        alert('Error fetching product details');
      }
    };
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ReadProductDetails;
