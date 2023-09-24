import React from "react";
import { MenusItems, NavbarMenu } from "./navbar-menu/navbar-menu";
import { useMediaQuery } from "../../hooks/use-media-query";

export const Navbar: React.FC = () => {
  const menus: MenusItems[] = [
    { label: "Home", to: "/" },
    { label: "Roster", to: "/roster" },
    { label: "Apply", to: "/apply" },
    { label: "Contact", to: "/contact" },
  ];

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
          <NavbarMenu items={menus} matches={matches} />
        </div>

        <a className="btn btn-ghost normal-case text-xl">NMY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavbarMenu items={menus} matches={matches} />
      </div>
      <div className="navbar-end">
        <a className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
