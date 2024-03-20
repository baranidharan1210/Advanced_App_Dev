import React from "react";

const EventCard = () => {
  return (
    <>
      <div className="flex flex-row grow w-full justify-start">
        <div className="my-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[500px] ">
            <div className=" h-[200px] overflow-hidden ">
              <img
                className="w-full "
                src={
                  "https://ik.imagekit.io/gokulnathk/PartyEvent/birthday04.jpg"
                }
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 font-text text-center ">
                {" "}
                Ritu's Birthday{" "}
              </div>
              <p className="text-gray-700 text-base">
              It's Ritu's birthday, and we're raising a toast to this amazing person! Join us as we celebrate another year of Ritu's warmth, kindness, and positive personality trait of Ritu.Get ready to shimmy and shake! It's Ritu's birthday, and we're throwing a dance party for the ages.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[500px] ">
            <div className=" h-[200px] overflow-hidden ">
              <img
                className="w-full "
                src={
                  "https://ik.imagekit.io/gokulnathk/PartyEvent/engament03.jpg"
                }
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 font-text text-center">
                {" "}
                Ajitha's Anniversary{" "}
              </div>
              <p className="text-gray-700 text-base">
              On this special day, we celebrate the enduring love of Ajitha and Rohan. Their journey together has been a beautiful testament to positive quality of their relationship like commitment, laughter and unwavering support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
