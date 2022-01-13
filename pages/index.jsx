import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import CardSection from "sections/CardSection";
import FeatureCarousel from "sections/FeatureCarousel";

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
      </Head>
      <div>
        <CardSection />
        <FeatureCarousel />
      </div>
    </Container>
  );
}
