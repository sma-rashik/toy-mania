import React from "react";

const Banner = () => {
  return (
    <>
      <section className="relative mt-10     bg-[url(https://i.ibb.co/jbRfkZZ/hand-drawn-christmas-toys-background-23-2148758008.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute "></div>

        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
