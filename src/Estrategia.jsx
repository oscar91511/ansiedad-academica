import React from "react";
import EstrategiaImage from "/images/dolorCabeza2.jpg";
const Estrategia = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <img
        src={EstrategiaImage}
        alt="Estrategias de apoyo"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h2 className="text-2xl font-semibold text-center text-purple-900">
        Estrategias de Apoyo para Manejar la Ansiedad Estudiantil
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        La ansiedad estudiantil es una reacción común a las demandas académicas.
        Implementar estrategias efectivas puede ayudar a los estudiantes a
        reducir el estrés y mejorar su bienestar emocional. Aquí presentamos
        algunas técnicas de apoyo que pueden ayudar a gestionar la ansiedad en
        el ámbito académico:
      </p>

      <div className="mt-6 space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-purple-600">
            1. Establecimiento de Objetivos Realistas
          </h3>
          <p className="text-gray-700 mt-2">
            Organiza tu tiempo estableciendo metas alcanzables y dividiendo las
            tareas grandes en pasos más pequeños. Esto puede ayudarte a evitar
            la sobrecarga y sentir un progreso constante.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-purple-600">
            2. Práctica de Técnicas de Relajación
          </h3>
          <p className="text-gray-700 mt-2">
            La respiración profunda, la meditación y el mindfulness pueden ser
            herramientas útiles para reducir la ansiedad. Dedica unos minutos
            cada día a practicar la relajación y recuperar la calma.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-purple-600">
            3. Autocuidado y Descanso
          </h3>
          <p className="text-gray-700 mt-2">
            Mantén un equilibrio entre el estudio y el descanso. Dormir
            adecuadamente, alimentarte bien y hacer ejercicio son aspectos
            esenciales para tu bienestar físico y mental.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-purple-600">
            4. Comunicación y Búsqueda de Apoyo
          </h3>
          <p className="text-gray-700 mt-2">
            Hablar sobre tus preocupaciones con amigos, familiares o consejeros
            puede ayudarte a obtener perspectivas y apoyo emocional. No dudes en
            pedir ayuda cuando la necesites.
          </p>
        </div>
      </div>

      <p className="mt-6 text-gray-700">
        😁😉Recuerda que no estás solo en este proceso. Las estrategias de apoyo
        y la gestión del tiempo pueden ayudarte a enfrentar los desafíos
        académicos con confianza y tranquilidad.🙏
      </p>
    </section>
  );
};

export default Estrategia;
