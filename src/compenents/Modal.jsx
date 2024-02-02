import { useTranslation } from "react-i18next";
import { useState } from "react";
import projects from "../projects.json";

function Modal({ name }) {
  const { t } = useTranslation(["translation", "projects"]);

  const project = projects.find((item) => item.title === name);

  const [isShown, setIsShown] = useState(false);

  function showModal() {
    setIsShown(true);
  }
  function hideModal() {
    setIsShown(false);
  }

  return (
    <>
      <button
        onClick={showModal}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#theModal"
      >
        Launch modal
      </button>

      <div
        className="modal"
        tabIndex="-1"
        id="theModal"
        style={{
          display: isShown ? "block" : "none",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* check in the bootstrap doc how to manage double h on the page while applying modal*/}
              <h5 className="modal-title">{project.title}</h5>
              <button
                onClick={hideModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ backgroundColor: "black" }}>
              <h2>{t("context")}</h2>
              {t(`${name}.context`, { ns: "projects" })}
              <br />
              <br />
              <h2>{t("challenges")}</h2>
              {t(`${name}.challenges`, { ns: "projects" })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                GitHub link
              </button>
              <button type="button" className="btn btn-secondary">
                Website link
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
