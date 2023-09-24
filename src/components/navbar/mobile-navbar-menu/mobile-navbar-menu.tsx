import React from "react";

export interface MobileMenusItems {
  label: string;
  to: string;
}

export interface MobileNavbarMenuProps {
  items: MobileMenusItems[];
  matches: boolean;
}

export const MobileNavbarMenu: React.FC<MobileNavbarMenuProps> = ({
  items,
  matches,
}) => {
  return (
    <ul
      tabIndex={0}
      className={`${
        matches && "menu menu-horizontal px-1"
      } menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box`}
    >
      {items.map((items: MobileMenusItems) => (
        <>
          <li key={items.label}>
            <a>{items.to}</a>
          </li>
        </>
      ))}
    </ul>
  );
};
