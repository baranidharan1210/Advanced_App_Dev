import React from "react";
import Sidebar from "../../components/Others/Sidebar";
import { Outlet } from "react-router";
import MaintenaceModel from "../../components/Admin/MaintenaceModel";
import TestModel from "../../components/Others/TestModel";

const AdminLayout = () => {
  return (
    <>
      <div className="">
        <Sidebar />
        <div className="w-5/6 h-[91vh] absolute right-0 top-16">
          <Outlet />
          {/* <TestModel /> */}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
