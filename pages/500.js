import React from "react";
import { Seo, InternalServerError as InternalServerErrorComponent } from "../components";

const InternalServerError = () => {
  return (
    <>
      <Seo title="Internal Server Error" />
      <InternalServerErrorComponent />
    </>
  );
};

export default InternalServerError;
