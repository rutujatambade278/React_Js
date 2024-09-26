import React, { useContext } from 'react';
import CustomerContext from './Context/CustomerContext'; // Ensure this path is correct


function Customer({ id, firstname, lastname, email, contactnumber }) {
  const { addCustomer } = useContext(CustomerContext);

  const handleAddCustomer = () => {
    addCustomer({ id, firstname, lastname, email, contactnumber });
  };

  return (
    <div>
      <h4>{firstname} {lastname}</h4>
      <p>Email: {email}</p>
      <p>Contact: {contactnumber}</p>
      <button onClick={handleAddCustomer}>Add Customer</button>
    </div>
  );
}

export default Customer;
