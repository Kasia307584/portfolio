function SectionSkills(props) {
  const { title } = props;
  return (
    <section id="section-skills" className="section section-skills  mb-3 ">
      <h1>{title}</h1>
      <div>
        <img
          src="/logos/html5.svg"
          x="0"
          y="100"
          width="90"
          height="90"
          alt="Html5 logo"
          title="Html5"
        />
        <img
          src="/logos/css3.svg"
          x="0"
          y="100"
          width="90"
          height="90"
          alt="Css3 logo"
          title="Css3"
        />
        <img
          src="/logos/javascript.svg"
          x="0"
          y="100"
          width="90"
          height="90"
          alt="Javascript logo"
          title="JavaScript"
        />
        <img
          src="/logos/reactjs.svg"
          x="0"
          y="100"
          width="90"
          height="90"
          alt="React logo"
          title="React"
        />
        <img
          src="/logos/sass.svg"
          x="0"
          y="100"
          width="90"
          height="90"
          alt="Sass logo"
          title="Sass"
        />
        <img
          src="/logos/git.svg"
          x="0"
          y="100"
          width="90"
          height="90"
          alt="Git logo"
          title="Git"
        />
        <img
          src="/logos/github.svg"
          x="0"
          y="100"
          width="90"
          height="90"
          alt="Github logo"
          title="GitHub"
        />
      </div>
    </section>
  );
}

export default SectionSkills;
