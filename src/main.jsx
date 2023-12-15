import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './styles/main.scss';
import { CategoriesProvider } from './context/categories.context.jsx';
import {UserProvider} from './context/user.context';
import { CartProvider } from './context/cart.context.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
    <App />
    </CartProvider>
    </CategoriesProvider>
    </UserProvider>
   
  </React.StrictMode>,
)
