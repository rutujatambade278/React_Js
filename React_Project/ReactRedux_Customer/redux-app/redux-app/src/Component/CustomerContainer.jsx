
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomers } from '../redux/CustomerAction';
import { Link } from 'react-router-dom';

const CustomerContainer = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(setCustomers());
    }
  }, [dispatch, customers.length]);

  return (
    <div>
      <h1> React Redux</h1>
      <h2>Customer's Data</h2>
      <Link to="/insert">Insert New Customer</Link>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            Customer: {customer.firstName} {customer.lastName} |{' '}
            <Link to={`/customers/${customer.id}`}>Details</Link> |{' '}
            <Link to={`/update/${customer.id}`}>Update</Link> |{' '}
            <Link to={`/delete/${customer.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerContainer;
