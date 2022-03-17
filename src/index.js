import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from "./components/NavBar/Navbar";
import BoxItem from "./components/productos/ItemListContainer"





ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <BoxItem/>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
