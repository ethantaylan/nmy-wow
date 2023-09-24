import React from "react";
import { NavLink } from "react-router-dom";

export interface MenusItems {
  label: string;
  to: string;
}

export interface NavbarMenuProps {
  items: MenusItems[];
  matches: boolean;
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({ items, matches }) => {
  return (
    <ul
      tabIndex={0}
      className={`${
        matches && "menu menu-horizontal px-1"
      } menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box`}
    >
      {items.map((items: MenusItems) => (
        <>
          <li key={items.label}>
            <NavLink to={items.to}>{items.label}</NavLink>
          </li>
        </>
      ))}
    </ul>
  );
};
