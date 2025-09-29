# Pizzería Mamma Mía — Hito 5 🍕

**Entrega del Hito 5:** React Router - Navegación SPA.

Evolución del proyecto desde el Hito 4, ahora implementando React Router para crear una Single Page Application (SPA) con navegación entre diferentes vistas sin recargar la página. Se mantienen las funcionalidades de consumo de APIs del hito anterior y se agrega un sistema completo de rutas.

---

## ✨ Funcionalidades Nuevas (Hito 5)

### 🗂️ React Router Implementation
- **BrowserRouter:** Implementación completa de React Router para navegación SPA
- **Rutas definidas:** Sistema de rutas para todas las páginas de la aplicación:
  - `/` - Página principal (Home)
  - `/register` - Formulario de registro
  - `/login` - Formulario de inicio de sesión
  - `/pizza` - Página de detalle de pizza
  - `/cart` - Carrito de compras
  - `/profile` - Perfil de usuario
  - `/*` - Página 404 (NotFound)
- **Navegación fluida:** Transiciones entre páginas sin recarga del navegador
- **Componente NotFound:** Página 404 personalizada para rutas no encontradas
- **Componente Profile:** Nueva página de perfil de usuario

### 🔄 Migración desde Hito 4
- **Mantenimiento de funcionalidades:** Todas las características del Hito 4 se preservaron
- **Refactorización de navegación:** Se reemplazó la navegación tradicional por React Router
- **Estructura mejorada:** Mejor organización de componentes y páginas

## ✨ Funcionalidades del Hito 4 (Mantenidas)
- **Consumo de APIs:** Las pizzas se obtienen desde una API REST (`http://localhost:5000/api/pizzas`) usando `useEffect` y `useState`.
- **Página de detalle Pizza:** Página `Pizza.jsx` que muestra información detallada de una pizza específica consumiendo desde `http://localhost:5000/api/pizzas/p001`.
- **Estados de carga:** Implementación de estados de "Cargando..." mientras se obtienen los datos de la API.
- **Manejo de errores:** Try-catch para gestionar errores en las llamadas a la API.
- **Renderización condicional:** Los componentes se renderizan condicionalmente basándose en si los datos han sido cargados.

## ✨ Funcionalidades Previas (Hito 3)
- **Carrito de compras funcional:** Componente `PizzaCart` que muestra los productos seleccionados con imagen, nombre, precio y cantidad.
- **Gestión de cantidades:** Botones para incrementar (+) y decrementar (-) la cantidad de cada pizza en el carrito.
- **Eliminación automática:** Los productos se eliminan del carrito cuando la cantidad llega a 0.
- **Cálculo del total:** El total se calcula automáticamente sumando precio × cantidad de todos los productos.
- **Componente ElementoCarro:** Elemento reutilizable para mostrar cada item del carrito con sus controles.

---

## 🔧 Aspectos Técnicos

### Dependencias Principales
- **React:** ^19.1.1
- **React DOM:** ^19.1.1
- **React Router DOM:** ^6.30.1
- **Tailwind CSS:** ^4.1.11
- **Vite:** ^7.1.2

### Hooks Utilizados
- **useState:** Para manejar el estado de los datos de pizzas y estados de carga
- **useEffect:** Para realizar llamadas a la API al montar los componentes

### Estructura del Proyecto
```
src/
├── componentes/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── NotFound.jsx
│   └── Profile.jsx
├── pages/
│   ├── Home.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   ├── Pizza.jsx
│   └── PizzaCart.jsx
└── App.jsx
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

### API Backend
Este proyecto requiere una API backend ejecutándose en `http://localhost:5000` con los siguientes endpoints:
- `GET /api/pizzas` - Lista de todas las pizzas
- `GET /api/pizzas/:id` - Detalle de pizza específica

---

## 📋 Comparación Hito 4 vs Hito 5

| Característica | Hito 4 | Hito 5 |
|---|---|---|
| **Navegación** | Links tradicionales | React Router SPA |
| **Rutas** | ❌ No implementadas | ✅ Sistema completo de rutas |
| **URLs dinámicas** | ❌ Una sola página | ✅ URLs específicas para cada vista |
| **404 Page** | ❌ No existe | ✅ Componente NotFound |
| **Profile Page** | ❌ No implementado | ✅ Componente Profile |
| **Experiencia de usuario** | Recarga de página | Navegación fluida sin recarga |
| **Consumo de APIs** | ✅ Implementado | ✅ Mantenido |
| **Carrito funcional** | ✅ Implementado | ✅ Mantenido |

---
