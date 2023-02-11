import React from "react";
import Image from "next/image";
import Link from "next/link";
import reactShopImg from "../public/assets/projectsBg/react_shop.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const Booking = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] m-auto">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8 hover:scale-105 ease-in duration-300">
          <Image src={reactShopImg} alt="/" />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-2 py-16">
        <div className="col-span-4 md:pr-24">
          <div className="max-w-[1240px] w-full  pb-4">
            <h2 className="py-2">Full Stack eCommerce App</h2>
            <h3 className="py-2 text-gray-400">eCommerce App</h3>
            <h3>
              HTML / CSS (Material UI) / React / React Router Dom / Redux
              Toolkit / Strapi Backend / Stripe Payments
            </h3>
          </div>
          <p className="py-4">
            React eCommerce App multipage application as my practical commercial
            project. It is based on React JS technology, using React Router Dom,
            Redux Toolkit, Material UI, Strapi Backend, Stripe Payments service,
            npm plugins, libraries, etc.
          </p>
          <p className="py-4">
            The project implements a product list retrieved from the backend, a
            single product page, filtering by categories, placing orders in the
            shopping cart, a checkout form page, payment by card, etc.
          </p>

          <a
            href="https://react-shop-beryl.vercel.app/"
            target="_blanc"
            title="Live"
          >
            <button className="px-8 py-2 mt-8 mr-8">Live</button>
          </a>
          <a
            href="https://github.com/Eugene015/react-shop"
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
                CSS (Material UI)
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React Router Dom
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Redux Toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Strapi Backend
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Stripe Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
