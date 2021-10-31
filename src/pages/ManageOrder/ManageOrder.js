import React, { useEffect, useState } from "react";

const ManageOrder = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container my-5 p-4">
      <h5 className="mb-3 text-color">Admin Panel</h5>
      <h2 className="mb-5">Manage All Orders</h2>
      {orders?.map((order) => (
        <li>
          {order.name}::{order.email}::{order.status}
        </li>
      ))}
    </div>
  );
};

export default ManageOrder;
