import { Row, Col } from "react-bootstrap";
import HomeCard from "components/HomeCard";
import FilterBar from "components/FilterBar";
import { connect } from "react-redux";
import PaginationBar from "components/PaginationBar";

const CardSection = ({ propsForShow, currentPage }) => {
  return (
    <div className="my-5 py-5">
      <FilterBar />
      <Row xs={1} lg={2} className="g-2">
        {propsForShow.map((prop, i) => (
          <Col>
            <HomeCard
              price={prop.price}
              title={prop.title}
              rooms={prop.rooms}
              baths={prop.baths}
              coverPhoto={prop.coverPhoto.url}
              area={prop.area}
              address={prop.location}
              date={prop.createdAt}
              id={prop.externalID}
              key={i}
            />
          </Col>
        ))}
      </Row>

    </div>
  );
};

const mapStateToProps = (state) => ({
  propsForShow: state.apiValues.propsForSale,
  currentPage: state.apiValues.currentPage,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CardSection);