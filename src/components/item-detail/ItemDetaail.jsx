import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetailContainer.css';

const ItemDetail = ({
  product,
  quantity,
  setQuantity,
  handleAddToCart,
  selectedImage,
  setSelectedImage,
  added
}) => {
  return (
    <div className="productDetail">
      <div className="imageGallery">
        <img src={selectedImage} alt={product.title} className="productImage" />
        <div className="thumbnailList">
          <img
            src={product.thumbnail}
            alt="thumb-main"
            className={selectedImage === product.thumbnail ? 'selected' : ''}
            onClick={() => setSelectedImage(product.thumbnail)}
          />
          {product.images
            .filter(img => img !== product.thumbnail)
            .slice(1, 3)
            .map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={selectedImage === img ? 'selected' : ''}
                onClick={() => setSelectedImage(img)}
              />
            ))}
        </div>
      </div>

      <div className="productInfo">
        <h1>{product.title}</h1>
        <p className="productDescription">{product.description}</p>
        <p className="productCategory"><strong>Categoría:</strong> {product.category}</p>

        <div className="priceSection">
          <span className="discountedPrice">${product.price}</span>
          <span className="originalPrice">${Math.round(product.price * 1.6)}</span>
          <span className="discountPercentage">Con 45% Descuento</span>
        </div>

        <div className="purchaseInfo">
          <h4>Beneficios de tu compra:</h4>
          <ul>
            <li>Realizá pagos fáciles y seguros con múltiples métodos.</li>
            <li>Recibí tu producto en menos de 48hs en todo el país.</li>
            <li>Podés devolver tu compra sin cargo dentro de los 30 días.</li>
            <li>Soporte al cliente 24/7 ante cualquier inconveniente.</li>
          </ul>
        </div>

        {!added ? (
          <ItemCount
            quantity={quantity}
            setQuantity={setQuantity}
            onAdd={handleAddToCart}
          />
        ) : (
          <p className="successMsg">✅ Producto agregado al carrito</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
