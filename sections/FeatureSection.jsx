import Link from "next/link";

const FeatureSection = ({ relatedProps }) => {
  return (
    <section className="pt-5 pb-5 relatedProps">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4 className="mb-3">Related Properties </h4>
          </div>
          <div className="col-6 text-right">
            <a
              className="btn btn-primary mb-3 mr-1"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left"></i>
            </a>
            <a
              className="btn btn-primary mb-3 "
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {relatedProps.slice(1, 4).map((prop, i) => (
                      <div className="col-md-4 mb-3" key={i}>
                        <Link href={`/property/${prop.externalID}`}>
                          <a>
                            <div className="card" style={{ height: "350px" }}>
                              <img
                                className="img-fluid"
                                alt={prop.coverPhoto.title}
                                src={prop.coverPhoto.url}
                                style={{ height: "250px" }}
                              />
                              <div className="card-body">
                                <h6 className="card-title">{prop.title}</h6>
                                <p
                                  className="card-text"
                                  style={{ fontSize: "10pt" }}
                                >
                                  {prop.agency.name}
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {relatedProps.slice(4, 7).map((prop, i) => (
                      <div className="col-md-4 mb-3" key={i}>
                        <Link href={`/property/${prop.externalID}`}>
                          <a>
                            <div className="card" style={{ height: "350px" }}>
                              <img
                                className="img-fluid"
                                alt={prop.coverPhoto.title}
                                src={prop.coverPhoto.url}
                                style={{ height: "250px" }}
                              />
                              <div className="card-body">
                                <h6 className="card-title">{prop.title}</h6>
                                <p
                                  className="card-text"
                                  style={{ fontSize: "10pt" }}
                                >
                                  {prop.agency.name}
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {relatedProps.slice(7, 10).map((prop, i) => (
                      <div className="col-md-4 mb-3" key={i}>
                        <Link href={`/property/${prop.externalID}`}>
                          <a>
                            <div className="card" style={{ height: "350px" }}>
                              <img
                                className="img-fluid"
                                alt={prop.coverPhoto.title}
                                src={prop.coverPhoto.url}
                                style={{ height: "250px" }}
                              />
                              <div className="card-body">
                                <h6 className="card-title">{prop.title}</h6>
                                <p
                                  className="card-text"
                                  style={{ fontSize: "10pt" }}
                                >
                                  {prop.agency.name}
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
