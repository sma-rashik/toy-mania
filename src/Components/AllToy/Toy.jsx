import React from "react";

const Toy = ({ toy }) => {
  const { picture, name, price, rating, quantity } = toy;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-60 p-6" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">Name: {name} </h2>
          <p className="text-lg">Price: ${price}</p>
          <p className="text-lg">Available Quantity: {quantity}</p>
          <p className="text-lg">Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toy;
