import React from "react";

export interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h3 className="text-3xl my-5 text-white">{title}</h3>;
};
