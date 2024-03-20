import React from "react";

const EventsTable = () => {
  return (
    <>
      <div class="relative overflow-x-auto grow shadow-md sm:rounded-lg mb-10">
        <table class="w-full text-sm text-left rtl:text-right">
          <caption class="py-5 px-6 text-lg font-semibold text-left rtl:text-right">
            Event info
          </caption>
          <thead class="">
            <tr>
              <th scope="col" class="px-6 py-3">
                Id
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Budget
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4 font-medium ">01</td>
              <td class="px-6 py-4">Jenifer</td>

              <td class="px-6 py-4 ">Wedding</td>
              <td class="px-6 py-4 ">10-FEB-2024</td>
              <td class="px-6 py-4 ">Completed</td>
              <td class="px-6 py-4 ">7.5L</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4 font-medium ">02</td>
              <td class="px-6 py-4">Arun</td>

              <td class="px-6 py-4 ">Aniversary</td>
              <td class="px-6 py-4 ">17-DEC-2023</td>
              <td class="px-6 py-4 ">Completed</td>
              <td class="px-6 py-4 ">2.5L</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventsTable;
