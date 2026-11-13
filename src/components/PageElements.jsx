import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function ProjectGrid({ items }) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={projects.indexOf(project)}
        />
      ))}
    </div>
  );
}
