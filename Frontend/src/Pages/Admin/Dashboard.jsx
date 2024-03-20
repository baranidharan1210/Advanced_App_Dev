import React from "react";
import FlowChart from "../../components/Admin/FlowChart";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="my-5 mx-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[500px] border border-black">
            <div className="px-6 py-4 flex flex-row w-full">
              <div className="font-bold text-xl mb-2 font-text text-center w-1/2 ">
                {" "}
                No of events{" "}
              </div>
              <div className="w-1/2 flex justify-center ">98</div>
            </div>
          </div>
        </div>
        <div className="my-5 mx-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[500px] border border-black">
            <div className="px-6 py-4 flex flex-row w-full">
              <div className="font-bold text-xl mb-2 font-text text-center w-1/2 ">
                {" "}
                Total cost{" "}
              </div>
              <div className="w-1/2 flex justify-center ">10L</div>
            </div>
          </div>
        </div>
        <div className="my-5 mx-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[500px] border border-black">
            <div className="px-6 py-4 flex flex-row w-full">
              <div className="font-bold text-xl mb-2 font-text text-center w-1/2 ">
                {" "}
                Total Revenue{" "}
              </div>
              <div className="w-1/2 flex justify-center ">50L</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <FlowChart />
      </div>
    </>
  );
};

export default Dashboard;
