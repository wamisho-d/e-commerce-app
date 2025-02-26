import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';

const ReadCustomerDetails = ({ match }) => {
  const [customer, setCustomer] = useState(null);
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

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
};

export default ReadCustomerDetails;
