import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CustomerDetails = () => {
  const { email } = useParams(); 
  const customers = useSelector(state => state.customers.customers);
  const [customer, setCustomer] = useState(null);

  
  useEffect(() => {
    const existingCustomer = customers.find(cust => cust.email === email);
    if (existingCustomer) {
      setCustomer(existingCustomer);
    }
  }, [email, customers]);

  if (!customer) {
    return <p>Customer not found</p>;
  }

  return (
    <div>
      <h3>Customer Details</h3>
      <p>First Name: {customer.firstName}</p>
      <p>Last Name: {customer.lastName}</p>
      <p>Email: {customer.email}</p>
      <p>Contact Number: {customer.contactNumber}</p>

    </div>
  );
};

export default CustomerDetails;
