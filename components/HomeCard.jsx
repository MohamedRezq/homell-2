import bannerImg from "assets/banner.jpg";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import dateFormat, { masks } from "dateformat";

const HomeCard = ({
  price,
  title,
  address,
  rooms,
  baths,
  coverPhoto,
  area,
  date,
  id
}) => {
  let publishDate = new Date(date);
  return (
    <Card className="my-3">
      <Link href={`/property/${id}`}>
        <a>
          <Card.Img variant="top" src={coverPhoto} style={{height: "300px"}} />
        </a>
      </Link>
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "bold" }}
          className="d-flex justify-content-between border-bottom border-1 pb-2"
        >
          <div style={{ fontSize: "13pt" }}>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} UAD
          </div>
          <div style={{ fontSize: "0.75rem" }} className="my-auto">
            {baths} <i class="fas fa-bath mx-1"></i> {rooms}{" "}
            <i class="fas fa-bed mx-1 mr-2"></i> {area.toFixed(0)}{" "}
            <span>
              m<sup>2</sup>
            </span>
          </div>
        </Card.Title>
        <Card.Text style={{ fontSize: "12pt", fontWeight: "bold" }}>
          {title}
        </Card.Text>
        <Card.Text className="d-flex justify-content-between" style={{ fontSize: "8pt" }}>
          <div>
            {address.map((loc, i) => (
              <span>{loc.name}, </span>
            ))}
          </div>
          <div className="my-auto px-2" style={{whiteSpace: "nowrap"}}>
            {dateFormat(publishDate, "dd mmm")}
          </div>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="d-flex align-content-center justify-content-between">
        <div className="d-flex">
          <div className="mx-2 d-flex align-content-center">
            <Link href="">
              <a className=" d-flex align-content-center">
                <Image
                  src={bannerImg}
                  width={30}
                  height={30}
                  className="rounded-circle"
                />
              </a>
            </Link>
          </div>
          <Link href="">
            <a className="text-muted py-auto my-auto">
              <div
                className="text-muted py-auto my-auto"
                style={{ fontSize: "10pt" }}
              >
                Development Group
              </div>
            </a>
          </Link>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default HomeCard;
