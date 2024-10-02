import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { CustomerStore } from './Componet/Redux/CustomerStore.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={CustomerStore}>
   <App />
  </Provider>
 ,
)
