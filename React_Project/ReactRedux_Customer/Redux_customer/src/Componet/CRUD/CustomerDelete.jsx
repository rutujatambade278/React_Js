import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteCustomer } from '../Redux/CreateAction';

const CustomerDelete = () => {
  const { email } = useParams(); // Get email from the route parameter
  const navigate = useNavigate();
  const customers = useSelector(state => state.customers.customers);
  const [customer, setCustomer] = useState({});
  const dispatch = useDispatch();

  // Find the customer by email
  useEffect(() => {
    const existingCustomer = customers.find(cust => cust.email === email);
    if (existingCustomer) {
      setCustomer(existingCustomer);
    }
  }, [email, customers]);

  const handleDelete = () => {
    dispatch(deleteCustomer(customer.email));
    navigate('/'); 
  };

  return (
    <div>
      <h3>Customer Remove Request</h3>
      <p>First Name: {customer.firstName}</p>
      <p>Last Name: {customer.lastName}</p>
      <p>Email: {customer.email}</p>
      <p>Contact Number: {customer.contactNumber}</p>
      <p>Are you sure?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
    </div>
  );
};

export default CustomerDelete;
