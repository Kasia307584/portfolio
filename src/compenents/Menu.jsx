import { useTranslation } from "react-i18next";
// import "../i18n";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

const lngs = {
  en: "EN",
  fr: "FR",
};

function Menu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg sticky-top text-bg-light ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <HashLink to="#" className="nav-link">
          Brand icon
        </HashLink>
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <HashLink to="#" className="nav-link active">
              {t("Home")}
            </HashLink>
            <HashLink to="#section-presentation" className="nav-link ">
              {t("Presentation")}
            </HashLink>
            <HashLink to="#section-skills" className="nav-link ">
              {t("Tech & Tools")}
            </HashLink>
            <HashLink to="#section-projects" className="nav-link ">
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
