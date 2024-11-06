import { Link } from "react-router-dom";
import logo from "/images/Logo_Proyecto.png";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo de Ansiedad Académica"
          className="h-20 transition duration-300 ease-in-out transform hover:scale-110" 
        />
        <span className=" py-2 pe-4 text-sm sm:text-xl italic">Podemos vencer a la mente!</span>
      </Link>
      <div className="flex space-x-2">
        {" "}
        
        <Link to="/" className="px-1 py-2 text-white hover:bg-blue-700 rounded">
          Inicio
        </Link>
        <Link
          to="/informacion"
          className="px-1 py-2 text-white hover:bg-blue-700 rounded"
        >
          Información
        </Link>
        <Link
          to="/resources"
          className="px-1 py-2 text-white hover:bg-blue-700 rounded"
        >
          Recursos
        </Link>
        <Link
          to="/contacto"
          className="px-1 py-2 text-white hover:bg-blue-700 rounded"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
