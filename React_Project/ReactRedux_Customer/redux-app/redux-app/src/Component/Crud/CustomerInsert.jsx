import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../redux/CustomerAction';
import { Card, Form, Button } from 'react-bootstrap';

const CustomerInsert = () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({ firstName: '', lastName: '', email: '', contactnumber: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = { ...customer, id: Date.now() };
    dispatch(addCustomer(newCustomer));
    navigate('/');
  };

  return (
    <Card style={{ width: '40rem', margin: '20px auto', padding: '20px' }}>
      <Card.Body>
        <Card.Title>Insert New Customer</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              name="firstName" 
              value={customer.firstName} 
              onChange={handleChange} 
              placeholder="Enter first name" 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              name="lastName" 
              value={customer.lastName} 
              onChange={handleChange} 
              placeholder="Enter last name" 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={customer.email} 
              onChange={handleChange} 
              placeholder="Enter email" 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control 
              type="text" 
              name="contactnumber" 
              value={customer.contactnumber} 
              onChange={handleChange} 
              placeholder="Enter contact number" 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Insert
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CustomerInsert;
