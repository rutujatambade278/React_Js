import React, { useContext } from 'react';
import CustomerContext from './Context/CustomerContext';


// Stateless component
function CustomerCart() {
  const { customers, removeCustomer } = useContext(CustomerContext);

  return (
    <div>
      <h2>Customer List</h2>
      <hr />
    
      {customers.length === 0 ? (<p>No customers available</p>) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstname} {customer.lastname} - Email: {customer.email}
              <button onClick={() => removeCustomer(customer.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
}

export default CustomerCart;
