import React, { useState } from 'react';
import { fetchData } from '../../api';

const CreateProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData('/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      alert('Product created successfully');
    } catch (error) {
      alert('Error creating product');
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
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
