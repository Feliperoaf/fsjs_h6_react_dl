import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza";
import { useContext } from "react";
import { PizzaApiContext } from "../store/ApiContext";

const Home = () => {
  const { data } = useContext(PizzaApiContext)
  return (
    <div>
      <Header />
      <section className="mx-auto  max-w-6xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {(data ?? []).length === 0 ? (
        <p className="px-4 py-8">Cargando…</p>
        ) : (
        data.map(pizza => <CardPizza key={pizza.id} pizza={pizza} />)
      )}
      </section>
    </div>
  );
};



export default Home;
