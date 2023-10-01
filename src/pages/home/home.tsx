import React from "react";
import { Banner } from "../../components/banner/banner";
import { News } from "../../components/news/news";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Banner />
      <News />
    </React.Fragment>
  );
};
