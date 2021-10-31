import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../images/left-quote.png";

const Comments = () => {
  return (
    <div className="my-5 py-3">
      <h4 className="text-color pt-5">Our Traveller Say</h4>
      <h2 className="">What Our Traveller Say About Us</h2>

      <Container>
        <Row className="g-4 py-3 my-4">
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-start">
              <img className="me-3" src={img} alt="" />
              <div>
                <h2 className="text-start text-primary">Shwan Paul</h2>
                <p className="text-start fst-italic text-success">Traveller</p>
                <h4 className="text-start fw-light">
                  i am more than fully satisfied with the excellent service
                  provided so carefully and their experience guides.
                </h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-start">
              <img className="me-3" src={img} alt="" />
              <div>
                <h2 className="text-start text-primary">Jahid Hasan</h2>
                <p className="text-start fst-italic text-success">Tourist</p>
                <h4 className="text-start fw-light">
                  I am very satisfied with their transport services and they
                  deliver wonderful service and they provided fresh food.
                </h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-start">
              <img className="me-3" src={img} alt="" />
              <div>
                <h2 className="text-start text-primary">Dina jems</h2>
                <p className="text-start fst-italic text-success">Traveller</p>
                <h4 className="text-start fw-light">
                  Very fast services and they actually provided 24/7 service
                  which is very amazing. So i give a big thumbs up.
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Comments;
