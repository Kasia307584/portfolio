import { useState } from "react";

function Modal() {
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
        className="modal "
        tabIndex="-1"
        id="theModal"
        style={{ display: isShown ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                onClick={hideModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
