import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/Navbar";
import HomePage from "./pages/Home"
import DetailPage from "./pages/Detail"
import ContactoPage from "./pages/Contacto"




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/:category/" element={<HomePage/>} />
    <Route path="/:category/:id" element={<DetailPage />} />
    <Route path='/contacto' element={<ContactoPage/>} />
    <Route path="*" element={<ContactoPage/>} />

    </Routes>
    
    
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);


