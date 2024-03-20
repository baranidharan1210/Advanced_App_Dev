import React from "react";
import "../../assets/css/AdminSidebar.css";
import { NavLink } from "react-router-dom";
import { sidebarFields } from "../../constants/Dashboard";
import SidebarList from "../Admin/SidebarList";
import Navbar from "../Admin/Navbar";
import { BsPersonFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="relative ">
        <Navbar />
        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r text-black border-gray-200 sm:translate-x-0 0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 pb-4 overflow-y-auto bg-white text-black">
            <ul class="space-y-2 font-medium">
              {sidebarFields &&
                sidebarFields.map((sidebarField) => (
                  <>
                    <SidebarList sidebarField={sidebarField} />
                  </>
                ))}
            </ul>
            <div className="fixed bottom-0 py-3 px-2 w-full left-0 font-bold">
              <NavLink
                to="/login"
                className="flex items-center p-2 text-gray-900 group"
              >
                {/* <BsPersonFill /> */}
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                <span className="ms-3"> Logout </span>
              </NavLink>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
