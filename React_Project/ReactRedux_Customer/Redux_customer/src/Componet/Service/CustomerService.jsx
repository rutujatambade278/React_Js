var users = [
    { id: 1, email: 'ravi.tambade@transflower.in', password: 'seed', firstname: "Ravi", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', password: 'transflower', firstname: "Shubhangi", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', password: 'pvg', firstname: "Sanika", lastname: "Bhor", contactnumber: "9881735801" },
    { id: 4, email: 'rutuja@gmail.com', password: 'Rutuja@27', firstname: "Rutuja", lastname: "Tambade", contactnumber: "7709567424" },
    { id: 5, email: 'shreedhar.patil@gmail.com', password: 'seed', firstname: "Shreedhar", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 6, email: 'ajinkya.tambade@gmail.com', password: '123', firstname: "Ajinkya", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password: 'seed', firstname: "Kartik", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 8, email: 'mansi.nighot@gmail.com', password: 'seed', firstname: "Manasi", lastname: "Nighot", contactnumber: "9881735801" },
];

const CUSTOMER_KEY = 'customers';

export const CustomerService = {
  getCustomers: () => {
    const customers = localStorage.getItem(CUSTOMER_KEY);
    return customers ? JSON.parse(customers) : [];
  },
  
  getCustomerById: (id) => {
    const customers = CustomerService.getCustomers();
    return customers.find(customer => customer.id === id);
  },

  addCustomer: (customer) => {
    const customers = CustomerService.getCustomers();
    customers.push(customer);
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  },

  updateCustomer: (updatedCustomer) => {
    let customers = CustomerService.getCustomers();
    customers = customers.map(customer =>
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  },

  deleteCustomer: (id) => {
    let customers = CustomerService.getCustomers();
    customers = customers.filter(customer => customer.id !== id);
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  }
};
