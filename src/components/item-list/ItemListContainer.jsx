import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { getItems } from '../../firebase/db';

function ItemListContainer({ message }) {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getItems()
            .then(data => {
                const filtered = categoryId
                    ? data.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase())
                    : data;

                setProductos(filtered);
                setLoading(false);
            })
            .catch(err => {
                setError("Error al cargar productos");
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div className='itemContainer'>
            <h1>{categoryId ? `Productos en ${categoryId}` : message || 'Todos los productos'}</h1>
            {loading && <p>Cargando productos...</p>}
            {!loading && error && <p className="errorMsg">{error}</p>}
            {!loading && !error && productos.length === 0 && <p>No hay productos disponibles, Vuelva más tarde</p>}
            {!loading && !error && <ItemList productos={productos} />}
        </div>
    );
}

export default ItemListContainer;
