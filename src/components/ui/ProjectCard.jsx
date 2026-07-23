import ProjectImageSlider from "./ProjectImageSlider";

function ProjectCard({ project, featured = false }) {
  const className = ["project-card", featured ? "project-card--featured" : ""]
    .filter(Boolean)
    .join(" ");
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
