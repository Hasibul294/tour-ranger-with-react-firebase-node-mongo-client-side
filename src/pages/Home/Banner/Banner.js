import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner-1.jpg";
import banner2 from "../../../images/banner-2.jpg";
import banner3 from "../../../images/banner-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="text-uppercase">
            <div className="banner-container">
              <h1 className="fst-italic text-start">
                Amazing tour in indonesia
              </h1>
              <p className="text-start text-color">7 Days, 8 Night Tour</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption className="text-uppercase">
            <div className="banner-container">
              <h1 className="fst-italic text-start">Amazing tour in japan</h1>
              <p className="text-start text-color">10 Days, 11 Night Tour</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="text-uppercase">
            <div className="banner-container">
              <h1 className="fst-italic text-start">Amazing tour in vietnam</h1>
              <p className="text-start text-color">5 Days, 6 Night Tour</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
