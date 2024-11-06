import { Link } from "react-router-dom";
import logo from "/images/Logo_Proyecto.png";

function Navbar() {
  return (
    <nav className="bg-purple-600 text-white flex justify-between items-center px-4 py-2 md:px-8">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo de Ansiedad Académica"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-32 lg:h-24 lg:w-40 transition duration-300 ease-in-out transform hover:scale-110"
        />
        <span className="hidden sm:block text-sm md:text-lg lg:text-xl italic whitespace-nowrap">
          Podemos vencer a la mente!
        </span>
      </Link>

      <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 px-2">
        <Link
          to="/"
          className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base lg:text-lg text-white bg-purple-500 hover:bg-purple-700 rounded transition-all duration-200"
        >
          Inicio
        </Link>
        <Link
          to="/informacion"
          className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base lg:text-lg text-white bg-purple-500 hover:bg-purple-700 rounded transition-all duration-200"
        >
          Información
        </Link>
        <Link
          to="/resources"
          className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base lg:text-lg text-white bg-purple-500 hover:bg-purple-700 rounded transition-all duration-200"
        >
          Recursos
        </Link>
        <Link
          to="/contacto"
          className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base lg:text-lg text-white bg-purple-500 hover:bg-purple-700 rounded transition-all duration-200"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
