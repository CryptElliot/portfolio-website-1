import React from "react";
import { Seo, NotFound as NotFoundComponent } from "../components";

const NotFound = () => {
  return (
    <>
      <Seo title="Not Found" />
      <NotFoundComponent />
    </>
  );
};

export default NotFound;
