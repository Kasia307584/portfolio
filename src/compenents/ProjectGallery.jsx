import projects from "../projects.json";
import ProjectCard from "./ProjectCard";

function ProjectGallery(props) {
  const { title } = props;
  return (
    <section id="section-projects" className="section-projects">
      <h1>{title}</h1>
      <div className="container text-center d-flex justify-content-around flex-wrap">
        {projects.map((project) => (
          <div
            className="container col-lg-6 p-sm-4 py-3 px-0"
            key={`project-${project.id}`}
          >
            <ProjectCard name={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;
