import React from 'react';
import { fetchData } from '../../api';

const DeleteCustomer = ({ id }) => {
  const handleDelete = async () => {
    try {
      await fetchData(`/customers/${id}`, { method: 'DELETE' });
      alert('Customer deleted successfully');
    } catch (error) {
      alert('Error deleting customer');
    }
  };

  return (
    <button onClick={handleDelete}>Delete Customer</button>
  );
};

export default DeleteCustomer;
