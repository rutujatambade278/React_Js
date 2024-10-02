import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Customers = () => {
  const customers = useSelector(state => state.customers.customers) || []; // Get customers from Redux state

  return (
    <div>
      <h2>Customers List</h2>
      <Link to="insert">Insert New Customer</Link>
      <ul>
        {customers.length > 0 ? (
          customers.map(customer => (
            <li key={customer.email}>
              {customer.firstName} {customer.lastName}
              <Link to={`details/${customer.email}`}>| details |</Link>
              <Link to={`update/${customer.email}`}>| update |</Link>
              <Link to={`delete/${customer.email}`}>| delete</Link>
            </li>
          ))
        ) : (
          <li>No customers found.</li>
        )}
      </ul>
      <Outlet />
    </div>
  );
};

export default Customers;
