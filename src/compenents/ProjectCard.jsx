import projects from "../projects.json";
import { useTranslation } from "react-i18next";
import ProjectModal from "./Modal";
import { useState } from "react";

function ProjectCard({ name }) {
  const [modalShow, setModalShow] = useState(false);
  const { t } = useTranslation(["translation", "projects"]);

  const project = projects.find((item) => item.title === name);

  return (
    <div className="card text-bg-warning text-light w-75">
      <div className="card-body text-bg-dark">
        <img
          src={project.cover}
          className="card-img-top"
          alt="Project screenshot"
        />
        <h1 className="card-title">{project.title}</h1>
      </div>
      <div className="card__details position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50">
        <h1 className="card-title">{project.title}</h1>
        <p className="card-text">
          {t(`${name}.description`, { ns: "projects" })}
        </p>
        <div className="tags">
          <ul>
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setModalShow(true)}
          type="button"
          className="btn btn-secondary"
        >
          {t("More information")}
        </button>
        <ProjectModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          name={name}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
