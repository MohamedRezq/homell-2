import FloatingSocialBar from "./../components/FloatingSocialBar";
import Head from "next/head";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import CardSection from "./../sections/CardSection";
import { getPropsForSale } from "./../utils/bayutAPI";
import { storeForSaleProps } from "./../store/apiValues/apiValuesSlice";
import { connect } from "react-redux";

const Home = ({ propsForSale, storeForSaleProps }) => {
  useEffect(() => {
    storeForSaleProps(propsForSale.hits)
  }, [])
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
      <div className="mainContainer px-2 position-relative">
        <FloatingSocialBar />
        <CardSection />
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { storeForSaleProps };

export default connect(mapStateToProps, mapDispatchToProps)(Home);


export async function getStaticProps() {
  const propForSale = await getPropsForSale();
  return {
    props: {
      propsForSale: propForSale,
    },
  };
}
