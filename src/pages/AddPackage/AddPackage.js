import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://scary-broomstick-16729.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("New Package Added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="container my-5 p-4">
      <h5 className="mb-3 text-color">Admin Panel</h5>
      <h2 className="mb-5">Add A New Package</h2>
      <Row className="justify-content-center">
        <Col lg={8}>
          <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title")} placeholder="Title" required />
            <textarea
              {...register("description")}
              placeholder="Description"
              required
            />
            <input
              type="number"
              {...register("cost")}
              placeholder="Cost"
              required
            />
            <input {...register("duration")} placeholder="Duration" required />
            <input {...register("rating")} placeholder="Rating" required />
            <input {...register("img")} placeholder="Img Url" required />
            <input
              className="bg-orange border-0 text-white py-2 rounded-pill"
              type="submit"
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddPackage;
