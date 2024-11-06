import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <nav className="bg-white p-4 shadow rounded">
      <h3 className="text-lg font-semibold mb-2">Contenido</h3>
      <ul className="space-y-2">
        <li>
          <Link
            to="/estrategias-apoyo"
            className="text-blue-600 hover:underline"
          >
            Estrategias de apoyo
          </Link>
        </li>
        <li>
          <Link to="/escucha-activa" className="text-blue-600 hover:underline">
            Escucha Activa
          </Link>
        </li>
        <li>
          <Link
            to="/aprendizaje-control-emociones"
            className="text-blue-600 hover:underline"
          >
            Aprendizaje y control de Emociones
          </Link>
        </li>
        <li>
          <Link to="/reflexiones" className="text-blue-600 hover:underline">
            Reflexiones
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SubMenu;
