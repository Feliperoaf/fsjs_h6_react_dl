import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaApiContext } from "../store/ApiContext";
import { formatCLP } from "../utils/formatCLP";

const Pizza = () => {
  const { id } = useParams();
  const { data } = useContext(PizzaApiContext);
  const pizza = data?.find((p) => p.id === id);
  
  return !pizza ? (
    <p>Cargando...</p>
  ) : (
    <div className="max-w-5/6 mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow m-8">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
        </h2>

        <p className="text-lg font-semibold text-green-600 mb-2">
          ${formatCLP(pizza.price)}
        </p>

        <p className="text-sm text-gray-600 mb-3">{pizza.desc}</p>

        <ul className="text-sm text-gray-700 space-y-1">
          {pizza.ingredients.map((ing) => (
            <li key={ing} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span>{ing}</span>
            </li>
          ))}
        </ul>
        <button
          className="w-full bg-black/88 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors
          mt-5"
        >
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Pizza;
