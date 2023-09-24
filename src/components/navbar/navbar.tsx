import React from "react";
import {
  MobileMenusItems,
  MobileNavbarMenu,
} from "./mobile-navbar-menu/mobile-navbar-menu";
import { useMediaQuery } from "../../hooks/use-media-query";

export const Navbar: React.FC = () => {
  const menus: MobileMenusItems[] = [{ label: "test", to: "test" }];

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <a className="btn btn-ghost normal-case text-xl">NMY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <MobileNavbarMenu items={menus} matches={matches} />
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};
