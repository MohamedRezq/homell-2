import FloatingSocialBar from "components/FloatingSocialBar";
import InputRange from "components/InputRange";
import Head from "next/head";
import { useEffect } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import CardSection from "sections/CardSection";
import FeatureCarousel from "sections/FeatureCarousel";
import FeatureSection from "sections/FeatureSection";
import { filterProps, getPropsForSale } from "utils/bayutAPI";
import { storeForSaleProps } from "store/apiValues/apiValuesSlice";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import NoResults from "components/NoResults";

const Home = ({
  propsForSale,
  storeForSaleProps,
}) => {
  useEffect(() => {
    storeForSaleProps(propsForSale.hits);
  }, []);
  if (propsForSale.hits.length === 0) {
   return (
       <NoResults />
   )   
  }
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
      <div className="mainContainer px-2 position-relative">
        <FloatingSocialBar />
        <CardSection />
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
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
const mapDispatchToProps = { storeForSaleProps };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export async function getServerSideProps({ query }) {
  const propForSale = await filterProps(
    query.purpose,
    query.minPrice,
    query.maxPrice,
    query.minRooms,
    query.maxRooms,
    query.minBaths,
    query.maxBaths,
    query.minArea,
    query.maxArea,
    query.furnishStatus,
    query.type,
    query.page
  );
  return {
    props: {
      propsForSale: propForSale,
    },
  };
}
