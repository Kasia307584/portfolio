function Card(props) {
  const { text, photo, description } = props;
  return (
    <>
      <h1>{text}</h1>
      <div style={{ display: "flex" }}>
        <img
          src={photo}
          alt="My photo"
          style={{ width: "200px", height: "auto", borderRadius: "10px" }}
        />
        <h3 style={{ padding: "50px" }}>{description}</h3>
      </div>
    </>
  );
}

export default Card;
