import React from "react";
import { MenusItems, NavbarMenu } from "./navbar-menu/navbar-menu";
import { useMediaQuery } from "../../hooks/use-media-query";
import Logo from "../../assets/logo.png";

export const Navbar: React.FC = () => {
  const menus: MenusItems[] = [
    { label: "Home", to: "/" },
    { label: "Roster", to: "/roster" },
    { label: "Apply", to: "/apply" },
    { label: "Contact", to: "/contact" },
  ];

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="navbar h-20  border-b border-b-zinc-800 text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <img width={40} src={Logo} alt="NMY logo" />
        </a>
      </div>

      <NavbarMenu items={menus} matches={matches} />
      <div className="navbar-end">
        <div className="h-1 bg-white" />
        <a className="btn btn-ghost">
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
