import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';

const ManageOrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchData('/orders');
        setOrders(data);
      } catch (error) {
        alert('Error fetching orders');
      }
    };
    getOrders();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order Date: {order.orderDate} - Customer: {order.customerId}
            <ul>
              {order.products.map((product) => (
                <li key={product.id}>{product.name} - ${product.price}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageOrderHistory;
