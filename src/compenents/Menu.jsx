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
  const [activeSection, setActiveSection] = useState("");
  const [navHidden, setNavHidden] = useState(false);

  const handleScroll = () => {
    const sections = [
      "menu",
      "section-header",
      "section-presentation",
      "section-skills",
      "section-projects",
    ];
    // Highlight active section in navbar
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const scrollPosition = window.scrollY + 20;
        const top = element.offsetTop;
        const bottom = top + element.clientHeight;
        return scrollPosition >= top && scrollPosition <= bottom;
      }
      return false;
    });
    setActiveSection(currentSection || "");

    // Change navbar color and hide navbar-nav on scroll
    if (window.scrollY > 30) {
      setScrolled(true);
      setNavHidden(true);
    } else {
      setScrolled(false);
      setNavHidden(false);
    }
  };

  const handleNavHidden = () => {
    setNavHidden((prevNavHidden) => !prevNavHidden);
  };

  // Add event listener to handle scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-dark navbar-expand-sm sticky-top bg-dark ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid d-flex flex-nowrap align-items-start">
        <div>
          <HashLink to="#" id="menu" className="nav-link d-none d-sm-block">
            <div>
              <img
                src="./logos/reactjs.svg"
                x="0"
                y="100"
                width="30"
                height="30"
                alt="React logo"
                title="React"
              />
            </div>
          </HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* <div id="navbarNavAltMarkup">
          <div className="navbar-nav d-none d-md-flex flex-row"> */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            navHidden ? "hidden" : ""
          }`}
          id="navbarNavAltMarkup"
        >
          <div id="navbar-nav" className="navbar-nav text-start ps-3">
            <HashLink
              to="#"
              className={`nav-link ${
                activeSection === "menu" || activeSection === "section-header"
                  ? "active"
                  : ""
              }`}
              onClick={handleNavHidden}
            >
              {t("Home")}
            </HashLink>
            <HashLink
              to="#section-presentation"
              className={`nav-link ${
                activeSection === "section-presentation" ? "active" : ""
              }`}
              onClick={handleNavHidden}
            >
              {t("Presentation")}
            </HashLink>
            <HashLink
              to="#section-skills"
              className={`nav-link ${
                activeSection === "section-skills" ? "active" : ""
              }`}
              onClick={handleNavHidden}
            >
              {t("Tech & Tools")}
            </HashLink>
            <HashLink
              to="#section-projects"
              className={`nav-link ${
                activeSection === "section-projects" ? "active" : ""
              }`}
              onClick={handleNavHidden}
            >
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
