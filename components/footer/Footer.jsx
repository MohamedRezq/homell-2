import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import bannerImg from "assets/banner.jpg";
import footer from "assets/footer.png";
import footerSky from "assets/footerSky.jpg";

const Footer = () => {
  return (
    <div
      className="bg-dark pt-5 text-white footer"
      style={{ marginTop: "150px", backgroundImage: `url(${footerSky.src})` }}
    >
      <Row xs={1} lg={4} className="mx-0">
        <Col className="position-relative footerImgHolder d-none d-lg-block">
          <Image src={bannerImg} />
        </Col>
        <FooterSection colTitle="About Developer" colELements={["My Portfolio", "My Recent Projects"]} />
        <FooterSection colTitle="Contact" colELements={["11311 Cairo, Egypt","mohamed.rizq99@gmail.com", "+20 0109 941 9431"]} />
        <FooterSection colTitle="LEGAL" colELements={["Terms & Conditions", "Privacy Policy", "Terms of use"]} />
        <Col></Col>
        <Col lg={9}>
          <div className="mx-2 my-2">
            <hr className="w-100 bg-white" />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between px-4 display-6">
            <div>
              All Rights Reserved <i className="far fa-copyright"></i> 2022
            </div>
            <div className="align-self-center my-3 my-lg-0 d-flex">
              <div>
                <a href="">
                  <i className="fab fa-twitter fa-lg mx-2"></i>{" "}
                </a>
              </div>
              <div>
                <a href="">
                  <i className="fab fa-facebook-square fa-lg mx-2"></i>{" "}
                </a>
              </div>
              <div>
                <a href="">
                  <i className="fab fa-linkedin fa-lg mx-2"></i>{" "}
                </a>
              </div>
              <div>
                <a href="">
                  <i className="fab fa-github fa-lg mx-2"></i>{" "}
                </a>
              </div>
              <div>
                <a href="">
                  <i className="fab fa-youtube fa-lg mx-2"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={3}></Col>
        <Col lg={6} className="d-flex justify-content-center pt-5 mt-5">
          <Image src={footer} />
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
};

export default Footer;

const FooterSection = ({colTitle, colELements}) => {
  return (
    <Col className="px-5 my-4 my-lg-2">
      <div className="d-flex flex-column align-items-center align-items-lg-start">
        <div style={{ fontWeight: "bold" }} className="my-2">
          {colTitle}
        </div>
        <div className="d-flex flex-column align-items-center align-items-lg-start">
          {colELements.map((elem, i) => (
            <div key={i}>
            <a href="">{elem}</a>
          </div>
          ))}
        </div>
      </div>
    </Col>
  );
};
