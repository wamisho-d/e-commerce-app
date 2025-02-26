import React, { useState } from 'react';
import { fetchData } from '../../api';

const CreateCustomerForm = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData('/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      });
      alert('Customer created successfully');
    } catch (error) {
      alert('Error creating customer');
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
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CreateCustomerForm;
