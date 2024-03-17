import React from "react";

const About = () => {
  const img01 = "https://ik.imagekit.io/gokul/PartyEvent/wedding-1.jpg";

  return (
    <>
      <div className="flex justify-center py-5">
        <p className="text-[35px]">ABOUT US</p>
      </div>
      <div className="w-full flex flex-row">
        <img src={img01} className="w-2/5" />
        <p className="p-10 flex items-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima esse
          aspernatur, unde doloremque in dignissimos quod sunt facilis
          perferendis officiis ea quo enim velit, ab ipsam, dolores voluptatem
          error placeat?
        </p>
      </div>
      <div className="w-full flex flex-row">
        <p className="p-10 flex items-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima esse
          aspernatur, unde doloremque in dignissimos quod sunt facilis
          perferendis officiis ea quo enim velit, ab ipsam, dolores voluptatem
          error placeat?
        </p>
        <img src={img01} className="w-2/5" />
      </div>
      <div className="w-full flex flex-row">
        <img src={img01} className="w-2/5" />
        <p className="p-10 flex items-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima esse
          aspernatur, unde doloremque in dignissimos quod sunt facilis
          perferendis officiis ea quo enim velit, ab ipsam, dolores voluptatem
          error placeat?
        </p>
      </div>
    </>
  );
};

export default About;
