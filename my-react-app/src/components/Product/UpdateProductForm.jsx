import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';

const UpdateProductForm = ({ match }) => {
  const [product, setProduct] = useState({ name: '', price: '' });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData(`/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      alert('Product updated successfully');
    } catch (error) {
      alert('Error updating product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Price: </label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
