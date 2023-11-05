import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import React from "react";

export const Guard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isAdmin = useAppSelector(({ user }) => user.isAdmin);
  
  console.log(isAdmin)

  return isAdmin ? children : <Navigate to="/" />;
};
