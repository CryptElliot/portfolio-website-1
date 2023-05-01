import React from "react";
import { Seo, Home as HomeComponent } from "../components";

const Home = () => {
  return (
    <>
      <Seo title="Home"/>
      <HomeComponent />
    </>
  );
};

export default Home;
