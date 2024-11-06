import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  const whatsappNumber = "+573178045781";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-purple-600 text-white p-6 text-center">
      {/* Contenido centrado */}
      <div className="mb-6">
        <p className="mb-4">
          &copy; 2024 Ansiedad Académica. Todos los derechos reservados.
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          {/* Icono de Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            <FaFacebookF size={24} />
          </a>

          {/* Icono de X */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-black hover:text-white transition duration-300"
          >
            <span className="font-semibold text-xl">X</span>
          </a>

          {/* Icono de Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:text-white transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="mt-4">
          <Link to="/privacidad" className="text-white hover:underline mx-2">
            Política de Privacidad
          </Link>
          <Link to="/terminos" className="text-white hover:underline mx-2">
            Términos de Servicio
          </Link>
        </div>
      </div>

      <div className="bg-purple-700 text-white py-4">
        <div className="max-w-full mx-auto text-center px-6">
          <p className="font-semibold mb-2">Proyecto Desarrollado por:</p>
          <p className="flex flex-wrap justify-center gap-6">
            <span>
              Supervisado por www.Codevistax.com - Oscar López Restrepo
            </span>
            <span>Mariana Ayala Dávalos</span>
            <span>Mariana García Arévalo</span>
            <span>Valentina Lozano Rengifo</span>
            <span>
              María Alejandra Borja Dagua, Grado 11-2, Comfandi Lago Tuluá
            </span>
          </p>
        </div>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:scale-110 animate-pulse"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
}

export default Footer;
