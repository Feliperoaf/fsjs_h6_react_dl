import ElementoCarro from "../componentes/ElementoCarro";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Cart = () => {
  const {cart, inc, dec, total} = useContext(CartContext)
  return (
    <div className="max-w-5/6 mx-auto m-10">
      <p className="font-bold text-2xl text-left">Detalles del Pedido:</p>
      {cart.map((item) => (
        <ElementoCarro key={item.id} item={item} onInc={inc} onDec={dec} />
      ))}

      <p className="font-bold text-2xl text-left">Total: ${total}</p>
    </div>
  );
};

export default Cart;
