import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import Nav from "./components/Nav.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav></Nav>
    <App />
  </React.StrictMode>,
)