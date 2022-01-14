import { Button, Col, ListGroup, Row } from "react-bootstrap";
import InputRange from "./InputRange";
import { connect } from "react-redux";

const FilrerDropDownContent = ({
  minBaths,
  maxBaths,
  minRooms,
  maxRooms,
  minPrice,
  maxPrice,
  minArea,
  maxArea,
}) => {
  return (
    <div className="d-flex px-5 filterDrop">
      <ListGroup className="d-flex-column d-md-flex-row w-100">
        <Row className="w-100 border-bottom-1">
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Price (EGP)
              </div>
              <InputRange min={minPrice} max={maxPrice} />
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Area (m{<sup>2</sup>})
              </div>
              <InputRange min={minArea} max={maxArea} />
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Rooms (no.)
              </div>
              <InputRange min={minRooms} max={maxRooms} />
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Bathrooms (no.)
              </div>
              <InputRange min={minBaths} max={maxBaths} />
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Furnishing Status
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Unfurnished
                </label>
              </div>
              <div class="form-check h-100">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Furnished
                </label>
              </div>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <Button variant="dark" className="mx-5 mb-5">
                Apply Filters
              </Button>
            </ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
    </div>
  );
};
const mapStateToProps = (state) => ({
  minRooms: state.apiValues.minRooms,
  maxRooms: state.apiValues.maxRooms,
  minArea: state.apiValues.minArea,
  maxArea: state.apiValues.maxArea,
  minBaths: state.apiValues.minBaths,
  maxBaths: state.apiValues.maxBaths,
  minPrice: state.apiValues.minPrice,
  maxPrice: state.apiValues.maxPrice,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilrerDropDownContent);
