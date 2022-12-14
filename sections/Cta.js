import React from "react";
import Button from "../components/Button";

const Cta = () => {
  return (
    <div className=" md:text-center lg:text-start">
      <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2
          className={`text-2xl font-semibold font-display sm:text-3xl text-accent`}
        >
          We have got more coming...
        </h2>
        <p className="mt-2 lg:max-w-xl text-base text-gray-400 md:text-center lg:text-start">
          Want to hear from us when we add new components? Sign up for our
          newsletter and we will email you every time we release a new batch of
          components.
        </p>
        <div className="mt-6 sm:flex lg:justify-start md:justify-center">
          <form className="flex flex-col justify-start items-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <Button text="Subscribe" />
          </form>
        </div>
        <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
          <img
            className="object-cover w-1/2 mx-auto maw-w-44"
            src="icon.png"
            alt="shopping item"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
