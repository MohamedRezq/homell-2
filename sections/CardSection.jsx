import {
  Row,
  Col,
  Card,
  Pagination
} from "react-bootstrap";
import bannerImg from "assets/banner.jpg";
import Image from "next/image";

const CardSection = () => {
  return (
    <div className="my-5">
      <Row xs={1} md={2} lg={3} className="g-2">
        {Array.from({ length: 15 }).map((_, idx) => (
          <Col>
            <Card className="my-3">
              <Card.Img variant="top" src={bannerImg.src} />
              <Card.Body>
                <Card.Title
                  style={{ fontWeight: "bold" }}
                  className="d-flex justify-content-between border-bottom border-1 pb-2"
                >
                  <div>799,000 EGP</div>
                  <div style={{ fontSize: "0.75rem" }} className="my-auto">
                    2 <i class="fas fa-bath mx-1"></i> 3{" "}
                    <i class="fas fa-bed mx-1 mr-2"></i> 250{" "}
                    <span>
                      m<sup>2</sup>
                    </span>
                  </div>
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex align-content-center">
                <div className="mx-2 d-flex align-content-center">
                  <Image
                    src={bannerImg}
                    width={30}
                    height={30}
                    className="rounded-circle"
                  />
                </div>
                <div className="text-muted py-auto my-auto">
                  Talaat Mostafa Group
                </div>
              </Card.Footer>
            </Card>
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
