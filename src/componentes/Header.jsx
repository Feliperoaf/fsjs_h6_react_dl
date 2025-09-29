const Header = () => {
  return (
    <header
      className="relative h-64 bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('src/assets/Header.jpg')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80"> </div>

      {/* Contenido centrado */}
      <div className="relative text-center px-4">
        <h1 className="text-3xl font-bold mb-2">¡Pizzería Mamma Mia!</h1>
        <p className="text-lg mb-4">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
        <hr className="w-3/4 mx-auto border-gray-300" />
      </div>
    </header>
  );
};

export default Header;
