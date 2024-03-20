import React from "react";
import { NavLink } from "react-router-dom";

const EventFooter = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center my-10">
        <NavLink
          to="/services"
          className="bg-amber-400 hover:bg-amber-500 p-3 px-10 rounded-lg text-white font-bold"
        >
          All Services
        </NavLink>
      </div>
    </>
  );
};

export default EventFooter;
