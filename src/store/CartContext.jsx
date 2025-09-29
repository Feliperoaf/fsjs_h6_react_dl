import { createContext, useState} from 'react'

const CartContext = createContext()

export default function CartProvider( {children} ) {
    const [cart, setCart] = useState([]);

function addToCart(pizza) {
  if (!pizza) return;

  setCart(prev => {
    const existing = prev.find(item => item.id === pizza.id);

    if (existing) {
      return prev.map(item =>
        item.id === pizza.id ? { ...item, qty: item.qty + 1 } : item
      );
    }

    return [...prev, { ...pizza, qty: 1 }];
  });
}

  function inc(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function dec(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  const total = cart.reduce((acc, it) => acc + it.price * it.qty, 0);

  const CartFunctions = {addToCart, cart, setCart, total, inc, dec}


  return (
    <CartContext.Provider value={CartFunctions}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext}