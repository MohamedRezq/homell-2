import FloatingSocialBar from "components/FloatingSocialBar";
import Head from "next/head";
import { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { getDetailedProp } from "utils/bayutAPI";
import { connect } from "react-redux";
import FeatureCarousel from "sections/FeatureCarousel";

const Page = ({ propShown }) => {
  useEffect(() => {}, []);
  return (
    <Container className="lg-container">
      <Head>
        <title>HOMELL</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="mainContainer position-relative">
        <FloatingSocialBar />
        <Row className="my-5 propDataTable">
          <Col xs={12} lg={6} className="my-5">
            <FeatureCarousel images={propShown.photos} />
          </Col>
          <Col xs={12} lg={6} className="my-5">
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>State: </td>
                  <td>{propShown.state}</td>
                </tr>
                <tr>
                  <td>Purpose: </td>
                  <td>{propShown.purpose}</td>
                </tr>
                <tr>
                  <td>Price: </td>
                  <td>
                    {propShown.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    UAD
                  </td>
                </tr>
                <tr>
                  <td>Product: </td>
                  <td>{propShown.product}</td>
                </tr>
                <tr>
                  <td>Title: </td>
                  <td>{propShown.title}</td>
                </tr>
                <tr>
                  <td>Created At: </td>
                  <td>{propShown.title}</td>
                </tr>
                <tr>
                  <td>No. of Rooms: </td>
                  <td>{propShown.rooms}</td>
                </tr>
                <tr>
                  <td>No. of Baths: </td>
                  <td>{propShown.baths}</td>
                </tr>
                <tr>
                  <td>Furnsishing Status: </td>
                  <td>
                    {propShown.furnishingStatus
                      ? propShown.furnishingStatus
                      : "Not Detected"}
                  </td>
                </tr>
                <tr>
                  <td>Area: </td>
                  <td>
                    {propShown.area.toFixed(0)} m<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Owner: </td>
                  <td>{propShown.contactName}</td>
                </tr>
                <tr>
                  <td>Mobile Phone: </td>
                  <td>{propShown.phoneNumber.mobile}</td>
                </tr>
                <tr>
                  <td>Phone: </td>
                  <td>{propShown.phoneNumber.phone}</td>
                </tr>
                <tr>
                  <td>Whatsapp: </td>
                  <td>{propShown.phoneNumber.whatsapp}</td>
                </tr>
                <tr>
                  <td>Agency: </td>
                  <td>{propShown.agency.name}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} className="d-flex flex-column my-5">
            <h4 className="px-3">Description</h4>
            <div className="my-2">
              <hr className="w-100 bg-dark" />
            </div>
            <div className="px-2">{propShown.description}</div>
          </Col>
          <Col xs={12} className="d-flex flex-column my-5">
            <h4 className="px-3 mb-4">Related Properties</h4>
            <div className="px-2">{propShown.description}</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

export async function getServerSideProps({ query }) {
  const propShown = await getDetailedProp(query.id);
  return {
    props: {
      propShown: propShown,
    },
  };
}
