import projects from "../projects.json";

function ProjectCard(props) {
  const { id } = props;
  const project = projects.find((item) => item.id === id);

  return (
    <div
      className="card text-bg-warning text-light "
      id="project-card"
      style={{
        width: "21rem",
        height: "21rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        className="card text-bg-dark text-light"
        id="project-card"
        style={{ width: "20rem" }}
      >
        <img
          src={project.cover}
          className="card-img-top"
          alt="Project screenshot"
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
        </div>
      </div>
      <div className="card__details card--hidden ">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div className="tags">
          <ul>
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <h6>More information</h6>
      </div>
    </div>
  );
}

export default ProjectCard;
