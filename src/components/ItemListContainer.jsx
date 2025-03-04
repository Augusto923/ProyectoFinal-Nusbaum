import React from 'react';
import '../styles/ItemListContainer.css';

function ItemListContainer({ message }) {
    return (
        <div className='itemContainer'>
            <h1>{message}</h1>
        </div>
    );
}

export default ItemListContainer;