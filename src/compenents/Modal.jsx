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
        <button type="button" className="btn btn-secondary">
          GitHub link
        </button>
        <button type="button" className="btn btn-secondary">
          Website link
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
