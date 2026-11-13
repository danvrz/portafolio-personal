import { useEffect, useState } from "react";
import { projects } from "./data/projects";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const [route, setRoute] = useState(
    () => window.location.hash.slice(1) || "/",
  );
  useEffect(() => {
    // Las rutas con # funcionan sin configurar un servidor de rutas.
    function navigate() {
      setRoute(window.location.hash.slice(1) || "/");
      window.scrollTo(0, 0);
      requestAnimationFrame(() => document.querySelector("main")?.focus());
    }
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);
  const project = projects.find((item) => route === `/proyectos/${item.slug}`);
  const title =
    project?.title ||
    {
      "/": "Inicio",
      "/proyectos": "Proyectos",
      "/sobre-mi": "Sobre mí",
      "/contacto": "Contacto",
    }[route] ||
    "Página no encontrada";
  useEffect(() => {
    document.title = `${title} · Daniel Vertiz`;
  }, [title]);
  let page = <NotFound />;
  if (route === "/") page = <Home />;
  if (route === "/proyectos") page = <Projects />;
  if (route === "/sobre-mi") page = <About />;
  if (route === "/contacto") page = <Contact />;
  if (project) page = <ProjectDetail project={project} />;
  return (
    <>
      <a
        className="skip-link"
        href="#contenido"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("contenido").focus();
        }}
      >
        Saltar al contenido
      </a>
      <Header route={route} />
      <main id="contenido" tabIndex="-1">
        {page}
      </main>
      <Footer />
    </>
  );
}
