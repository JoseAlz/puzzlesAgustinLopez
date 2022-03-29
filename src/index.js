import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/Navbar";
import HomePage from "./pages/Home"





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage/>} />

    </Routes>
    
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


