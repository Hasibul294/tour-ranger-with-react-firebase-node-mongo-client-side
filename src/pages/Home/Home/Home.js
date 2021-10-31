import React from "react";
import Banner from "../Banner/Banner";
import Comments from "../Comment/Comment";
import Packages from "../Packages/Packages";
import ShowUp from "../ShowUp/ShowUp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Packages></Packages>
      <ShowUp></ShowUp>
      <Comments></Comments>
    </div>
  );
};

export default Home;
