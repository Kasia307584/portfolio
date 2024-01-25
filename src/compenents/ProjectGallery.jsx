import projects from "../projects.json";
import ProjectCard from "./ProjectCard";

function ProjectGallery(props) {
  const { title, description } = props;
  return (
    <div className="text-light">
      <h1>{title}</h1>
      <h5>{description}</h5>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {projects.map((project) => (
          <ProjectCard name={project.title} key={`project-${project.id}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
