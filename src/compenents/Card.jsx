function Card(props) {
  const { title, photo, description } = props;
  return (
    <>
      <div className="card  mb-3 text-bg-dark" style={{ maxWidth: "1040px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={photo}
              alt="My photo"
              style={{ width: "200px", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-8 text-end text-light">
            <div className="card-body">
              <h1 className="card-title">{title}</h1>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
