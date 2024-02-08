import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

function Header() {
  const { t } = useTranslation();

  return (
    <section className="section section-header">
      <div className=" mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{t("Hello, I'm Katarzyna")}</h2>
              <h1 className="text-uppercase"> {t("presentation.title")}</h1>
              <HashLink smooth to="#section-projects" className="nav-link ">
                {t("Projects")}
              </HashLink>
            </div>
          </div>
          <div className="col-md-4">
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
      </div>
    </section>
  );
}

export default Header;
