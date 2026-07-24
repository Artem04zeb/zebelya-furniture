import ProjectImageSlider from "./ProjectImageSlider";

function ProjectCard({ project, featured = false }) {
  const className = [
    "project-card",
    featured ? "project-card--featured" : "",
    project.href ? "project-card--link" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (project.href) {
    return (
      <a className={className} href={project.href} target="_blank" rel="noreferrer">
        <div className="project-card__link-panel">
          <div className="project-card__link-content">
            <p className="project-card__category">{project.label}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="project-card__link-cta">Перейти в Яндекс.Диск</span>
          </div>
          <span className="project-card__link-arrow" aria-hidden="true" />
        </div>
      </a>
    );
  }

  const images = project.images || [{ src: project.image, alt: project.alt || project.title }];

  return (
    <article className={className}>
      <figure className="project-card__media">
        <ProjectImageSlider images={images} projectTitle={project.title} />
      </figure>
      <div className="project-card__body">
        <h3>{project.title}</h3>
      </div>
    </article>
  );
}

export default ProjectCard;
