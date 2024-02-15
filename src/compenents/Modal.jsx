import { useTranslation } from "react-i18next";
import projects from "../projects.json";
import Modal from "react-bootstrap/Modal";

function ProjectModal(props) {
  const { t } = useTranslation(["translation", "projects"]);

  const project = projects.find((item) => item.title === props.name);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project ? project.title : "Project name"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{t("context")}</h2>
        <p>{t(`${props.name}.context`, { ns: "projects" })}</p>
        <h2>{t("challenges")}</h2>
        <p>{t(`${props.name}.challenges`, { ns: "projects" })}</p>
      </Modal.Body>
      <Modal.Footer>
        <a
          href={project.github}
          target="_blank"
          type="button"
          rel="noopener noreferrer"
          className="btn btn-outline-warning"
        >
          <i className="bi bi-box-arrow-in-right"></i> GitHub link
        </a>
        <a
          href={project.website}
          target="_blank"
          type="button"
          rel="noopener noreferrer"
          className="btn btn-outline-warning"
        >
          <i className="bi bi-box-arrow-in-right"></i> Website link
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
