import React from "react";
import Image from "next/image";
import Link from "next/link";
import productListImg from "../public/assets/projectsBg/productlist.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const ProductList = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] m-auto">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8 hover:scale-105 ease-in duration-300">
          <Image src={productListImg} alt="/" />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-2 py-16">
        <div className="col-span-4 ">
          <div className="max-w-[1240px] w-full  pb-4">
            <h2 className="py-2">Products List</h2>
            <h3 className="py-2 text-gray-400">React Practice</h3>
            <h3>HTML / CSS / React</h3>
          </div>

          <p className="py-8">
            Educational project based on React JS technology using functional
            components and hooks (useState), react tailwindcss library, using
            REST API services, etc.
          </p>
          <a
            href="https://eugene015.github.io/react-product-list/"
            target="_blanc"
            title="Demo"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/Eugene015/react-product-list"
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
                CSS (Tailwind)
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
