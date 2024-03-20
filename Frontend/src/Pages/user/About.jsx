import React from "react";

const About = () => {
  const img01 = "https://ik.imagekit.io/gokul/PartyEvent/wedding-1.jpg";
  const img02 = "https://ik.imagekit.io/gokulnathk/PartyEvent/bday.jpeg";
  // const img02=import bday from '../assets/images/bday.jpeg';
  const img03 = "https://ik.imagekit.io/gokulnathk/PartyEvent/party01.jpg";
  

  return (
    <>
      <div className=" z-40 overflow-hidden relative px-[4%] pt-[4%] bg-purple-100">
        <div className="flex justify-center py-5">
          {/* <p className="text-[35px]">ABOUT US</p> */}
        </div>
        <div className="w-full flex flex-row mb-5">
          <img src={img01} className="w-2/5" />
          <p className="text-[20px] p-10 flex items-center font-text">
          A wedding is a deeply significant and joyous celebration that marks the union of two individuals in love, commitment, and partnership. It represents a lifelong promise and the beginning of a new chapter in the lives of the bride and groom. Weddings come in various forms, reflecting diverse cultures, traditions, and personal preferences, but they all share common themes of love, unity, and the gathering of family and friends. Typically, weddings involve a beautiful ceremony where vows are exchanged, symbolizing the couple's dedication to one another.

          </p>
        </div>
        <div className="w-full flex flex-row mb-5">
          <p className="text-[20px] p-10 flex items-center font-text">
          Birthday celebrations hold a special place in our lives, serving as annual milestones that mark our journey through time. These occasions are more than just parties; they are cherished moments to reflect on the past, embrace the present, and anticipate the future. Birthdays offer a precious opportunity to gather with loved ones, strengthening bonds and creating lasting memories. They remind us of the value of life, the significance of our existence, and the accomplishments we've achieved. Whether it's a quiet, intimate gathering or a grand, extravagant affair, birthdays allow us to feel loved, appreciated, and celebrated. They inspire hope, joy, and gratitude, acting as a yearly reset button for our souls. In a fast-paced world, birthday celebrations encourage us to pause, connect, and relish the simple pleasures of life.
          </p>
          <img src={img02} className="w-2/5" />
        </div>
        <div className="text-[20px] p-10 flex items-center font-text">
          <img src={img03} className="w-2/5" />
          <p className="p-10 flex items-center">
          DJ music is an electrifying and transformative experience that transcends boundaries and brings people together on the dance floor. It's more than just music; it's a heartbeat that sets the rhythm for unforgettable moments. With the power to turn an ordinary gathering into an extraordinary celebration, a skilled DJ crafts a sonic journey that resonates with diverse tastes and preferences. From the pulsating beats that ignite the dance floor to the soulful melodies that touch hearts, DJ music is a universal language that evokes emotions and creates lasting memories. DJ music invites you to lose yourself in the rhythm, celebrate life, and embrace the magic of the moment, making it an essential element of any event seeking to create an unforgettable experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
