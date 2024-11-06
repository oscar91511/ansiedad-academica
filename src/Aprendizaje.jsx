import React from "react";
import ControlEmocionalImage from "/images/control.jpg";

const Aprendizaje = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <img
        src={ControlEmocionalImage}
        alt="Control Emocional"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h2 className="text-2xl font-semibold text-center text-blue-600">
        Aprendizaje y Control Emocional
      </h2>

      <p className="mt-4 text-lg text-gray-700">
        El control emocional es una habilidad esencial que todos los estudiantes
        deben desarrollar para manejar las emociones intensas, especialmente
        durante épocas de estrés académico. El aprendizaje y la práctica del
        control emocional no solo son fundamentales para mantener la calma ante
        situaciones desafiantes, sino que también juegan un papel crucial en el
        rendimiento académico y el bienestar general.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        La ansiedad académica es un problema común que afecta a muchos
        estudiantes. Sin embargo, aprender a reconocer y regular nuestras
        emociones puede mejorar la capacidad para concentrarse, gestionar el
        estrés y superar los obstáculos que se presentan en el entorno escolar.
        Las técnicas de respiración profunda, la meditación y el mindfulness son
        herramientas poderosas que nos permiten liberar tensiones y mejorar
        nuestra resiliencia emocional.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Además de estas técnicas, es importante establecer una rutina de estudio
        equilibrada y saludable. El descanso adecuado, una alimentación
        balanceada y la práctica de ejercicio físico también contribuyen al
        control emocional, ayudando a reducir los niveles de ansiedad y a
        aumentar la concentración.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        El aprendizaje y control de las emociones es un proceso que lleva
        tiempo, pero con la práctica y el compromiso, puedes aprender a dominar
        tus emociones en cualquier situación académica o personal. Al integrar
        estos hábitos en tu vida diaria, estarás mejor preparado para manejar
        cualquier desafío emocional que surja.
      </p>
    </div>
  );
};

export default Aprendizaje;
