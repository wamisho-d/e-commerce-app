import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';

const UpdateCustomerForm = ({ match }) => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const { id } = match.params;

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const data = await fetchData(`/customers/${id}`);
        setCustomer(data);
      } catch (error) {
        alert('Error fetching customer details');
      }
    };
    getCustomer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData(`/customers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      });
      alert('Customer updated successfully');
    } catch (error) {
      alert('Error updating customer');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={customer.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" name="email" value={customer.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone: </label>
        <input type="tel" name="phone" value={customer.phone} onChange={handleChange} required />
      </div>
      <button type="submit">Update Customer</button>
    </form>
  );
};

export default UpdateCustomerForm;
