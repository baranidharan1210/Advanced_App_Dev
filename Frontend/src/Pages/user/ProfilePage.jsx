import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="h-[100vh]">
        <div class="w-full lg:flex pt-20 justify-center absolute top-52">
          <div className="">
            <img
              src="https://ik.imagekit.io/gokulnathk/PartyEvent/party05(1).jpg"
              className="object-fill h-[265px] w-[200px]"
            />
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="">
              <div class="text-gray-900 font-bold text-xl mb-2">Profile</div>
              <hr className="mt-0 mb-4" />
              <div class="text-gray-700 text-base">
                <table class="w-full text-sm text-left rtl:text-right">
                  <tbody class="">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-black">
                        Full name
                      </th>
                      <td scope="col" class="px-6 py-3">
                        John smith
                      </td>
                    </tr>
                    <tr>
                      <th scope="col" class="px-6 py-3 text-black">
                        Email
                      </th>
                      <td scope="col" class="px-6 py-3">
                        user@gmail.com
                      </td>
                    </tr>
                    <tr>
                      <th scope="col" class="px-6 py-3 text-black">
                        Address
                      </th>
                      <td scope="col" class="px-6 py-3">
                        10/13, XXXX, CBE
                      </td>
                    </tr>
                    <tr>
                      <th scope="col" class="px-6 py-3 text-black">
                        Phone no.
                      </th>
                      <td scope="col" class="px-6 py-3">
                        +91 6381885164
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
