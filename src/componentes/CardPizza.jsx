import { formatCLP } from "../utils/formatCLP";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";


const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext)
  const { name, price, img, desc } = pizza;
  return (
    <div className="border border-gray-400 rounded-lg">
      <img className="w-full object-cover rounded-t-lg" src={img} alt={name} />
      <div>
        <h3 className="flex pl-6 pt-3.5 text-lg font-bold">
          {" "}
          {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
        </h3>
        <p className="text-sm text-left m-6 text-gray-700 font-light">{desc}</p>

        <div className="border-y border-gray-400 overflow-hidden block py-3">
          <p className="font-light pb-2">🍕 Ingredientes:</p>
          <ul className="text-sm text-gray-700 ">
            {pizza.ingredients.map((ing) => {
              return (
                <li key={ing} className="list-disc">
                  {ing}
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-lg font-bold block py-3">
          Precio: ${formatCLP(price)}
        </p>
        <div className="flex justify-evenly pb-5">
          <Link to={`/pizza/${pizza.id}`}>
          <button className="border border-black px-5 rounded-lg py-1 cursor-pointer">
            Ver más 👀{" "}
          </button>
          </Link>
          <button
            onClick={() => addToCart(pizza)}
            className="bg-black text-white px-5 py-1 rounded-lg cursor-pointer"
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
