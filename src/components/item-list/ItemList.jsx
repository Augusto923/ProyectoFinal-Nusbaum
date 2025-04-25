import React from 'react';
import Item from './Item';
import './ItemListContainer.css';


const ItemList = ({ productos }) => (
    <div className="productGrid">
        {productos.map(product => (
            <Item key={product.id} product={product} />
        ))}
    </div>
);

export default ItemList;
