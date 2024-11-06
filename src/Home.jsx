import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import { useState, useEffect } from "react";

function Home() {
  const videoList = ["OQPcaNEyhuQ", "3BOVSMnLecs", "wifsNMDztJg"];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playVideo = (index) => {
    setCurrentVideoIndex(index);
  };

  useEffect(() => {
    const videoIframe = document.getElementById("videoIframe");
    videoIframe.src = `https://www.youtube.com/embed/${videoList[currentVideoIndex]}?enablejsapi=1`;

    const handleVideoEnd = () => {
      const nextIndex = (currentVideoIndex + 1) % videoList.length;
      setCurrentVideoIndex(nextIndex);
    };

    window.onYouTubeIframeAPIReady = () => {
      const player = new YT.Player("videoIframe", {
        events: {
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) {
              handleVideoEnd();
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }, [currentVideoIndex]);

  return (
    <section className="bg-blue-100 bg-[url('/images/Bg.jpg')] bg-cover bg-center min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 pr-4">
          <SubMenu />
        </div>

        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-semibold text-center">
            Bienvenido a nuestra página
          </h2>
          <p className="mt-4 text-lg text-center">
            Claro, aquí tienes una versión más breve: La ansiedad académica es
            una preocupación común entre estudiantes, manifestándose como
            nerviosismo antes de exámenes o dificultad para concentrarse. La
            presión por obtener buenas calificaciones puede aumentar el estrés y
            los síntomas como fatiga e irritabilidad. Aquí encontrarás
            información y recursos para comprender mejor la ansiedad académica y
            aprender a manejarla, incluyendo técnicas de relajación y la
            importancia de buscar apoyo. Ver más...
          </p>
          <div className="flex justify-center mt-4">
            <Link
              to="/informacion"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Más Información
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-7xl mx-auto">
        <h3 className="text-xl font-semibold text-left">Videos Explicativos</h3>

        <div className="flex flex-col lg:flex-row justify-start mt-2">
          <iframe
            id="videoIframe"
            width="100%"
            height="325"
            title="Video Explicativo"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg lg:w-2/3"
          ></iframe>

          <div className="flex flex-col lg:flex-row lg:w-1/3 mt-4 lg:mt-0 lg:ml-4">
            <img
              src="/images/dolorCabeza.jpg"
              alt="Descripción de la imagen"
              className="h-40 w-full rounded-lg shadow-lg mb-2 lg:mb-0 lg:mr-2"
            />
            <img
              src="/images/Preocupacion.jpg"
              alt="Descripción de la imagen"
              className="h-40 w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <h4 className="font-semibold">Próximos Videos Relacionados</h4>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {videoList.slice(1).map((videoId, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow cursor-pointer w-full mb-4 md:w-1/2 lg:w-1/3"
                onClick={() => playVideo(index + 1)}
              >
                <h5 className="font-semibold">Próximo Video {index + 1}</h5>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt={`Miniatura del Próximo Video ${index + 1}`}
                  className="w-full h-[80px] rounded"
                />
                <p className="text-gray-600 mt-2">
                  Estrés y ansiedad Ver que podemos hacer {index + 1}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
