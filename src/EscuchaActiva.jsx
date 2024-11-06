import React from "react";
import EscuchaActivaImage from "/images/escucha.jpg"; 

const EscuchaActiva = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <img
        src={EscuchaActivaImage}
        alt="Escucha Activa"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h2 className="text-2xl font-semibold text-center text-green-600">
        La Importancia de la Escucha Activa
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        La escucha activa es una habilidad esencial en la comunicación que va
        más allá de simplemente oír las palabras de los demás. Consiste en
        prestar atención plena al mensaje, tanto verbal como no verbal, y
        responder de manera empática y comprensiva. Esta habilidad es
        fundamental para construir relaciones sólidas y mejorar el entendimiento
        mutuo.
      </p>

      <div className="mt-6 space-y-4">
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-green-600">
            1. Mantén el Contacto Visual
          </h3>
          <p className="text-gray-700 mt-2">
            Hacer contacto visual demuestra que estás prestando atención e
            interesado en la conversación. Esto crea una conexión y ayuda a que
            la otra persona se sienta escuchada.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-green-600">
            2. Escucha sin Interrumpir
          </h3>
          <p className="text-gray-700 mt-2">
            Permitir que la persona hable sin interrupciones muestra respeto y
            evita que pierdas detalles importantes. Escuchar activamente implica
            darle tiempo a la persona para expresar sus pensamientos.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-green-600">
            3. Haz Preguntas Clarificadoras
          </h3>
          <p className="text-gray-700 mt-2">
            Preguntar sobre lo que no entiendes muestra interés y ayuda a evitar
            malentendidos. Las preguntas claras y abiertas facilitan una
            comunicación más profunda y efectiva.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-green-600">
            4. Muestra Empatía
          </h3>
          <p className="text-gray-700 mt-2">
            Validar los sentimientos de los demás y demostrar comprensión ayuda
            a construir confianza. Expresiones como "entiendo cómo te sientes"
            pueden hacer una gran diferencia en la conversación.
          </p>
        </div>
      </div>

      <p className="mt-6 text-gray-700">
        La escucha activa es una herramienta poderosa para mejorar nuestras
        relaciones interpersonales. Practicar esta habilidad no solo beneficia a
        los demás, sino que también nos enriquece, al permitirnos entender y
        conectar mejor con quienes nos rodean.
      </p>
    </section>
  );
};

export default EscuchaActiva;
