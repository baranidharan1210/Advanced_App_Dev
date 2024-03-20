import React, { useState } from "react";

const ConfigMaintenance = ({ open, setOpen }) => {
  return (
    <>
      <div class="relative mb-10 mt-12 mx-16">
        <p class="py-2 text-xl font-semibold">Switch to maintenance mode</p>
        <p class="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-amber-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Proceed with caution
        </p>
        <br />
        <button
          class="ml-auto text-sm font-semibold text-amber-600 underline decoration-2 pt-4"
          onClick={() => setOpen(true)}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ConfigMaintenance;
