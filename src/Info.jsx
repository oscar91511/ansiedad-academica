import React from "react";

const Info = () => {
  return (
    <div className="bg-purple-100 p-6  max-w-2xl mx-auto mt-10 rounded-lg shadow-lg relative">
      <div className="absolute inset-0  bg-cover bg-center z-[-1]"></div>

      <h2 className="text-2xl font-semibold text-center mb-4 text-purple-900">
        Ansiedad Estudiantil
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">
          ¿Qué es la Ansiedad Estudiantil?
        </h3>
        <p className="text-gray-700">
          La ansiedad estudiantil es un tipo de ansiedad que experimentan muchos
          estudiantes, caracterizada por sentimientos de preocupación, temor o
          tensión relacionados con la vida académica. Esta puede manifestarse en
          situaciones como exámenes, presentaciones o la presión de cumplir con
          las expectativas.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">
          Síntomas Comunes
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Preocupación constante o excesiva sobre el rendimiento académico.
          </li>
          <li>Dificultad para concentrarse o mantener la atención.</li>
          <li>Inquietud o sensación de estar al borde.</li>
          <li>Cambios en el sueño (insomnio o dormir en exceso).</li>
          <li>Fatiga o falta de energía.</li>
          <li>
            Dolores de cabeza o problemas gastrointestinales sin causa médica
            aparente.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">
          Causas de la Ansiedad Estudiantil
        </h3>
        <p className="text-gray-700">
          Las causas pueden variar, pero algunas comunes incluyen:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Presión académica y expectativas elevadas.</li>
          <li>Falta de apoyo social o familiar.</li>
          <li>Transiciones importantes, como pasar a la universidad.</li>
          <li>Desbalance entre la vida académica y personal.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">
          Estrategias de Manejo
        </h3>
        <p className="text-gray-700">
          Aquí hay algunas estrategias que pueden ayudar a manejar la ansiedad
          estudiantil:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Practicar técnicas de respiración y meditación.</li>
          <li>Establecer un horario de estudio organizado.</li>
          <li>Buscar apoyo de amigos, familiares o consejeros escolares.</li>
          <li>Realizar ejercicio físico regularmente.</li>
          <li>
            Considerar la posibilidad de hablar con un profesional de salud
            mental si la ansiedad persiste.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-purple-800">
          Recursos Adicionales
        </h3>
        <p className="text-gray-700">
          Para obtener más información y apoyo sobre la ansiedad estudiantil,
          consulta los siguientes recursos:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <a href="/contacto" className="text-purple-600 hover:underline">
              Centro de Asesoramiento Psicológico
            </a>
          </li>
          <li>
            <a
              href="https://www.holanuna.com/es/blog/ejercicios-para-la-ansiedad/"
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Técnicas de Manejo del Estrés
            </a>
          </li>
          <li>
            <a href="/contacto" className="text-purple-600 hover:underline">
              Grupos de Apoyo para Estudiantes
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Info;
