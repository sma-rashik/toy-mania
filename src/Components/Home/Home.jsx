import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import Gallery from "./Gallery";
import TabCompo from "../Tabs/TabCompo";
import Section1 from "../ExtraSections/Section1";

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div>
      <Banner data-aos="fade-up" />{" "}
      {/* Apply AOS animation to the Banner component */}
      <Gallery data-aos="flip-left" data-aos-delay="100" />
      <TabCompo />
      <Section1 />
    </div>
  );
};

export default Home;
