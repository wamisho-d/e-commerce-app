import React, { useState } from 'react';
import { fetchData } from '../../api';

const CancelOrder = () => {
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleCancel = async () => {
    try {
      await fetchData(`/orders/${orderId}`, { method: 'DELETE' });
      alert('Order canceled successfully');
    } catch (error) {
      alert('Error canceling order');
    }
  };

  return (
    <div>
      <input type="text" value={orderId} onChange={handleChange} placeholder="Enter Order ID" />
      <button onClick={handleCancel}>Cancel Order</button>
    </div>
  );
};

export default CancelOrder;
