import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://scary-broomstick-16729.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner className="text-center" animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div className="my-5 p-4">
      <h5 className="mb-3 text-color">Choose Your Package</h5>
      <h2 className="mb-0">Select Your Best Package</h2>
      <h2 className="mt-0"> For Your Travel</h2>
      <Container>
        <Row className="g-4 my-3">
          {packages.map((item) => (
            <Package key={item.id} item={item}></Package>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;
