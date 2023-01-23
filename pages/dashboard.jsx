import React from "react";
import Image from "next/image";
import Link from "next/link";
import dashboardImg from "../public/assets/projectsBg/dashboard.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] m-auto">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8 hover:scale-105 ease-in duration-300">
          <Image src={dashboardImg} alt="/" />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-2 py-16">
        <div className="col-span-4 md:pr-24">
          <div className="max-w-[1240px] w-full  pb-4">
            <h2 className="py-2">NextJS Dashboard App</h2>
            <h3 className="py-2 text-gray-400">Dashboard webpanel</h3>
            <h3>HTML / CSS / NextJS</h3>
          </div>
          <p className="py-4">
            Dashboard panel created with NextJS framework, deployed on Vercel
            cloud service. It has the main page with top cards of key metrics, a
            daily revenue chart, panel of recent client orders. Navigation left
            vertical panel could route you to the customer`s page with detailed
            information about each customer. You could have access to the orders
            page, where you could find detailed information about each order.
          </p>

          <a
            href="https://nextjs-dashboard-xi.vercel.app/"
            target="_blanc"
            title="LIve"
          >
            <button className="px-8 py-2 mt-8 mr-8">Live</button>
          </a>
          <a
            href="https://github.com/Eugene015/nextjs-dashboard"
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
                CSS (Tailwind)
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                NextJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
