import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <nav className="bg-white p-4 shadow rounded">
      <h3 className="text-lg font-semibold mb-2 text-purple-900">Contenido</h3>
      <ul className="space-y-2">
        <li>
          <Link
            to="/estrategias-apoyo"
            className="text-purple-600 hover:underline hover:text-purple-800"
          >
            Estrategias de apoyo
          </Link>
        </li>
        <li>
          <Link
            to="/escucha-activa"
            className="text-purple-600 hover:underline hover:text-purple-800"
          >
            Escucha Activa
          </Link>
        </li>
        <li>
          <Link
            to="/aprendizaje-control-emociones"
            className="text-purple-600 hover:underline hover:text-purple-800"
          >
            Aprendizaje y control de Emociones
          </Link>
        </li>
        <li>
          <Link
            to="/reflexiones"
            className="text-purple-600 hover:underline hover:text-purple-800"
          >
            Reflexiones
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SubMenu;
