import { Link } from "react-router-dom";
import logo from "/images/Logo_Proyecto.png";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center p-2">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo de Ansiedad Académica"
          className=" h-10 w-14 pe-2 md:h-16 transition duration-300 ease-in-out transform hover:scale-110"
        />
        <span className="text-xs sm:text-lg md:text-xl italic">
          Podemos vencer a la mente!
        </span>
      </Link>
      <div className="flex space-x-4 md:space-x-6 px-2 md:px-2">
        <Link
          to="/"
          className=" py-2 text-white hover:bg-blue-700 rounded text-xs sm:text-base md:text-lg"
        >
          Inicio
        </Link>
        <Link
          to="/informacion"
          className=" py-2 text-white hover:bg-blue-700 rounded text-xs sm:text-base md:text-lg"
        >
          Información
        </Link>
        <Link
          to="/resources"
          className=" py-2 text-white hover:bg-blue-700 rounded text-xs sm:text-base md:text-lg"
        >
          Recursos
        </Link>
        <Link
          to="/contacto"
          className=" py-2 text-white hover:bg-blue-700 rounded text-xs sm:text-base md:text-lg"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
