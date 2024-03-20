import React from "react";
import Settings from "./Settings";

const Header = ({ title }) => {
  return (
    <>
      <div class="pt-4">
        <h1 class="py-2 text-2xl font-semibold"> {title}</h1>
        {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>  */}
      </div>
    </>
  );
};

export default Header;
