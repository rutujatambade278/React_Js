import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../Redux/CreateAction';

const CustomerInsert = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactnumber: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer(formData)); // Dispatch action to add a customer
  };

  return (
    <div>
      <h2>Insert Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" onChange={e => setFormData({...formData, firstName: e.target.value})} />
        <input type="text" placeholder="Last Name" onChange={e => setFormData({...formData, lastName: e.target.value})} />
        <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} />
        <input type="text" placeholder="Contact Number" onChange={e => setFormData({...formData, contactnumber: e.target.value})} />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerInsert;
