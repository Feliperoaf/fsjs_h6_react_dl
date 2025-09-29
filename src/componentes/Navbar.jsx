import { formatCLP } from "../utils/formatCLP";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const {total} = useContext(CartContext)
  const token = true;

  const navButton = "border rounded-xl m-2 px-3 py-1";

  return (
    <div className="bg-black/88 flex items-center justify-between p-2  ">
      <div className="flex items-center text-white">
        <Link to="/" className="flex items-center mr-3 ml-4 font-bold">
          Pizzería Mamma Mia!
        </Link>
        <button className={navButton}>
          <Link to="/">🍕Home</Link>
        </button>
        {token ? (
          <>
            <button className={navButton}>
              <Link to="/profile">🔓Profile</Link>
            </button>
            <button className={navButton}>🔒Logout</button>
          </>
        ) : (
          <>
            <button className={navButton}>
              <Link to="/login">🔐Login</Link>
            </button>
            <button className={navButton}>
              <Link to="/register">🔐Register</Link>
            </button>
          </>
        )}
      </div>
      <button className={`${navButton} text-cyan-500`}>
        <Link to="/cart">🛒Total: ${formatCLP(total)}</Link>
      </button>
    </div>
  );
};

export default Navbar;
