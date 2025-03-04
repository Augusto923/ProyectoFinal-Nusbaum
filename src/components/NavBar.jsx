import React from 'react';
import CartWidget from './CartWidget.jsx';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav className='header'>

            <div className='logo'>
                <img src={logo} alt="Logo de la página"/>
            </div>

            <div className='navContainer'>
                <ul className='menu'>
                    <li><a href="#" className='Categoria'>Categoria 1</a></li>
                    <li><a href="#" className='Categoria'>Categoria 2</a></li>
                    <li><a href="#" className='Categoria'>Categoria 3</a></li>
                    <li><a href="#" className='Categoria'>Categoria 4</a></li>
                    <li><a href="#" className='Categoria'>Categoria 5</a></li>
                </ul>
            </div>

            <div className="cartContainer">
                <a href="#"><CartWidget /></a>
            </div>

        </nav>
    );
}

export default NavBar;
