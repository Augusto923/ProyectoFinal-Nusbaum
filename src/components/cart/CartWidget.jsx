import React from "react";
import Cart from "../../assets/carrito-icon.png";
import './CartWidget.css';

function CartWidget() {
    return (
        <div className="cartContainer">
            <img src={Cart} alt="Carrito de compra" title="Carrito de compra" className='carrito-icon'/>
            <span className="cart-counter">3</span>
        </div>
    );
}

export default CartWidget;
