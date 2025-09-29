# Pizzería Mamma Mía — Hito 6 🍕

**Aplicación de pizzería desarrollada con React** que implementa Context API para la gestión global del estado, navegación SPA con React Router y consumo de APIs REST.

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+
- npm o yarn

### Comandos
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build
```

### API Backend
Este proyecto consume una API REST que debe ejecutarse en `http://localhost:3000`:
- `GET /api/pizzas` - Lista completa de pizzas
- `GET /api/pizzas/:id` - Detalle de pizza específica

## ✨ Características Principales

### 🎯 Context API (Hito 6)
- **CartContext:** Gestión global del carrito de compras
- **ApiContext:** Manejo centralizado de datos desde API
- **Estado compartido:** Sin prop drilling entre componentes

### 🗂️ Navegación SPA
- **React Router:** Sistema completo de rutas
- Páginas: Home, Login, Register, Pizza, Cart, Profile, 404

### 🛒 Carrito de Compras
- Agregar/quitar pizzas
- Incrementar/decrementar cantidades
- Cálculo automático del total

## 🛠️ Tecnologías

- **React** 19.1.1
- **React Router DOM** 6.30.1
- **Context API**
- **Tailwind CSS** 4.1.11
- **Vite** 7.1.2

## 📁 Estructura

```
src/
├── componentes/     # Componentes reutilizables
├── pages/          # Páginas principales
├── store/          # Context providers
└── utils/          # Utilidades
```

## 🎨 Funcionalidades

- **Home:** Catálogo de pizzas con carrito
- **Pizza:** Vista detallada individual  
- **Cart:** Gestión completa del carrito
- **Login/Register:** Autenticación
- **Profile:** Información del usuario
- **404:** Página de error personalizada
