import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const CustomerDetail = () => {
  const { id } = useParams();
  const customer = useSelector((state) =>
    state.customer.customers.find((c) => c.id === parseInt(id))
  );

  if (!customer) {
    return <h2>Customer not found</h2>;
  }

  return (
    <Card style={{ width: '40rem', margin: '20px auto', padding: '20px' }}>
      <Card.Body>
        <Card.Title>Customer Details</Card.Title>
        <Card.Text>
          <strong>First Name:</strong> {customer.firstName}
        </Card.Text>
        <Card.Text>
          <strong>Last Name:</strong> {customer.lastName}
        </Card.Text>
        <Card.Text>
          <strong>Email:</strong> {customer.email}
        </Card.Text>
        <Card.Text>
          <strong>Contact Number:</strong> {customer.contactnumber}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomerDetail;
