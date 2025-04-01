import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list/ItemListContainer';
import ItemDetailContainer from './components/item-detail/ItemDetailContainer';
import Cart from './components/carrito/CartWidget';
import NotFound from './components/notfound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer /*message="Bienvenido a nuestra tienda"*/ />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
                <Route path="/producto/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

