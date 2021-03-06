import { Carousel,  } from "react-bootstrap";
import banner from 'assets/banner.jpg';

const FeatureCarousel = ({ images }) => {
  return (
    <div>
      <Carousel fade>
        {images.map((img, i) => (
          <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={img.url}
            alt={img.title}
            height={500}
          />
          <Carousel.Caption>
            <h6 className="text-white">{img.title}</h6>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureCarousel;
