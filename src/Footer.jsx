import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  const whatsappNumber = "+573178045781";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-blue-600 text-white p-6 text-center">
      {/* Contenido centrado */}
      <div className="mb-6">
        <p className="mb-4">
          &copy; 2024 Ansiedad Académica. Todos los derechos reservados.
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaFacebookF
              className="text-white hover:text-blue-400 transition duration-300"
              size={30}
            />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="text-white hover:text-black transition duration-300 text-3xl">
              X
            </span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaInstagram
              className="text-white hover:text-pink-500 transition duration-300"
              size={30}
            />
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

      {/* Créditos del proyecto a lo largo */}
      <div className="bg-blue-700 text-white py-4">
        <div className="max-w-full mx-auto text-center px-6">
          <p className="font-semibold mb-2">Proyecto Desarrollado por:</p>
          <p className="flex flex-wrap justify-center gap-6">
            <span>Supervisado por www.Codevistax.com- Oscar López Restrepo</span>
            <span>Mariana Ayala Dávalos</span>
            <span>Mariana García Arévalo</span>
            <span>Valentina Lozano Rengifo</span>
            <span>
              María Alejandra Borja Dagua, Grado 11-2, Comfandi Lago Tuluá
            </span>
          </p>
        </div>
      </div>

      {/* Icono de WhatsApp flotante */}
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
