import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let`s build something legendary together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I`m <span className="text-[#5651e5]">Eugene</span>
          </h1>
          <h1 className="py-4 text-gray-700">User Interface Ingeenier</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/yevhen-havrilyuk-5ab36261/"
              target="_blanc"
              title="LinkedIn"
            >
              <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Eugene015"
              target="_blanc"
              title="GitHub"
            >
              <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:s290812@gmail.com" target="_blanc" title="Email">
              <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1EoCECA1fcKyEwdQPogTdUwcxEnmnxyAp/view?usp=sharing"
              target="_blanc"
              title="My CV"
            >
              <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
