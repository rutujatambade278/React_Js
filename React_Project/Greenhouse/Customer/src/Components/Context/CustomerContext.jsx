import React, { createContext, useState } from 'react';

// Step 1: Create context at application level
const CustomerContext = createContext();

// Step 2: Define Provider
export function CustomerProvider({ children }) {
  // Step 3: Define global State
  const [customers, setCustomers] = useState([]);

  // Step 4: Define actions

  // Add customer
  const addCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  // Remove customer
  const removeCustomer = (customerId) => {
    setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== customerId));
  };

  // Update customer
  const updateCustomer = (updatedCustomer) => {
    setCustomers((prevCustomers) => 
      prevCustomers.map((customer) => 
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  // Middleware
  return (
    <CustomerContext.Provider value={{ customers, addCustomer, removeCustomer, updateCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;
