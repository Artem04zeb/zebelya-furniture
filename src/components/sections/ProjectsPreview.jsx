import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function ProjectsPreview() {
  return (
    <section className="projects-preview" id="projects" aria-labelledby="projects-title">
      <div className="projects-preview__inner">
        <div className="projects-preview__header">
          <div className="projects-preview__copy">
            <p className="projects-preview__eyebrow">Портфолио</p>
            <h2 id="projects-title">Реальные проекты, в&nbsp;которых мебель стала частью пространства</h2>
            <p className="projects-preview__lead">
              Кухни, гардеробные и шкафные системы, спроектированные под&nbsp;конкретный
              дом, сценарий жизни и эстетику интерьера.
            </p>
          </div>
        </div>

        <div className="projects-grid" aria-label="Избранные проекты">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPreview;
