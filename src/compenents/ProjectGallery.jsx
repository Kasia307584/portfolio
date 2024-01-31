import projects from "../projects.json";
import ProjectCard from "./ProjectCard";

function ProjectGallery(props) {
  const { title, description } = props;
  return (
    <div className="text-light">
      <h1>{title}</h1>
      <h5>{description}</h5>
      <div className="d-flex justify-content-around flex-wrap">
        {projects.map((project) => (
          <div className="col-md-6" key={`project-${project.id}`}>
            <ProjectCard name={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
