import ScientificVisual from "../components/ScientificVisual";
import { Eyebrow } from "../components/PageElements";

export default function ProjectDetail({ project }) {
  return (
    <article className="container page-section detail">
      <a className="text-link back-link" href="#/proyectos">
        ← Volver a proyectos
      </a>
      <Eyebrow>{project.category}</Eyebrow>
      <h1>{project.title}</h1>
      <p className="page-intro">{project.description}</p>
      <div className="detail-meta">
        <span className="project-status">○ Ejemplo · En desarrollo</span>
        <div className="tags">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
      <ScientificVisual type={project.visual} />
      <div className="detail-columns">
        <section>
          <h2>La pregunta</h2>
          <p>{project.question}</p>
          <h2>Ruta de exploración propuesta</h2>
          <ol>
            {project.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <aside>
          <h2>Estado actual</h2>
          <p>
            Proyecto de demostración. El análisis aún no se ha realizado; las
            herramientas y el alcance son una propuesta.
          </p>
          <h3>Próximo paso</h3>
          <p>{project.next}</p>
          <p className="muted">
            Código, datos y resultados: pendientes de incorporar.
          </p>
        </aside>
      </div>
    </article>
  );
}
