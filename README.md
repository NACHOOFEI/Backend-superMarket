# Backend-superMarket
Este es un proyecto backend desarrollado en **Node.js** con **Express** y base de datos **SQLite**, pensado para gestionar productos, stock, tickets de venta y supermercados. Ideal para prácticas de CRUD, relaciones entre tablas y organización por rutas y controladores.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- SQLite3
- JavaScript
- Postman (para pruebas)

---

## 📁 Estructura del proyecto

📦 backend-supermercado/
├── controllers/ # Lógica de negocio (controladores)
├── models/ # Conexión a la base de datos
├── routes/ # Rutas agrupadas por recurso
├── database/ # Archivo de base de datos SQLite
├── .gitignore # Archivos ignorados por Git
├── index.js # Punto de entrada del servidor
├── package.json # Configuración del proyecto
└── README.md # Este archivo

---

## 📦 Funcionalidades

- 🔍 CRUD de productos
- 🏷️ Asociación de productos con su tipo y stock
- 🧾 Generación de tickets de compra
- 🧮 Cálculo de cantidad por ticket
- 🧬 Relaciones entre entidades: Producto, Stock, Supermercado, Ticket
