import React from "react";
import Image from "next/image";

const SkillCard = ({ skill, img }) => {
  return (
    <>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-0 justify-center items-center">
          <div className="m-auto">
            <Image src={img} width="64" height="64" alt="/" />
          </div>
          <div className="text-center sm:text-left">
            <h3>{skill}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
