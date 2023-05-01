import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-paper m-4 p-4 md:p-8 rounded-lg max-w-[500px]  text-center font-semibold">
      <h2 className="text-xl lg:text-2xl xl:text-3xl text-textPrimary pb-3">
          <span className="text-secondary mr-2 font-extrabold">404</span>
      <span className="mr-2">|</span> 
           <span >Not Found</span> 
        </h2>
        <p className="text-base lg:text-md">
          The page you are looking for does not exists. How you got there is a mystery but you can click the button to go back to home page.
        </p>
        <Link href="/">
          <button className="outline-none text-sm py-1 md:py-2 px-2 md:px-4 bg-primary border-2 border-primary text-white rounded-full mt-6 duration-300 transition-all hover:bg-transparent hover:text-primary">
            Go Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
