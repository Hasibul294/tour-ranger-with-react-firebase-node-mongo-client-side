import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../images/ShowUp/tour-guide.png";
import img2 from "../../../images/ShowUp/user.png";
import img3 from "../../../images/ShowUp/experience.png";
import img4 from "../../../images/ShowUp/celebrating.png";
import "./ShowUp.css";

const ShowUp = () => {
  return (
    <>
      <div className="showUp-container p-5">
        <h4 className="fw-bold text-color pt-5">Why Tour.Ranger</h4>
        <h2 className="fw-bold">Why You Are Travel With Tour.Ranger</h2>
        <Container>
          <Row className="g-4 py-3 text-white">
            <Col md={6} lg={3}>
              <div className="show-up">
                <img className="p-4 me-3" src={img1} alt="" />
                <h5>2000+ Our worldwide guide</h5>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="show-up">
                <img className="p-4 me-3" src={img2} alt="" />
                <h5>100% trusted travel agency</h5>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="show-up">
                <img className="p-4 me-3" src={img3} alt="" />
                <h5>10+ year of travel experience</h5>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="show-up">
                <img className="p-4 me-3" src={img4} alt="" />
                <h5>90% of our traveller happy</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShowUp;
