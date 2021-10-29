import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Package = ({ item }) => {
  const { _id, title, img } = item;
  const history = useHistory();
  const handleBooking = () => {
    history.push(`/details/${_id}`);
  };
  return (
    <Col md={4}>
      <Card className="card p-1 border-0">
        <Card.Img className="card-img mx-auto" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold text-center">{title}</Card.Title>
          <button
            onClick={handleBooking}
            className="btn btn-primary d-block mx-auto"
          >
            Booking
            <i className="fas fa-info-circle ms-2 p-1"></i>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Package;
