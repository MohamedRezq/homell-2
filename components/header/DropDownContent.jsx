import { Col, ListGroup, Row } from "react-bootstrap";

const DropDownContent = () => {
  return (
    <div className="d-flex">
      <ListGroup horizontal="md" className="d-flex-column d-md-flex-row w-100">
        <Row className="w-100">
          <Col xs={12} lg={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Homes For Sale
              </div>
              <Row xs={1} sm={2}>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Apartments</a>
                  </div>
                  <div className="py-1">
                    <a href="">Townhouses</a>
                  </div>
                  <div className="py-1">
                    <a href="">Villas</a>
                  </div>
                  <div className="py-1">
                    <a href="">Pent Houses</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Apartments</a>
                  </div>
                  <div className="py-1">
                    <a href="">Townhouses</a>
                  </div>
                  <div className="py-1">
                    <a href="">Villas</a>
                  </div>
                  <div className="py-1" style={{ fontWeight: "bold" }}>
                    <a href="">
                      Show All <i class="fas fa-angle-double-right"></i>{" "}
                    </a>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          </Col>
          <Col xs={12} lg={8} className="px-0">
            <ListGroup.Item className="d-flex flex-column px-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Search By Cities
              </div>
              <Row xs={1} sm={3} lg={5}>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Apartments</a>
                  </div>
                  <div className="py-1">
                    <a href="">Villas</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Apartments</a>
                  </div>
                  <div className="py-1">
                    <a href="">Villas</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Apartments</a>
                  </div>
                  <div className="py-1">
                    <a href="">Villas</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Apartments</a>
                  </div>
                  <div className="py-1">
                    <a href="">Villas</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Apartments</a>
                  </div>
                  <div className="py-1">
                    <a href="">Villas</a>
                  </div>
                  <div className="py-1">
                    <a href="">Duplexes</a>
                  </div>
                  <div className="py-1" style={{ fontWeight: "bold" }}>
                    <a href="">
                      Show All <i class="fas fa-angle-double-right"></i>{" "}
                    </a>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
    </div>
  );
};

export default DropDownContent;
