import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

function Header() {
  const { t } = useTranslation();

  return (
    <section
      id="section-header"
      className="section section-header mb-3 text-center "
    >
      <div className="row align-items-center justify-content-around">
        <div className="col-md-8">
          <div>
            <h2>{t("Welcome, I'm Katarzyna")}</h2>
            <h1 className="text-uppercase"> {t("presentation.title")}</h1>
            <HashLink
              to="#section-projects"
              className="btn btn-outline-warning"
            >
              <i className="bi bi-arrow-down"></i> &nbsp;
              {t("My projects")}
            </HashLink>
          </div>
        </div>
        <div className="col-md-4 ">
          <img
            src="/logos/reactjs.svg"
            x="0"
            y="100"
            width="200"
            height="200"
            alt="Computer image"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
