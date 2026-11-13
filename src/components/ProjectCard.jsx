import ScientificVisual from "./ScientificVisual";
export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <ScientificVisual type={project.visual} />
      <div className="card-body">
        <div className="card-kicker">
          <span>{project.category}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>
          <a href={`#/proyectos/${project.slug}`}>
            {project.title}
            <span className="card-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <span className="project-status">
          <span aria-hidden="true">○</span> Ejemplo · En desarrollo
        </span>
      </div>
    </article>
  );
}
