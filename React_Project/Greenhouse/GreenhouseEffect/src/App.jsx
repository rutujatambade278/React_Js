import { useState } from 'react'

import CartContainer from './components/CartContainer'
import CustomerContext from './context/CustomerContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CartContainer></CartContainer>
     <CustomerContext></CustomerContext>
    </>
  )
}

export default App
