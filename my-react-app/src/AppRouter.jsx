import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateCustomerForm from './components/Customer/CreateCustomerForm';
import ReadCustomerDetails from './components/Customer/ReadCustomerDetails';
import UpdateCustomerForm from './components/Customer/UpdateCustomerForm';
import DeleteCustomer from './components/Customer/DeleteCustomer';
import ListProducts from './components/Product/ListProducts';
import CreateProductForm from './components/Product/CreateProductForm';
import ReadProductDetails from './components/Product/ReadProductDetails';
import UpdateProductForm from './components/Product/UpdateProductForm';
import DeleteProduct from './components/Product/DeleteProduct';
import ProductConfirmationModal from './components/Product/ProductConfirmationModal';
import PlaceOrderForm from './components/Order/PlaceOrderForm';
import ManageOrderHistory from './components/Order/ManageOrderHistory';
import CancelOrder from './components/Order/CancelOrder';
import CalculateOrderTotalPrice from './components/Order/CalculateOrderTotalPrice';

const AppRouter = () => (
  <Routes>
    <Route path="/customers/new" component={CreateCustomerForm} />
    <Route path="/customers/:id" component={ReadCustomerDetails} />
    <Route path="/customers/:id/edit" component={UpdateCustomerForm} />
    <Route path="/customer/:id/delete" component={DeleteCustomer} />
    <Route path="/products" component={ListProducts} />
    <Route path="/products/new" component={CreateProductForm} />
    <Route path="/products/:id" component={ReadProductDetails} />
    <Route path="/products/:id/edit" component={UpdateProductForm} />
    <Route path="/products/:id/delete" component={DeleteProduct} />
    <Route path="/products/confirmation" component={ProductConfirmationModal} />
    <Route path="/orders/new" component={PlaceOrderForm} />
    <Route path="/orders/history" component={ManageOrderHistory} />
    <Route path="/orders/cancel" component={CancelOrder} />
    <Route path="/orders/total" component={CalculateOrderTotalPrice} />
  </Routes>
);

export default AppRouter;
