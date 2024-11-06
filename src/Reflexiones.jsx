import React from "react";
import ReflexionImage from "/images/reflexion.jpg";

const Reflexiones = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <img
        src={ReflexionImage}
        alt="Reflexión"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h2 className="text-2xl font-semibold text-center text-blue-600">
        Reflexiones sobre la Ansiedad Académica
      </h2>

      <p className="mt-4 text-lg text-gray-700">
        La ansiedad académica puede sentirse como una carga pesada sobre los
        estudiantes, pero es importante recordar que no están solos en esta
        lucha. Reflexionar sobre cómo nos afectan los desafíos académicos y
        emocionales puede ser una herramienta poderosa para encontrar maneras
        efectivas de lidiar con ellos.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Es normal sentirse abrumado, pero cuando comenzamos a reflexionar sobre
        nuestras emociones y pensamientos, podemos identificar patrones de
        estrés que nos permiten cambiar nuestra perspectiva. Reflexionar sobre
        los éxitos y fracasos pasados nos da la oportunidad de aprender y
        crecer, en lugar de dejarnos consumir por la ansiedad.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        La autoaceptación y la autocompasión son claves para manejar la
        ansiedad. A veces, la presión por cumplir con las expectativas ajenas o
        nuestras propias expectativas puede generar una sensación de
        insuficiencia. Sin embargo, al reflexionar sobre lo que realmente
        importa y priorizar nuestro bienestar, podemos liberarnos de esas cargas
        innecesarias.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Las reflexiones pueden ser un espacio para aceptar nuestras emociones
        tal como son, sin juzgarlas. Practicar la reflexión diaria a través de
        la escritura o la meditación puede ayudarnos a ver nuestras emociones de
        manera más clara, lo que nos permite tomar decisiones más conscientes y
        saludables.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Finalmente, aprender a reflexionar nos enseña a ser más resilientes
        frente a la adversidad, a tener una mentalidad más flexible y a
        encontrar soluciones creativas a los problemas que surgen. Reflexionar
        sobre nuestras experiencias académicas no solo nos ayuda a reducir la
        ansiedad, sino que también fortalece nuestra capacidad de adaptación y
        crecimiento personal.
      </p>
    </div>
  );
};

export default Reflexiones;
