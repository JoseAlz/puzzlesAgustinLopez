import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/Navbar";
import HomePage from "./pages/Home"
import DetailPage from "./pages/Detail"
import ContactoPage from "./pages/Contacto"

import {CartProvider} from "./context/CartContext"



ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category/" element={<HomePage />} />
          <Route path="/:category/:id" element={<DetailPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path="*" element={<ContactoPage />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


