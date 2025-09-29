import { createContext, useState, useEffect } from "react"

const PizzaApiContext = createContext()

export default function PizzaApiProvider({ children }) {
   const [data, setData] = useState(null);

  const apiPizza = async () => {
    try {
      const url = await fetch("http://localhost:3000/api/pizzas/");
      const pizza = await url.json();
      setData(pizza);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    apiPizza();
  }, []);

  return (
    <PizzaApiContext.Provider value={{data}}>
      {children}
    </PizzaApiContext.Provider>
  )
}

export {PizzaApiContext}