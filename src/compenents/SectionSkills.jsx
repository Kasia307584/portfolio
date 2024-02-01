function SectionSkills(props) {
  const { title, description } = props;
  return (
    <section id="section-skills" className="card mb-3 text-bg-dark">
      <div className="row g-0">
        <div className="col-md-8 text-light">
          <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <h5 className="card-text">{description}</h5>
            <div className="d-flex">
              <img
                src="/logos/html5.svg"
                x="0"
                y="100"
                width="90"
                height="90"
              />
              <img src="/logos/css3.svg" x="0" y="100" width="90" height="90" />
              <img
                src="/logos/javascript.svg"
                x="0"
                y="100"
                width="90"
                height="90"
              />
              <img
                src="/logos/reactjs.svg"
                x="0"
                y="100"
                width="90"
                height="90"
              />
              <img src="/logos/sass.svg" x="0" y="100" width="90" height="90" />
              <img src="/logos/git.svg" x="0" y="100" width="90" height="90" />
              <img
                src="/logos/github.svg"
                x="0"
                y="100"
                width="90"
                height="90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
