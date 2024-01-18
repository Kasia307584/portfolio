function ProjectCard(props) {
  const { title, photo, description, technologies } = props;

  return (
    <div
      className="card text-bg-warning text-light"
      id="project-card"
      style={{
        width: "21rem",
        height: "21rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card text-bg-dark text-light"
        id="project-card"
        style={{ width: "20rem" }}
      >
        <img src={photo} className="card-img-top" alt="Project screenshot" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
