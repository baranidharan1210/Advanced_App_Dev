import React from "react";

const Loading = ({ size }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center">
      <div className="w-[100%] flex justify-center h-10">
        <div
          style={{ width: `${size}px`, height: `${size}px` }}
          className="animate-spin"
        >
          <div className="h-full w-full border-4  border-t-purple-500 border-b-purple-700 rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
