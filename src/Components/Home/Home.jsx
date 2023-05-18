import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import TabCompo from "../Tabs/TabCompo";
import Section1 from "../ExtraSections/Section1";

const Home = () => {
  return (
    <div>
      <Banner />
      <Gallery />
      <TabCompo />
      <Section1 />
    </div>
  );
};

export default Home;
