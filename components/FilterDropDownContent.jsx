import { Button, Col, ListGroup, Row } from "react-bootstrap";
import InputRange from "./InputRange";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import {
  clearFilters,
  filterByFurnishStatus,
  filterByType,
} from "store/userValues/userValuesSlice";
import { useEffect, useState } from "react";
const FilterDropDownContent = ({
  minBaths,
  maxBaths,
  minRooms,
  maxRooms,
  minPrice,
  maxPrice,
  minArea,
  maxArea,
  userPurpose,
  userMinPrice,
  userMaxPrice,
  userMinRooms,
  userMaxRooms,
  userMinBaths,
  userMaxBaths,
  userMinArea,
  userMaxArea,
  userFurnishingStatus,
  userTypeId,
  filterByFurnishStatus,
  filterByType,
  clearFilters,
}) => {
  const router = useRouter();
  return (
    <div className="d-flex px-5 filterDrop">
      <ListGroup className="d-flex-column d-md-flex-row w-100">
        <Row className="w-100 border-bottom-1">
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Price (EGP)
              </div>
              <InputRange min={minPrice} max={maxPrice} filterOn="price" />
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Area (m{<sup>2</sup>})
              </div>
              <InputRange min={minArea} max={maxArea} filterOn="area" />
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Rooms (no.)
              </div>
              <InputRange min={minRooms} max={maxRooms} filterOn="rooms" />
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Bathrooms (no.)
              </div>
              <InputRange min={minBaths} max={maxBaths} filterOn="baths" />
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
                  type="radio"
                  name="flexRadio"
                  value="unfurnished"
                  id="flexCheckDefault"
                  onChange={(e) => {
                    e.preventDefault();
                    filterByFurnishStatus(e.target.value);
                  }}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Un-Furnished
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadio"
                  value="furnished"
                  id="flexCheckChecked"
                  onChange={(e) => {
                    e.preventDefault();
                    filterByFurnishStatus(e.target.value);
                  }}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Furnished
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadio"
                  value=""
                  id="flexCheckChecked"
                  onChange={(e) => {
                    e.preventDefault();
                    filterByFurnishStatus("");
                  }}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Both
                </label>
              </div>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <div className="py-2" style={{ fontWeight: "bold" }}>
                Property Type
              </div>
              <div>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    e.preventDefault();
                    filterByType(e.target.value);
                  }}
                >
                  <option selected>All Types ...</option>
                  <option value="4">Apartment</option>
                  <option value="16">Villa</option>
                  <option value="3">Penthouse</option>
                  <option value="18">Hotel</option>
                  <option value="19">Compound</option>
                  <option value="14">Residential Plot</option>
                  <option value="12">Residential Floor</option>
                  <option value="17">Residential Building</option>
                  <option value="5">Office</option>
                  <option value="6">Shop</option>
                  <option value="7">Warehouse</option>
                  <option value="9">Labour camp</option>
                  <option value="25">Commercial Villa</option>
                  <option value="20">Bulk Units</option>
                  <option value="15">Commercial Plot</option>
                </select>
              </div>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0"></Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0">
            <ListGroup.Item className="d-flex flex-column px-sm-5 py-4">
              <Button
                variant="success"
                className="mx-2 mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    `/filter/?purpose=${userPurpose}&minPrice=${userMinPrice}&maxPrice=${userMaxPrice}&minArea=${userMinArea}&maxArea=${userMaxArea}&minRooms=${userMinRooms}&maxRooms=${userMaxRooms}&minBaths=${userMinBaths}&maxBaths=${userMaxBaths}&type=${userTypeId}&furnishStatus=${userFurnishingStatus}`
                  );
                }}
              >
                Apply Filters
              </Button>
              <Button
                variant="danger"
                className="mx-2 mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  clearFilters();
                  router.reload();
                }}
              >
                Reset Filters
              </Button>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={6} xl={4} className="px-0 py-0"></Col>
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
  userPurpose: state.userValues.userPurpose,
  userMinPrice: state.userValues.userMinPrice,
  userMaxPrice: state.userValues.userMaxPrice,
  userMinRooms: state.userValues.userMinRooms,
  userMaxRooms: state.userValues.userMaxRooms,
  userMinBaths: state.userValues.userMinBaths,
  userMaxBaths: state.userValues.userMaxBaths,
  userMinArea: state.userValues.userMinArea,
  userMaxArea: state.userValues.userMaxArea,
  userFurnishingStatus: state.userValues.userFurnishingStatus,
  userTypeId: state.userValues.userTypeId,
});
const mapDispatchToProps = {
  filterByFurnishStatus,
  filterByType,
  clearFilters,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDropDownContent);
