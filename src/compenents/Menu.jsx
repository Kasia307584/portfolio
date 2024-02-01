import { useTranslation } from "react-i18next";
// import "../i18n";
import { HashLink } from "react-router-hash-link";

const lngs = {
  en: "EN",
  fr: "FR",
};

function Menu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <HashLink smooth to="#navbar" className="nav-link">
          Brand icon
        </HashLink>
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <HashLink smooth to="#navbar" className="nav-link active">
              {t("Home")}
            </HashLink>
            <HashLink smooth to="#section-presentation" className="nav-link ">
              {t("Presentation")}
            </HashLink>
            <HashLink smooth to="#section-skills" className="nav-link ">
              {t("Tech & Tools")}
            </HashLink>
            <HashLink smooth to="#section-projects" className="nav-link ">
              {t("Projects")}
            </HashLink>
          </div>
        </div>
        <div className="btn-group" role="group" aria-label="Language buttons">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              type="button"
              className="btn btn-outline-warning"
            >
              {lngs[lng]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
