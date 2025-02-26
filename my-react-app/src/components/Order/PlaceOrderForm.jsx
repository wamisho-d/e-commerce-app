import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';

const PlaceOrderForm = () => {
  const [order, setOrder] = useState({ customerId: '', products: [], orderDate: '' });
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCustomersAndProducts = async () => {
      try {
        const customerData = await fetchData('/customers');
        const productData = await fetchData('/products');
        setCustomers(customerData);
        setProducts(productData);
      } catch (error) {
        alert('Error fetching data');
      }
    };
    fetchCustomersAndProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleProductChange = (e) => {
    const { value, checked } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      products: checked
        ? [...prevOrder.products, value]
        : prevOrder.products.filter((product) => product !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData('/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      alert('Order placed successfully');
    } catch (error) {
      alert('Error placing order');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Customer: </label>
        <select name="customerId" value={order.customerId} onChange={handleChange} required>
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Products: </label>
        {products.map((product) => (
          <div key={product.id}>
            <input
              type="checkbox"
              value={product.id}
              onChange={handleProductChange}
            />
            {product.name} - ${product.price}
          </div>
        ))}
      </div>
      <div>
        <label>Order Date: </label>
        <input type="date" name="orderDate" value={order.orderDate} onChange={handleChange} required />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default PlaceOrderForm;
