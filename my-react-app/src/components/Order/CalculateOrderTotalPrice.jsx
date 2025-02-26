import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';

const CalculateOrderTotalPrice = () => {
  const [orderId, setOrderId] = useState('');
  const [totalPrice, setTotalPrice] = useState(null);

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleCalculate = async () => {
    try {
      const order = await fetchData(`/orders/${orderId}`);
      const total = order.products.reduce((sum, product) => sum + product.price, 0);
      setTotalPrice(total);
    } catch (error) {
      alert('Error calculating order total');
    }
  };

  return (
    <div>
      <input type="text" value={orderId} onChange={handleChange} placeholder="Enter Order ID" />
      <button onClick={handleCalculate}>Calculate Total</button>
      {totalPrice !== null && <p>Total Price: ${totalPrice}</p>}
    </div>
  );
};

export default CalculateOrderTotalPrice;
