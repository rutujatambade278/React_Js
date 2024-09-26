// App.js
import React from 'react';
import { CustomerProvider } from './Context/CustomerContext';
import Customer from './Customer';
import Customerservice from './Service/customerservice';


const customers = Customerservice.getAll();

function CustomerContainer() {
  return (
    <CustomerProvider>
      <div>
        <h2>Customer List</h2>
        <table>
          <tr>
            <td>
              {
                <table>
                  <tr>
                    {
                      customers.map((customer) => (
                        <td>
                          <Customer 
                            id={customer.id} 
                            firstname={customer.firstname} 
                            lastname={customer.lastname} 
                            email={customer.email} 
                            contactnumber={customer.contactnumber} 
                          />
                        </td>
                      ))
                    }
                  </tr>
                </table>
              }
            </td>
          </tr>
        </table>
      </div>
    </CustomerProvider>
  );
}

export default CustomerContainer;
