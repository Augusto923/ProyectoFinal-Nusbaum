import React from 'react';
import './ItemDetailContainer.css';

const ItemCount = ({ quantity, setQuantity, onAdd }) => (
    <div>
      <div className="quantitySelector">
        <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
      </div>
      <button className="addToCartButton" onClick={onAdd}>
        Añadir al Carrito
      </button>
    </div>
  );
  
export default ItemCount;
