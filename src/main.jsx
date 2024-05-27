import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.js"
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* BrowserRouter wraps all the routes and 
provides the routing functionality to the application */}
    <BrowserRouter>
    {/* Provider is a React component provided by React Redux. 
    It wraps your entire React application.*/}
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
