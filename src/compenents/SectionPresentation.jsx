import { useTranslation } from "react-i18next";

function SectionPresentation(props) {
  const { photo, description } = props;

  const { t } = useTranslation();

  return (
    <section
      id="section-presentation"
      className="section section-presentation mb-3 "
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start w-50"
            src={photo}
            alt="My photo"
          />
        </div>
        <div className="col-md-8 text-end text-light">
          <div className="card-body">
            <p className="card-text">{description}</p>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              {t("Download my CV")}
            </a>
            <a
              href="https://www.linkedin.com/in/katarzyna-zurek-423b0664/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/linkedin.png"
                alt="LinkedIn logo"
                x="0"
                y="100"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPresentation;
