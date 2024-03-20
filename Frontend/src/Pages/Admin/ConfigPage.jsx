import React, { useState } from "react";
import ConfigTable from "../../components/Admin/ConfigTable";
import ConfigMaintenance from "../../components/Admin/ConfigMaintenance";
import MaintenaceModel from "../../components/Admin/MaintenaceModel";

const ConfigPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center h-full">
        <ConfigTable />
        <ConfigMaintenance open={open} setOpen={setOpen} />
        <MaintenaceModel open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default ConfigPage;
