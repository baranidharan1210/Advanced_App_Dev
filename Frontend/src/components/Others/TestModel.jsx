import React, { useState } from "react";

const TestModel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-4 bg-gray-300 min-w-screen">
        <button
          className="flex items-center px-3 py-2 space-x-2 text-sm leading-none bg-gray-200 border border-gray-400 rounded-sm rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          onClick={() => setOpen(true)}
        >
          Show Modal
        </button>

        {open && (
          <div
            className="absolute max-w-sm my-3 overflow-x-auto bg-white rounded-lg shadow-lg"
            onClick={() => setOpen(false)}
          >
            <div className="flex px-5 py-4 border-b border-gray-200">
              <div className="flex items-center justify-center w-6">
                <svg
                  className="w-6 h-6 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-lg font-bold text-gray-700">
                Warning modal
              </span>
            </div>

            <div className="px-10 py-5 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className="flex justify-end px-5 py-4 bg-gray-100 border-t border-gray-300">
              <button
                className="px-3 py-2 mr-1 text-sm text-white transition duration-150 bg-orange-500 rounded hover:bg-orange-600"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-2 text-sm text-gray-600 transition duration-150 bg-gray-100 rounded hover:text-gray-700"
                onClick={() => setOpen(false)}
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TestModel;
