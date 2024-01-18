function BuildingBlock(props) {
  const { title, description, children } = props;
  return (
    <div className="text-light">
      <h1>{title}</h1>
      <h5>{description}</h5>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {children}
      </div>
    </div>
  );
}

export default BuildingBlock;
