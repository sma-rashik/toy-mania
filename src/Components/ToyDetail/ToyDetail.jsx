import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetail = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <h2>Toys are here:{toys.name}</h2>
    </div>
  );
};

export default ToyDetail;
