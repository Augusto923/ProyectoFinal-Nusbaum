import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetaail.jsx';
import './ItemDetailContainer.css';
import { getItemById } from '../../firebase/db';
import { useCart } from '../../context/CartContext';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setProduct(null);
    setError(null);
    setAdded(false);

    getItemById(id)
      .then(data => {
        setProduct(data);
        setSelectedImage(data.thumbnail);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div className="productDetailContainer">
      {error && <p className="errorMsg">{error}</p>}
      {!product && !error && <p className="loadingText">Cargando productos...</p>}

      {product && (
        <ItemDetail
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddToCart={handleAddToCart}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          added={added}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
