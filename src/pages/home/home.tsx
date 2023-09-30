import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Banner } from "../../components/banner/banner";
import { News } from "../../components/news/news";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <News />
    </React.Fragment>
  );
};
