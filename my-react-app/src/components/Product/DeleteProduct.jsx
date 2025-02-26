import React from 'react';
import { fetchData } from '../../api';

const DeleteProduct = ({ id }) => {
  const handleDelete = async () => {
    try {
      await fetchData(`/products/${id}`, { method: 'DELETE' });
      alert('Product deleted successfully');
    } catch (error) {
      alert('Error deleting product');
    }
  };

  return (
    <button onClick={handleDelete}>Delete Product</button>
  );
};

export default DeleteProduct;
