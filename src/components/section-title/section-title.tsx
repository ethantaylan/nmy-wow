import React from "react";

export interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h3 className="text-3xl mt-5 mb-2 text-white">{title}</h3>;
};
