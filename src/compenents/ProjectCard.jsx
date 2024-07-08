import projects from "../projects.json";
import { useTranslation } from "react-i18next";
import ProjectModal from "./Modal";
import { useState } from "react";

function ProjectCard({ name }) {
  const [modalShow, setModalShow] = useState(false);
  const { t } = useTranslation(["translation", "projects"]);

  const project = projects.find((item) => item.title === name);

  return (
    <div className="card text-bg-dark">
      <div className="card-body card-body__project bg-light">
        <img
          src={project.cover}
          className="card-img-top"
          alt="Project screenshot"
        />
        <h2 className="card-title card-title__main text-bg-dark lh-base">
          {project.title}
        </h2>
      </div>
      <div className="card__details position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark ">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-text">
          {t(`${name}.description`, { ns: "projects" })}
        </p>
        <ul className="tags d-flex flex-wrap">
          {project.tags.map((tag, index) => (
            <li key={index} className="border rounded m-2">
              {tag}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setModalShow(true)}
          type="button"
          className="btn btn-warning"
        >
          {t("More information")} <i className="bi bi-arrow-right"></i>
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
