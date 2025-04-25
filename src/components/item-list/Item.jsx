import React from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';


const Item = ({ product }) => (
    <div className="productCard">
        <img src={product.thumbnail} alt={product.title} className="productImage" />
        <h3 className="productTitle">{product.title}</h3>
        <p className="productDescription">{product.description.slice(0, 70)}...</p>
        <Link to={`/producto/${product.id}`} className="viewMore">Más información</Link>
    </div>
);

export default Item;
