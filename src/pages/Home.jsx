import { projects } from "../data/projects";
import { specialties } from "../data/profile";
import ScientificVisual from "../components/ScientificVisual";
import { Eyebrow, ProjectGrid } from "../components/PageElements";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <Eyebrow>PORTAFOLIO PERSONAL</Eyebrow>
          <h1>
            Entender el mundo.
            <br />
            <em>Explorar con datos.</em>
          </h1>
          <p className="intro">
            Soy Daniel Vertiz. Mi interés está en la intersección de lo datos,
            las matemáticas y la programación: donde las preguntas se convierten
            en modelos y los datos en conocimiento. 
          </p>
          <div className="hero-actions">
            <a className="button" href="#/proyectos">
              Explorar proyectos <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#/sobre-mi">
              Más sobre mí <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <ScientificVisual />
      </section>
      <div className="container specialty-strip">
        <span className="strip-label">ÁREAS DE INTERÉS</span>
        <div>
          {specialties.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <section className="container projects-section">
        <div className="section-heading">
          <div>
            <Eyebrow>DE LA PREGUNTA A LA EXPLORACIÓN</Eyebrow>
            <h2>
              Proyectos destacados<span className="heading-dot">.</span>
            </h2>
          </div>
          <a className="text-link" href="#/proyectos">
            Ver todos los proyectos <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="section-description">
          Ideas en desarrollo para conectar teoría, datos y código.
        </p>
        <ProjectGrid items={projects} />
      </section>
      <section className="container curiosity">
        <div>
          <Eyebrow>UNA FORMA DE PENSAR</Eyebrow>
          <h2>
            La buena ciencia empieza
            <br />
            con una buena pregunta.
          </h2>
        </div>
        <div>
          <p>
            Este portafolio es un espacio para documentar el proceso: formular
            preguntas, explorar herramientas y compartir lo aprendido.
          </p>
          <a className="text-link" href="#/sobre-mi">
            Conoce mis intereses <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
