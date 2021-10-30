import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./BookPackage.css";

const BookPackage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [pack, setPack] = useState();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  return (
    <div className="my-5 p-4">
      <h5 className="mb-3 text-color">Book Your Package</h5>
      <h2 className="mb-2">Your Package Details</h2>

      <Container>
        <Row className="g-4 my-3">
          <Col md={7} lg={8}>
            <div>
              <img className="book-image mb-3" src={pack?.img} alt="" />
              <hr className="text-secondary mb-2" />
              <div className="text-start d-flex justify-content-between align-items-center">
                <h2 className="text-color">
                  <i class="text-secondary me-1 fas fa-map-marker-alt"></i>
                  {pack?.title}
                </h2>
                <p>
                  <i className="fs-6 fw-lighter me-1 fas fa-calendar-alt"></i>
                  {pack?.duration}
                </p>
              </div>
              <hr className="text-secondary mb-2" />
              <h4 className="text-start">Overview</h4>
              <p className="text-start">{pack?.description}</p>
              <hr className="text-secondary mb-2" />
            </div>
          </Col>
          <Col md={5} lg={4}>
            <div className="bg-light p-3 rounded">
              <h4>Book This Package</h4>
              <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Full Name" required />
                <input {...register("email")} value={user.email} />
                <input
                  {...register("address")}
                  placeholder="Your Address"
                  required
                />
                <input type="number" {...register("cost")} />
                <input
                  type="number"
                  {...register("age", { min: 18, max: 99 })}
                  placeholder="Age (18 to 90)"
                  required
                />
                <textarea {...register("massage")} placeholder="Massage" />
                <input
                  className="bg-orange border-0 text-white py-2 rounded-pill"
                  type="submit"
                  value="Confirm"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookPackage;
