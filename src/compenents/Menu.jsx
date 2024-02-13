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

    // Change navbar color on scroll
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
      className={`navbar navbar-expand-lg sticky-top text-bg-light ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <HashLink to="#" id="menu" className="nav-link">
          Brand icon
        </HashLink>
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <HashLink
              to="#"
              className={`nav-link ${
                activeSection === "menu" || activeSection === "section-header"
                  ? "active"
                  : ""
              }`}
            >
              {t("Home")}
            </HashLink>
            <HashLink
              to="#section-presentation"
              className={`nav-link ${
                activeSection === "section-presentation" ? "active" : ""
              }`}
            >
              {t("Presentation")}
            </HashLink>
            <HashLink
              to="#section-skills"
              className={`nav-link ${
                activeSection === "section-skills" ? "active" : ""
              }`}
            >
              {t("Tech & Tools")}
            </HashLink>
            <HashLink
              to="#section-projects"
              className={`nav-link ${
                activeSection === "section-projects" ? "active" : ""
              }`}
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
