import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { db } from '../../firebase/db';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.telefono) {
      alert('Por favor completá todos los campos');
      return;
    }

    setLoading(true);

    const order = {
      buyer: { ...form },
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al generar la orden:', error);
      alert('Error al procesar la orden. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="order-confirmation fancy-confirmation">
        <h2>Gracias por tu compra!!</h2>
        <p>Tu pedido fue generado exitosamente</p>
        <p>
          ID de orden: <strong>{orderId}</strong>
        </p>
        <div className="emoji-cart">🛒</div>
      </div>
    );
  }

  return (
    <div className="checkout-wrapper">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Finalizar Compra</h2>

        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input type="text" name="telefono" value={form.telefono} onChange={handleChange} />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>

      <div className="checkout-summary">
        <h3>Tu pedido</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.title} x{item.quantity}</span>
              <span>
                {(item.price * item.quantity).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </span>
            </li>
          ))}
        </ul>
        <div className="total">
          Total:{' '}
          {totalPrice().toLocaleString('es-AR', {
            style: 'currency',
            currency: 'USD'
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
