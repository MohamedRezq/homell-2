import FloatingSocialBar from "components/FloatingSocialBar";
import Head from "next/head";
import { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { getDetailedProp, getRelatedProps } from "utils/bayutAPI";
import { connect } from "react-redux";
import FeatureCarousel from "sections/FeatureCarousel";
import FeatureSection from "sections/FeatureSection";

const Page = ({ propShown, relatedProps }) => {
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
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
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
                  <td>{propShown.state ? propShown.state : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Purpose: </td>
                  <td>{propShown.purpose ? propShown.purpose : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Price: </td>
                  <td>
                    {propShown.price ? `${propShown.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} UAD` : "Not Detected"}
                  </td>
                </tr>
                <tr>
                  <td>Product: </td>
                  <td>{propShown.product ? propShown.product : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Title: </td>
                  <td>{propShown.title ? propShown.title : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Created At: </td>
                </tr>
                <tr>
                  <td>No. of Rooms: </td>
                  <td>{propShown.rooms ? propShown.rooms : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>No. of Baths: </td>
                  <td>{propShown.baths ? propShown.baths : "Not Detected"}</td>
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
                  <td>Area (m<sup>2</sup>): </td>
                  <td>
                    {propShown.area ? `${propShown.area.toFixed(0)}` : "Not Detected"}
                  </td>
                </tr>
                <tr>
                  <td>Owner: </td>
                  <td>{propShown.contactName ? propShown.contactName : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Mobile Phone: </td>
                  <td>{(propShown.phoneNumber.mobile) ? propShown.phoneNumber.mobile : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Phone: </td>
                  <td>{propShown.phoneNumber.phone ? propShown.phoneNumber.phone : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Whatsapp: </td>
                  <td>{propShown.phoneNumber.whatsapp ? propShown.phoneNumber.whatsapp : "Not Detected"}</td>
                </tr>
                <tr>
                  <td>Agency: </td>
                  <td>{propShown.agency.name ? propShown.agency.name : "Not Detected"}</td>
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
            <div className="px-2"><FeatureSection relatedProps={relatedProps} /></div>
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
  const relatedProps = await getRelatedProps(propShown.purpose, propShown.price);
  return {
    props: {
      propShown: propShown,
      relatedProps: relatedProps.hits,
    },
  };
}
