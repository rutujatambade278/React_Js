
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Component/Routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';
import LikesCounter from './Component/CustomeHook/LikesCounter';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
        <LikesCounter></LikesCounter>
      </Router>
    </Provider>
  );
};

export default App;
