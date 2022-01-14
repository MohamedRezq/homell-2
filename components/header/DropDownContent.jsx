import { Col, ListGroup, Row } from "react-bootstrap";

const DropDownContent = ({forWhat="Sale"}) => {
  return (
    <div className="d-flex">
      <ListGroup horizontal="md" className="d-flex-column d-md-flex-row w-100">
        <Row className="w-100">
          <Col xs={12} lg={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Poperties For {forWhat}
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
                    <a href="">Penthouses</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Shops</a>
                  </div>
                  <div className="py-1">
                    <a href="">Warehouses</a>
                  </div>
                  <div className="py-1">
                    <a href="">Labour camps</a>
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
                    <a href="">Dubai</a>
                  </div>
                  <div className="py-1">
                    <a href="">Abu Dhabi</a>
                  </div>
                  <div className="py-1">
                    <a href="">Sharjah</a>
                  </div>
                  <div className="py-1">
                    <a href="">Al Ain</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Ajman</a>
                  </div>
                  <div className="py-1">
                    <a href="">Ras Al Khaimah</a>
                  </div>
                  <div className="py-1">
                    <a href="">Fujairah</a>
                  </div>
                  <div className="py-1">
                    <a href="">Umm al-Quwain</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Dibba Al-Fujairah</a>
                  </div>
                  <div className="py-1">
                    <a href="">Khor Fakkan</a>
                  </div>
                  <div className="py-1">
                    <a href="">Kalba</a>
                  </div>
                  <div className="py-1">
                    <a href="">Jebel Ali</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Madinat Zayed</a>
                  </div>
                  <div className="py-1">
                    <a href="">Ruwais</a>
                  </div>
                  <div className="py-1">
                    <a href="">Liwa Oasis</a>
                  </div>
                  <div className="py-1">
                    <a href="">Dhaid</a>
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div className="py-1">
                    <a href="">Ghayathi</a>
                  </div>
                  <div className="py-1">
                    <a href="">Ar-Rams</a>
                  </div>
                  <div className="py-1">
                    <a href="">Dibba Al-Hisn</a>
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
