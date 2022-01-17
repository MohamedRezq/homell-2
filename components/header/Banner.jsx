import Image from "next/image";
import banner from "assets/banner-light.jpg";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div className="position-relative">
      <div className="position-absolute bannerImg">
        <Image src={banner} />
      </div>
      <div className="position-absolute top-0 start-0 w-100 h-100 headerContainer"></div>
      <div className="ghostBanner d-hidden">
        <Image className="bannerImg" src={banner} />
      </div>
      <div className="position-absolute searchBar w-100 d-none d-md-flex justify-content-center">
          <div className="mb-3 w-75">
              <SearchBar size="lg"/>
          </div>
      </div>
      <div className="position-absolute top-0 w-100 d-flex d-md-none justify-content-center px-2" style={{ top: "10%", zIndex: 2}}>
          <div className="mb-3 w-100">
              <SearchBar size="md" />
          </div>
      </div>
      <div className="bannerTextContainer d-none d-md-flex position-absolute w-100 justify-content-center">
        <div className="w-75 mx-4">
          <h6 className="bg-dark px-2 py-3 bannerText text-center text-white">
            Get your dream house in UAE with the lowest prices offered by the
            top real-estate developers in the World ! <br />
            <h5 style={{ fontWeight: "bold", marginTop: "5px" }}>
              {" "}
              - HOMELL -{" "}
            </h5>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;
