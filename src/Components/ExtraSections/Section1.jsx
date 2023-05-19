import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewSection from "./ReviewSection";

const Section1 = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  data-aos="zoom-in-up"
                  alt="House"
                  src="https://i.ibb.co/yFzv5gw/hand-drawn-kids-toys-facebook-post-23-2149614434.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 bg-clip-text  text-transparent font-bold sm:text-3xl">
                  Half Off: Unleash Your Imagination at Half the Price!
                </h2>

                <p className="mt-4 text-gray-600">
                  Huge Savings: Enjoy a Whopping 50% Discount on Kids' Toys and
                  Games! Limited Time Offer, Shop Now and Delight Your Little
                  Ones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewSection />
    </div>
  );
};

export default Section1;
