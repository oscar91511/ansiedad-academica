import React from "react";

const Resources = () => {
  const resources = [
    {
      title: "Centro de Asesoramiento Psicológico",
      description:
        "Ofrecen servicios de apoyo psicológico a estudiantes para manejar la ansiedad y el estrés.",
      link: "https://astronautaemocional.com/blog/",
    },
    {
      title: "Técnicas de Manejo del Estrés",
      description:
        "Un recurso que proporciona técnicas efectivas para reducir el estrés y la ansiedad.",
      link: "https://www.holanuna.com/es/blog/ejercicios-para-la-ansiedad/",
    },
    {
      title: "Aplicaciones de Meditación",
      description:
        "Lista de aplicaciones que pueden ayudar en la meditación y relajación para manejar la ansiedad.",
      link: "https://www.infobae.com/america/tecno/2022/03/23/las-7-aplicaciones-recomendadas-para-meditar/",
    },
    {
      title: "Grupos de Apoyo para Estudiantes",
      description:
        "Encuentra grupos de apoyo en línea donde puedes compartir experiencias y estrategias.",
      link: "/contacto", 
      isContactLink: true, 
    },
    {
      title: "Artículos sobre Ansiedad Estudiantil",
      description:
        "Lecturas y artículos que ofrecen información sobre la ansiedad en estudiantes.",
      link: "https://www.nimh.nih.gov/health/publications/espanol/depresion-sp",
    },
  ];

  return (
    <div className="bg-purple-100 p-6 max-w-2xl mx-auto mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4 text-purple-900">
        Recursos para la Ansiedad Estudiantil
      </h2>
      <ul className="space-y-4">
        {resources.map((resource, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-purple-800">{resource.title}</h3>
            <p className="text-gray-700 mb-2">{resource.description}</p>
            {resource.isContactLink ? (
              <a
                href={resource.link}
                className="text-purple-600 hover:underline"
              >
                Contáctanos
              </a>
            ) : (
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Más información
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
