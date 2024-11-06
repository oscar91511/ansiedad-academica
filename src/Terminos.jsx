import React from "react";

const TerminosYServicios = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Términos y Servicios</h1>

      <p className="mb-4">
        Bienvenido a nuestra página. Este sitio es un proyecto estudiantil
        creado con el objetivo de enseñar y aprender sobre la ansiedad
        académica. Todos los recursos y la información proporcionada aquí están
        destinados únicamente para fines educativos.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Uso de la Página</h2>
      <p className="mb-4">
        Este sitio es solo para uso educativo y no debe ser utilizado con fines
        comerciales o de lucro. Cualquier intento de copiar o utilizar el código
        fuente de este proyecto en otros trabajos o proyectos comerciales está
        estrictamente prohibido.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Derechos de Autor</h2>
      <p className="mb-4">
        Este sitio web y su contenido están protegidos por derechos de autor. La
        reproducción total o parcial del contenido, así como del código fuente
        del sitio, está estrictamente prohibida sin el permiso del
        desarrollador. Para obtener permiso, por favor contacta a{" "}
        <a
          href="https://www.codevistax.com"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.codevistax.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Limitación de Responsabilidad
      </h2>
      <p className="mb-4">
        La información proporcionada en este sitio es solo para fines educativos
        y no debe considerarse como asesoramiento profesional. No garantizamos
        la exactitud, integridad o utilidad de la información presentada. Al
        utilizar este sitio, aceptas que no seremos responsables de cualquier
        daño o pérdida que surja del uso o la imposibilidad de uso de la
        información contenida en este sitio.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Prohibiciones</h2>
      <p className="mb-4">
        Está prohibido utilizar este sitio para actividades ilegales o no
        autorizadas. Esto incluye, pero no se limita a, la distribución de
        malware, ataques de denegación de servicio, phishing, o cualquier forma
        de fraude. Nos reservamos el derecho de reportar cualquier actividad
        sospechosa a las autoridades pertinentes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Modificaciones de los Términos
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento. Cualquier cambio se publicará en esta página, y tu uso
        continuado del sitio después de la publicación de cambios constituirá tu
        aceptación de dichos cambios.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Aceptación de los Términos
      </h2>
      <p>
        Al utilizar este sitio, aceptas cumplir con estos términos. Si no estás
        de acuerdo con alguna parte de estos términos, te recomendamos que no
        utilices esta página.
      </p>
    </div>
  );
};

export default TerminosYServicios;
