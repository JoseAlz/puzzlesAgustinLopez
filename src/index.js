import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar/Navbar";
import HomePage from "./pages/Home"
import DetailPage from "./pages/Detail"
import ContactoPage from "./pages/Contacto"
import CartPage from "./pages/Carrito"
import { CartProvider } from "./context/CartContext"
import { ItemProvider } from './context/ItemContext';
import Footer from "./components/Footer/Footer"
import ProductListPage from "./pages/ProductList"
import NotPageFound from "./pages/NotPageFound"
import Instrucciones from "./pages/InstruccionesCompra"
import LoginAdmin from "./pages/admin/LoginAdmin"
import HomeAdmin from "./pages/admin/HomeAdmin"


ReactDOM.render(
  <React.StrictMode>
    <ItemProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/error-404' element={<NotPageFound />} />
            <Route path="/:category" element={<ProductListPage />} />
            <Route path="/:category/:id" element={<DetailPage />} />
            <Route path='/contacto' element={<ContactoPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="/faq" element={<Instrucciones />} />
            <Route path="/admin" element={<LoginAdmin/>} />
            <Route path="/panel-admin" element={<HomeAdmin/>}/>

          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ItemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


