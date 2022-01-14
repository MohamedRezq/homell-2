import bannerImg from "assets/banner.jpg";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

const HomeCard = () => {
  return (
    <Card className="my-3">
      <Link href="">
        <a>
          <Card.Img variant="top" src={bannerImg.src} />
        </a>
      </Link>
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "bold" }}
          className="d-flex justify-content-between border-bottom border-1 pb-2"
        >
          <div style={{ fontSize: "13pt" }}>22,799,000 EGP</div>
          <div style={{ fontSize: "0.75rem" }} className="my-auto">
            2 <i class="fas fa-bath mx-1"></i> 3{" "}
            <i class="fas fa-bed mx-1 mr-2"></i> 250{" "}
            <span>
              m<sup>2</sup>
            </span>
          </div>
        </Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
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
              <div className="text-muted py-auto my-auto" style={{fontSize: "12pt"}}>
                Talaat Mostafa Group
              </div>
            </a>
          </Link>
        </div>
        <div className="homeCardSellerType">
          <Button disabled size="sm">Developers</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default HomeCard;
