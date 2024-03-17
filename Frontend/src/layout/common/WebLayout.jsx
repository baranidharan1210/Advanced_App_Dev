import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/shared/Topbar";
import Footer from "../../components/shared/Footer";

const WebLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebLayout;
