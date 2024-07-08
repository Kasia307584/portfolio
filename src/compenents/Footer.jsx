import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://github.com/Kasia307584"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github text-warning"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/katarzyna-zurek-423b0664/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin text-warning"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              &copy; {new Date().getFullYear()}
              &nbsp;
              {t("Katarzyna Zurek. All rights reserved.")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
