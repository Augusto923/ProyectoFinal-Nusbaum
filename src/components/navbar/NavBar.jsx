import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../carrito/CartWidget';
import logo from '../../assets/logo.png';
import './NavBar.css';

function NavBar() {

    const [categories] = useState(["Smartphones", "Laptops", "Fragrances", "Skincare"]);

    return (
        <nav className='header'>
            <div className='logo'>
                <Link to="/"><img src={logo} alt="Logo de la página"/></Link>
            </div>

            <div className='navContainer'>
                <ul className='menu'>
                    {categories.map(cat => (
                        <li key={cat}>
                            <Link to={`/categoria/${cat}`} title={`Ver productos de ${cat}`} className='Categoria'>{cat}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="cartContainer">
                <Link to="/carrito"><CartWidget /></Link>
            </div>
        </nav>
    );
}

export default NavBar;