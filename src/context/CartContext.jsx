import React, { createContext, useContext, useState } from "react";
import './CartContext.css';

/* contexto */
const CartContext = createContext();

/* Hook personalizado */
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /* Agregar item */
    const addItem = (item, quantity) => {
        const existingItem = cart.find(prod => prod.id === item.id);

        if (existingItem) {
            setCart(prevCart =>
                prevCart.map(prod =>
                    prod.id === item.id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                )
            );
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity }]);
        }
    };

    /* Eliminar item */
    const removeItem = id => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    /* Vaciar carrito */
    const clearCart = () => {
        setCart([]);
    };

    /* Precio total de unidades */
    const totalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

    /* Precio total $ a pagar */
    const totalPrice = () =>
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                totalItems,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
