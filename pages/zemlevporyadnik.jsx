import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectImg from "../public/assets/projectsBg/zemlevporyadnik_scr.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const Zemlevporyadnik = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] m-auto">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8 hover:scale-105 ease-in duration-300">
          <Image src={projectImg} alt="/" />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-2 py-16">
        <div className="col-span-4 md:pr-24">
          <div className="max-w-[1240px] w-full  pb-4">
            <h2 className="py-2">Zemlevporyadnik</h2>
            <h3 className="py-2 text-gray-400">Corporate website</h3>
            <h3>HTML / CSS / jQuery</h3>
          </div>

          <p className="py-8">
            Early commercial project{" "}
            <a
              className="hover:underline text-[#5651e5]"
              href="https://zemlevporyadnik.com.ua/"
              target="_blanc"
              title="zemlevporyadnik.com.ua"
            >
              zemlevporyadnik.com.ua
            </a>{" "}
            based on a clean HTML, CSS, and jQuery stack. It is quite fast and
            lightweight, with valuable and relevant content. It has leading
            positions in its niche and up to 6500 unique users per day of
            organic Google traffic.
          </p>
          <a
            href="https://zemlevporyadnik.com.ua/"
            target="_blanc"
            title="zemlevporyadnik.com.ua"
          >
            <button className="px-8 py-2 mt-8 mr-8">
              zemlevporyadnik.com.ua
            </button>
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
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                jQuery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zemlevporyadnik;
