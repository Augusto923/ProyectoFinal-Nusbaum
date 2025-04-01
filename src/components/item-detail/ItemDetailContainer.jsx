import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setProduct(null);
        setError(null);

        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("No se pud cargar el producto");
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(err => setError(err.message));
    }, [id]);

    return (
        <div className="productDetailContainer">
            {error && <p className="errorMsg">{error}</p>}
            {product ? (
                <div className="productDetail">
                    <img src={product.thumbnail} alt={product.title} className="productImage" />
                    <div className="productInfo">
                        <h1>{product.title}</h1>
                        <p className="productDescription">{product.description}</p>
                        <p className="productCategory"><strong>Categoria:</strong> {product.category}</p>
                        <p className="productPrice"><strong>Precio:</strong> ${product.price}</p>
                        <button className="buyButton">Añadir al Carrito</button>
                    </div>
                </div>
            ) : (
                !error && <p className="loadingText">Cargando producto...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
