import React from "react";

const ConfigTable = () => {
  return (
    <>
      <div className="flex flex-row justify-center mx-10">
        <div class="relative overflow-x-auto grow shadow-md sm:rounded-lg mx-5">
          <table class="w-full text-sm text-left rtl:text-right">
            <caption class="p-5 text-lg font-semibold text-left rtl:text-right">
              Contact info
            </caption>
            <tbody>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium ">
                  Email
                </th>
                <td class="px-6 py-4">golden.glitz@gmail.com</td>

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium ">
                  Phone no
                </th>
                <td class="px-6 py-4">+91 8934673210</td>

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium ">
                  Address
                </th>
                <td class="px-6 py-4">10/13, XYXX, CBE</td>

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="relative overflow-x-auto grow shadow-md sm:rounded-lg mx-5">
          <table class="w-full text-sm text-left rtl:text-right">
            <caption class="p-5 text-lg font-semibold text-left rtl:text-right">
              Social media info
            </caption>
            <tbody>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium ">
                  Twitter
                </th>
                <td class="px-6 py-4">Silver</td>

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium ">
                  Instagram
                </th>
                <td class="px-6 py-4">Silver</td>

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium ">
                  Facebook
                </th>
                <td class="px-6 py-4">Silver</td>

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ConfigTable;
