import React from "react";
import { Navbar } from "../navbar/navbar";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};
