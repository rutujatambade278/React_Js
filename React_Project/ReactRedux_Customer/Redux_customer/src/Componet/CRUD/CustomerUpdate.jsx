import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCustomer } from '../Redux/CreateAction';

const CustomerUpdate = () => {
  const { email } = useParams(); // Get email from the route parameter
  const navigate = useNavigate();
  const customers = useSelector(state => state.customers.customers);
  const [customer, setCustomer] = useState({ firstName: '', lastName: '', email: '', contactNumber: '' });
  const dispatch = useDispatch();

  // Find the customer by email
  useEffect(() => {
    const existingCustomer = customers.find(cust => cust.email === email);
    if (existingCustomer) {
      setCustomer(existingCustomer);
    }
  }, [email, customers]);

  const handleUpdate = () => {
    dispatch(updateCustomer(customer));
    navigate('/'); // Redirect to the customers list after update
  };

  return (
    <div>
      <h3>Customer Update</h3>
      <input
        value={customer.firstName}
        onChange={e => setCustomer({ ...customer, firstName: e.target.value })}
        placeholder="First Name"
      />
      <input
        value={customer.lastName}
        onChange={e => setCustomer({ ...customer, lastName: e.target.value })}
        placeholder="Last Name"
      />
      <input
        value={customer.email}
        disabled // Email is not editable
        placeholder="Email"
      />
      <input
        value={customer.contactNumber}
        onChange={e => setCustomer({ ...customer, contactNumber: e.target.value })}
        placeholder="Contact Number"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default CustomerUpdate;
