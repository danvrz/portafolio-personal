import { useState } from "react";
import { projects } from "../data/projects";
import { Eyebrow, ProjectGrid } from "../components/PageElements";

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const filters = ["Todos", ...new Set(projects.map((item) => item.category))];
  const items =
    filter === "Todos"
      ? projects
      : projects.filter((item) => item.category === filter);
  return (
    <section className="container page-section">
      <Eyebrow>EXPLORACIONES EN CÓDIGO</Eyebrow>
      <h1>
        Proyectos<span className="heading-dot">.</span>
      </h1>
      <p className="page-intro">
        Un laboratorio abierto de ideas entre la física, los datos y la
        estadística. Cada proyecto documentará tanto las preguntas como el
        proceso.
      </p>
      <p className="notice">
        Los proyectos actuales son ejemplos en desarrollo. Todavía no presentan
        resultados, aplicaciones ni repositorios publicados.
      </p>
      <div className="filters" aria-label="Filtrar proyectos por área">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        {items.length} {items.length === 1 ? "proyecto" : "proyectos"}
      </p>
      <ProjectGrid items={items} />
    </section>
  );
}
