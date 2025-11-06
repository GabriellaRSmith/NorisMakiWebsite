// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/HomePage.js';
import Merchandise from './pages/MerchandisePage.js';
import Tickets from './pages/TicketsPage.js';
import Cart from './pages/CartPage.js';
import Login from './pages/LoginPage.js';

function AppWrapper() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login'; // hide header on login page if desired

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
