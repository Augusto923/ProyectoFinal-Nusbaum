import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list/ItemListContainer';
import ItemDetailContainer from './components/item-detail/ItemDetailContainer';
import Cart from './components/cart/Cart.jsx';
import NotFound from './components/not-found/NotFound.jsx';
import './style/App.css';
import { CartProvider } from './context/CartContext';
import CheckoutForm from './components/checkout/CheckoutForm';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
