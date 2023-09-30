import React from "react";
import { SectionTitle } from "../section-title/section-title";

export const News: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <section className="container">
        <SectionTitle title="News" />
      </section>
    </div>
  );
};
