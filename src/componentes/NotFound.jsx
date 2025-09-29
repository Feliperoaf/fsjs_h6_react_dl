import React from "react";
import { Link } from "react-router-dom";
import pizzaEmpty from "../assets/Caja de pizza vacía.jpg";

const NotFound = () => {
  return (
    <div className="h-dvh flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <img 
        src={pizzaEmpty} 
        alt="Caja de pizza vacía" 
        className="w-64 mb-6 shadow-lg rounded-xl"
      />
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - ¡Oops! Página no encontrada
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Parece que te quedaste sin pizza... pero siempre puedes volver al inicio 🍕
      </p>
      <Link 
        to="/" 
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md transition"
      >
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;