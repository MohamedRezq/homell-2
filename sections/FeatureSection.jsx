import Link from "next/link";

const FeatureSection = ({ relatedProps }) => {
  return (
    <section class="pt-5 pb-5 relatedProps">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h4 class="mb-3">Related Properties </h4>
          </div>
          <div class="col-6 text-right">
            <a
              class="btn btn-primary mb-3 mr-1"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <i class="fa fa-arrow-left"></i>
            </a>
            <a
              class="btn btn-primary mb-3 "
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <i class="fa fa-arrow-right"></i>
            </a>
          </div>
          <div class="col-12">
            <div
              id="carouselExampleIndicators2"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    {relatedProps.slice(1, 4).map((prop, i) => (
                      <div class="col-md-4 mb-3" key={i}>
                        <Link href={`/property/${prop.externalID}`}>
                          <a>
                            <div class="card" style={{ height: "350px" }}>
                              <img
                                class="img-fluid"
                                alt={prop.coverPhoto.title}
                                src={prop.coverPhoto.url}
                                style={{ height: "250px" }}
                              />
                              <div class="card-body">
                                <h6 class="card-title">{prop.title}</h6>
                                <p
                                  class="card-text"
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
                <div class="carousel-item">
                  <div class="row">
                    {relatedProps.slice(4, 7).map((prop, i) => (
                      <div class="col-md-4 mb-3" key={i}>
                        <Link href={`/property/${prop.externalID}`}>
                          <a>
                            <div class="card" style={{ height: "350px" }}>
                              <img
                                class="img-fluid"
                                alt={prop.coverPhoto.title}
                                src={prop.coverPhoto.url}
                                style={{ height: "250px" }}
                              />
                              <div class="card-body">
                                <h6 class="card-title">{prop.title}</h6>
                                <p
                                  class="card-text"
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
                <div class="carousel-item">
                  <div class="row">
                    {relatedProps.slice(7, 10).map((prop, i) => (
                      <div class="col-md-4 mb-3" key={i}>
                        <Link href={`/property/${prop.externalID}`}>
                          <a>
                            <div class="card" style={{ height: "350px" }}>
                              <img
                                class="img-fluid"
                                alt={prop.coverPhoto.title}
                                src={prop.coverPhoto.url}
                                style={{ height: "250px" }}
                              />
                              <div class="card-body">
                                <h6 class="card-title">{prop.title}</h6>
                                <p
                                  class="card-text"
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
