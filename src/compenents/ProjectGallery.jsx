import projects from "../projects.json";
import ProjectCard from "./ProjectCard";

function ProjectGallery(props) {
  const { title, description } = props;
  return (
    <section id="section-projects" className="text-light">
      <h1>{title}</h1>
      <h5>{description}</h5>
      <div className="container text-center d-flex justify-content-around flex-wrap">
        {projects.map((project) => (
          <div
            className="container col-lg-6"
            key={`project-${project.id}`}
            style={{ padding: "2rem" }}
          >
            <ProjectCard name={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;
