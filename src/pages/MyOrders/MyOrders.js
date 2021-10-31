import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router";
import { Col, Row } from "react-bootstrap";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  const id = user.email;
  //   console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container my-5 p-4">
      {user.email ? (
        <div>
          <h5>
            Hello,
            <span className="mb-3 text-color fs-6">{user.displayName}</span>
          </h5>
          <h2 className="mb-5">Your Order List</h2>
          <h4 className="mb-3">Order item: {orders?.length}</h4>
          {orders?.map((order) => (
            <div key={order._id} className="my-order">
              <Row>
                <Col md={3}>
                  <p>{order.name}</p>
                </Col>
                <Col md={3}>
                  <p>{order.email}</p>
                </Col>
                <Col md={3}>
                  <p>{order.packageTitle}</p>
                </Col>
                <Col md={2}>
                  <p>{order.status}</p>
                </Col>
                <Col md={1}>
                  <button onClick={() => handleDelete(order._id)}>X</button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      ) : (
        history.push("/home")
      )}
    </div>
  );
};

export default MyOrders;
