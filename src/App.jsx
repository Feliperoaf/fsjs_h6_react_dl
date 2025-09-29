import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import Navbar from "./componentes/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PizzaCart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound from "./componentes/NotFound";
import Profile from "./componentes/Profile";
import PizzaApiProvider from "./store/ApiContext";
import CartProvider from "./store/CartContext";

function App() {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <PizzaApiProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/cart" element={<PizzaCart />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </CartProvider>
        </PizzaApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
