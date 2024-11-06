import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Resources from "./Resources";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Terminos from "./Terminos";
import PoliticaYServicios from "./PoliticaYServicios";
import Estrategia from "./Estrategia";
import EscuchaActiva from "./EscuchaActiva";
import Aprendizaje from "./Aprendizaje";
import Reflexiones from "./Reflexiones";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informacion" element={<Info />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<PoliticaYServicios />} />
            <Route path="/estrategias-apoyo" element={<Estrategia />} />
            <Route path="/escucha-activa" element={<EscuchaActiva />} />
            <Route path="/aprendizaje-control-emociones" element={<Aprendizaje />} />
            <Route path="/reflexiones" element={<Reflexiones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
