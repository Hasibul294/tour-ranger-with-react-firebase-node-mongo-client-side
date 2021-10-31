import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container my-5 p-4">
      <h5>
        Hello,
        <span className="mb-3 text-color fs-6">{user.displayName}</span>
      </h5>
      <h2 className="mb-5">Your Order List</h2>
      {orders?.map((order) => (
        <li>
          {order.name}::{order.email}::{order.status}
        </li>
      ))}
    </div>
  );
};

export default MyOrders;
