import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customers from '../CRUD/Customers';
import CustomerInsert from '../CRUD/CustomerInsert';
import CustomerDetails from '../CRUD/CustomerDetails';
import CustomerUpdate from '../CRUD/CustomerUpdate';
import CustomerDelete from '../CRUD/CustomerDelete';

const AppRoute = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Customers />}>
        <Route path="insert" element={<CustomerInsert />} />
        <Route path="details/:email" element={<CustomerDetails />} />
        <Route path="update/:email" element={<CustomerUpdate />} />
        <Route path="delete/:email" element={<CustomerDelete />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoute;
