import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";

const AllToy = () => {
  const allToys = useLoaderData().slice(0, 20);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter toys based on search query
  const filteredToys = allToys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <section className="relative mt-10 mb-5 bg-[url(https://i.ibb.co/jbRfkZZ/hand-drawn-christmas-toys-background-23-2148758008.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute "></div>

        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              All Toy
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl mt-9 text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Enriching Childhood Moments
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          All toys offer endless joy and entertainment, captivating children
          with their imaginative play and fostering creativity while providing
          hours of fun and laughter.
        </p>

        <div className="m-14">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by toy name..."
            className="py-2 px-4 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>

      <div>
        {filteredToys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </>
  );
};

export default AllToy;
