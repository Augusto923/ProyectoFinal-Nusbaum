import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import CartItem from './Cartitem.jsx';

function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="checkout-button" style={{ textDecoration: 'none' }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button className="clear-cart-button" onClick={clearCart}>Vaciar Carrito</button>
      </div>

      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeItem={removeItem} />
        ))}
      </div>

      <div className="cart-summary">
        <p><strong>Total a pagar:</strong> ${totalPrice().toFixed(2)}</p>
        <Link to="/checkout" className="checkout-button" style={{ textDecoration: 'none' }}>
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}

export default Cart;
