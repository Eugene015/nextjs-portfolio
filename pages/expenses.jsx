import React from "react";
import Image from "next/image";
import Link from "next/link";
import expensesImg from "../public/assets/projectsBg/expenses_scr.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const Expenses = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={expensesImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Expenses App</h2>
          <h3 className="py-2 text-gray-400">Educational project</h3>
          <h3>HTML / CSS / React</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p className="py-2 ">Project</p>
          <h2>Overview</h2>
          <p className="py-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem, est? Architecto ipsam dolorum doloribus ab fuga ad
            illum iusto et placeat. Ipsum repudiandae repellendus esse
            doloremque, et fuga quasi. Tenetur maiores consectetur impedit
            vitae. Quae rerum nesciunt quasi perspiciatis dolor magni beatae,
            fugiat eaque iste laborum voluptatum, officia neque dicta.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 min-w-[250px]">
          <div className="p-2">
            <div className="bg-gray-200 rounded-lg py-2 px-4">
              <p className="font-bold">Technologies</p>
            </div>
            <div className="py-4 grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Expenses;
