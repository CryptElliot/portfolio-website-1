import React from "react";

const InternalServerError = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-paper m-4 p-4 md:p-8 rounded-lg max-w-[500px]  text-center font-semibold">
        <h2 className="text-xl lg:text-2xl xl:text-3xl text-textPrimary  pb-3">
          <span className="text-secondary mr-2 font-extrabold">500</span>
          <span className="mr-2">|</span>
          <span>Internal Server Error</span>
        </h2>
        <p className="text-base lg:text-md">
          The page you are looking for might have been removed had its name changed or is temporarily unavilable.
        </p>
      </div>
    </div>
  );
};

export default InternalServerError;
