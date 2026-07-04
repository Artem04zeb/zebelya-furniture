function ProjectCard({ project, featured = false }) {
  const className = ["project-card", featured ? "project-card--featured" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className}>
      <figure className="project-card__media">
        <img src={project.image} alt={project.alt} />
      </figure>
      <div className="project-card__body">
        <p className="project-card__category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
