import React from 'react';
import './CartWidget.css';

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cartItem">
      <img src={item.thumbnail} alt={item.title} className="cartItemImage" />

      <div className="cartItemDetails">
        <h4>{item.title}</h4>
        <p>Precio unitario: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>

      {removeItem && (
        <button onClick={() => removeItem(item.id)} className="removeBtn">
          ❌
        </button>
      )}
    </div>
  );
};

export default CartItem;
