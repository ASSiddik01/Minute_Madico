import React from "react";
import Button from "../components/Button";
import Clock from "../components/Clock";
import Span from "../components/Span";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-transparent ${process.env.NEXT_PUBLIC_gt}`}
          >
            Find The Best Doctor
          </h1>
          <p className="leading-relaxed">
            Great doctor if you need your family member to get immediate
            assistance, emergency treatment or a simple consultation.
          </p>
          <Span />
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Type doctor name
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <Button text="Search" />
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            <span className="font-bold">Note:</span> Please search best doctors
            here,
          </p>
          <div className="">
            <Clock />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="images/hero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
