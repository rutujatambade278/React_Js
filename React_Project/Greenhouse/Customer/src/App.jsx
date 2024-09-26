import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationEx from './Components/NavigationEx';
import { Approutes } from './Components/route/Approutes';
import { BrowserRouter } from 'react-router-dom';
import CustomerContainer from './Components/CustomerContainer';

function App() {
   return (
    <>
     <NavigationEx></NavigationEx>
    <CustomerContainer></CustomerContainer>
    
    <BrowserRouter>
      <Approutes/>
    </BrowserRouter>
    </>
  )
}

export default App
