import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import icon from "../../../images/booking.png";
import "./Package.css";

const Package = ({ item }) => {
  const { _id, title, cost, duration, description, img, rating } = item;
  const history = useHistory();
  const handleBooking = (id) => {
    history.push(`/packages/${id}`);
  };
  return (
    <Col md={6} lg={4}>
      <Card className="card p-1 border-0">
        <Card.Img className="card-img mx-auto" variant="top" src={img} />
        <Card.Body>
          <div className="d-sm-flex justify-content-between  align-items-center">
            <p className="text-start fs-4 fw-bold">
              ${cost}
              <span className="fs-6 fw-lighter">/Per Parson</span>
            </p>
            <p className="text-start fs-6 fw-lighter">
              <i className="fs-6 fw-lighter me-1 fas fa-calendar-alt"></i>
              {duration}
            </p>
          </div>
          <Card.Title className="fw-bold text-start text-color">
            <i className="text-secondary me-1 fas fa-map-marker-alt"></i>
            {title}
          </Card.Title>
          <Card.Text className="text-start">
            {description.slice(0, 138)}.....
          </Card.Text>
          <p className="text-start text-color">
            {rating}K+
            <span className="text-secondary">Rating</span>{" "}
          </p>
          <button
            onClick={() => handleBooking(_id)}
            className="btn bg-orange text-white d-block"
          >
            Book Now
            <img className="ms-2" src={icon} alt="" />
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Package;
