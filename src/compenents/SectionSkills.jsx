function SectionSkills(props) {
  const { title } = props;
  return (
    <section id="section-skills" className="section section-skills  mb-3 ">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <div style={{ margin: "auto" }}>
          <img src="/logos/html5.svg" x="0" y="100" width="90" height="90" />
          <img src="/logos/css3.svg" x="0" y="100" width="90" height="90" />
          <img
            src="/logos/javascript.svg"
            x="0"
            y="100"
            width="90"
            height="90"
          />
          <img src="/logos/reactjs.svg" x="0" y="100" width="90" height="90" />
          <img src="/logos/sass.svg" x="0" y="100" width="90" height="90" />
          <img src="/logos/git.svg" x="0" y="100" width="90" height="90" />
          <img src="/logos/github.svg" x="0" y="100" width="90" height="90" />
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
