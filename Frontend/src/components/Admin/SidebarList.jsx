import React from "react";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const SidebarList = ({ sidebarField }) => {
  return (
    <>
      <li>
        <NavLink
          to={"/admin" + sidebarField.path}
          className="flex items-center p-2 text-gray-900 group"
        >
          {/* <BsPersonFill /> */}
          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
          <span className="ms-3"> {sidebarField.title} </span>
        </NavLink>
      </li>
    </>
  );
};

export default SidebarList;
