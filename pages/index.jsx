import FloatingSocialBar from "components/FloatingSocialBar";
import InputRange from "components/InputRange";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import CardSection from "sections/CardSection";
import FeatureCarousel from "sections/FeatureCarousel";
import FeatureSection from "sections/FeatureSection";

export default function Home() {
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
        <FeatureCarousel />
        <InputRange />
        <FeatureSection />
      </div>
    </Container>
  );
}
