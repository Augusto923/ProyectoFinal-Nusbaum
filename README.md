
# 🛍️ E-Commerce React - Proyecto Final

Este es el proyecto final del curso de **React**, donde se desarrolla una aplicación web de tipo *E-Commerce* como **Single Page Application (SPA)**, utilizando **React** y **Firebase** como base de datos.

---

## 📦 Descripción

La aplicación permite a los usuarios:

- 🔍 Navegar por un catálogo de productos  
- 🧩 Filtrar por categorías  
- 🔎 Ver el detalle de cada producto  
- 🛒 Agregar productos al carrito con cantidad personalizada  
- 🧾 Gestionar el carrito y ver total de la compra  
- 📝 Finalizar la compra a través de un formulario validado  
- 📬 Registrar la orden en **Firebase** y recibir un ID de compra  

Todo esto en una interfaz clara, amigable y 100% funcional.

---

## 🚀 Tecnologías Utilizadas

- ⚛️ **React**  
- 🔁 **React Router DOM** (ruteo sin recarga)  
- 🛍️ **Context API** (gestión del carrito)  
- 🔥 **Firebase Firestore** (productos y órdenes)  
- 🎨 **CSS Modular** (estilos por componente)  
- ⚡ **Vite** (entorno de desarrollo rápido)

---

## 🛠️ Funcionalidades Destacadas

- ✅ SPA completa con navegación fluida  
- 🧠 Estado global del carrito con Context API  
- 🛂 Formulario de checkout con validación  
- 🗃️ Almacenamiento de órdenes en Firestore  
- 🔄 Renderizado condicional: loaders, errores, carrito vacío  
- 📱 Diseño responsive y estilado modular  
- ♻️ Componentes reutilizables y organizados  
## 📂 Estructura del Proyecto

```bash

src/
├── assets/
		├── carrito-icon.png
		├── logo.png
		
├── components/
		├── cart/
		├── checkout/
		├── item-detail/
		├── item-list/
		├── navbar/
		├── notfound/
├── context/
		├── CartContext.css
		├── CartContext.jsx
├── firebase/
		├── config.js
		├── db.js

├── styles/
		├── App.css
		
├── App.jsx

└── main.jsx