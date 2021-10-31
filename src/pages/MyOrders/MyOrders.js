import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Col, Row } from "react-bootstrap";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const id = user.email;
  //   console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, want to delete this order?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Order Deleted Successfully");
          const remainingOrder = orders.filter((order) => order._id !== id);
          setOrders(remainingOrder);
        });
    }
  };

  return (
    <div className="container my-5 p-4">
      <h2 className="mb-5 text-color">Your Order List</h2>
      <h4 className="mb-3">Order item: {orders?.length}</h4>
      {orders?.map((order) => (
        <div key={order._id} className="my-order">
          <Row>
            <Col lg={3}>
              <p>{order.name}</p>
            </Col>
            <Col lg={3}>
              <p>{order.email}</p>
            </Col>
            <Col lg={3}>
              <p>{order.packageTitle}</p>
            </Col>
            <Col lg={2}>
              {order.status === "confirm" ? (
                <p className="text-success">Confirm</p>
              ) : (
                <p className="text-danger">Pending</p>
              )}
            </Col>
            <Col lg={1}>
              <button
                className="border-0 rounded"
                onClick={() => handleDelete(order._id)}
              >
                <i class="text-danger fas fa-trash-alt"></i>
              </button>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
