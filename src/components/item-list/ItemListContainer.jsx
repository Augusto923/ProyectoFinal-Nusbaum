import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { SpinnerCircularSplit } from 'spinners-react';


function ItemListContainer({ message }) {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        let url = categoryId 
            ? `https://dummyjson.com/products/category/${categoryId}`
            : 'https://dummyjson.com/products';

            fetch(url)
                .then(res => {
                    if (!res.ok) throw new Error(`Error ${res.status}: No se encontraron productos`);
                    return res.json();
                })
                .then(data => {
                    setProductos(data.products || []);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
    }, [categoryId]);

    return (
        <div className='itemContainer'>
            <h1>{categoryId ? `Productos en ${categoryId}` : message}</h1>
            {loading && <SpinnerCircularSplit size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />}
            {error && <p>Error: {error}</p>}
            {!loading && !error && productos.length === 0 && <p>No hay productos disponibles</p>}
            
            <div className="productGrid">
                {productos.map(product => (
                    <div key={product.id} className="productCard">
                        <img src={product.thumbnail} alt={product.title} className="productImage" />
                        <h3 className="productTitle">{product.title}</h3>
                        <p className="productDescription">{product.description.slice(0, 70)}...</p>
                        <Link to={`/producto/${product.id}`} className="viewMore">Ver Detalles</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
