import { specialties } from "../data/profile";
import { Eyebrow } from "../components/PageElements";

export default function About() {
  return (
    <section className="container page-section">
      <Eyebrow>DETRÁS DE LAS PREGUNTAS</Eyebrow>
      <h1>
        Sobre mí<span className="heading-dot">.</span>
      </h1>
      <div className="about-intro">
        <h2>
          Soy Daniel Vertiz.
          <br />
          <em>La curiosidad es mi punto de partida.</em>
        </h2>
        <p>
          Mi perfil está orientado a la física, las matemáticas, el análisis de
          datos, la estadística y la programación con Python. Me interesa
          conectar el razonamiento teórico con la exploración computacional y
          comunicar las ideas con claridad.
        </p>
      </div>
      <div className="about-grid">
        <section>
          <span className="number-label">01 / FORMACIÓN</span>
          <h2>Aprender con profundidad</h2>
          <p>
            Esta sección reunirá mi formación académica, cursos y áreas de
            estudio.
          </p>
          <p className="pending">
            Pendiente de completar con instituciones, estudios y fechas
            verificadas.
          </p>
        </section>
        <section>
          <span className="number-label">02 / EXPERIENCIA</span>
          <h2>Documentar el camino</h2>
          <p>
            Aquí compartiré mi experiencia y las contribuciones que pueda
            documentar.
          </p>
          <p className="pending">
            Pendiente de completar. No se incluyen puestos ni credenciales sin
            confirmar.
          </p>
        </section>
        <section>
          <span className="number-label">03 / INTERESES Y HERRAMIENTAS</span>
          <h2>Pensar, modelar, programar</h2>
          <p>
            Física y modelos matemáticos, análisis exploratorio, probabilidad y
            simulación. Python como herramienta para investigar y aprender.
          </p>
          <div className="tags">
            {specialties.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
      <div className="learning-note">
        <span aria-hidden="true">↗</span>
        <p>
          <strong>
            Un portafolio que también es un proyecto de aprendizaje.
          </strong>{" "}
          Estoy comenzando en desarrollo web con React, JavaScript y CSS. Este
          espacio crecerá con nuevos proyectos, aplicaciones interactivas e
          investigaciones.
        </p>
      </div>
    </section>
  );
}
