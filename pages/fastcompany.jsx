import React from "react";
import Image from "next/image";
import Link from "next/link";
import fastCompanyImg from "../public/assets/projectsBg/fastcompany.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const FastCompany = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] m-auto">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8 hover:scale-105 ease-in duration-300">
          <Image src={fastCompanyImg} alt="/" />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-4 py-16">
        <div className="col-span-4 ">
          <div className="max-w-[1240px] w-full  pb-4">
            <h2 className="py-2">Fast Company</h2>
            <h3 className="py-2 text-gray-400">Social website</h3>
            <h3>HTML / CSS / MongoDB / Express / React / Node</h3>
          </div>

          <p className="py-8">
            My fundamental React educational project based on React JS
            technology uses functional components and hooks (useState,
            useEffect, customHooks, HOCs, Redux Toolkit, Axios, npm plugins, and
            libraries). On backend there are NodeJS, Express and MongoDB. The
            project has implemented filtering, sorting, pagination, searching,
            logIn, SignUp, logOut, routing to multiple pages and other features.
          </p>
          <a
            href="https://young-shore-49494.herokuapp.com/"
            target="_blanc"
            title="Demo"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/Eugene015/fast-company"
            target="_blanc"
            title="Code"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer pt-16 pb-4">
              Back to Projects
            </p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 min-w-[250px] h-fit">
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
                CSS (Bootstrap)
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Node
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastCompany;
