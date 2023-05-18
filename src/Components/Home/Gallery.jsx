import React from "react";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img5 from "../../assets/5.webp";
import img7 from "../../assets/7.webp";
import img8 from "../../assets/8.webp";
import img9 from "../../assets/gettyimages-1288936377-612x612.jpg";
import img10 from "../../assets/gettyimages-183770959-612x612.jpg";
import img11 from "../../assets/gettyimages-183842628-612x612.jpg";
const Gallery = () => {
  return (
    <>
      <div className=" text-center mt-28">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Favourite Toys <br /> Choosen By Kids
        </h1>
        <p className="py-6 text-xl">
          Chosen by kids, these cherished playthings ignite imagination,
          providing endless fun and cherished memories
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-11 gap-4">
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img1}
            alt=""
            className="h-[350px] w-80% object-cover transition  duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img2}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img3}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img5}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img7}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img8}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img9}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img10}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>{" "}
        <div className="relative  border-4 shadow-xl border-gray-100  block group">
          <img
            src={img11}
            alt=""
            className="h-[350px] w-80% object-cover transition duration-500 p-9 group-hover:opacity-90 hover:scale-105 sm:h-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
