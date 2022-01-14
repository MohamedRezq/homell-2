import { Row, Col, Pagination } from "react-bootstrap";
import HomeCard from "components/HomeCard";
import FilterBar from "components/FilterBar";

const CardSection = () => {
  return (
    <div className="my-5 py-5">
      <FilterBar />
      <Row xs={1} md={2} lg={3} className="g-2">
        {Array.from({ length: 15 }).map((_, idx) => (
          <Col>
            <HomeCard />
          </Col>
        ))}
      </Row>
      <div className="paginationDiv d-flex justify-content-center my-5 align-content-center mx-5 mx-md-1">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export default CardSection;
