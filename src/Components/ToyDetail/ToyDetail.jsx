import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetail = () => {
  const toys = useLoaderData();
  const { picture, name, price, rating, quantity, subCategory, description } =
    toys;
  return (
    <>
      <section className="relative mt-10     bg-[url(https://i.ibb.co/jbRfkZZ/hand-drawn-christmas-toys-background-23-2148758008.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute "></div>

        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Information of :{name}
            </h1>
          </div>
        </div>
      </section>

      <div className="w-1/2  mx-auto ">
        <div className="hero  min-h-screen ">
          <div className="hero-content border-2 shadow-lg flex-col lg:flex-row">
            <img src={picture} className="w-64 h-64 rounded-lg shadow-2xl" />
            <div className="ml-3">
              <h1 className="text-3xl font-bold">Name: {name}</h1>
              <p className="mt-2">Description: {description}</p>
              <p className="mt-2 text-lg font-semibold">
                Sub-Category: {subCategory}
              </p>
              <p className="mt-2 text-lg font-semibold ">Price: ${price}</p>
              <p className="mt-2 text-lg font-semibold">Rating: {rating}</p>
              <p className="mt-2 text-lg font-semibold">
                Available Quantity: {quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetail;
