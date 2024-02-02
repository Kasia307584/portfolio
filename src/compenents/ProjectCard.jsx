import projects from "../projects.json";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";

function ProjectCard(props) {
  const { t } = useTranslation(["translation", "projects"]);

  const { name } = props;
  const project = projects.find((item) => item.title === name);

  return (
    <div className="card text-bg-warning text-light w-75">
      <div className="card-body text-bg-dark">
        <img
          src={project.cover}
          className="card-img-top"
          alt="Project screenshot"
        />
        <h5 className="card-title">{project.title}</h5>
      </div>
      <div className="card__details position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50">
        <h5 className="card-title">{project.title}</h5>
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
        <h6>{t("More information")}</h6>
        <Modal />
      </div>
    </div>
  );
}

export default ProjectCard;
