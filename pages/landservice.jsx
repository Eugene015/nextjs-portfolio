import React from "react";
import Image from "next/image";
import Link from "next/link";
import landServiceImg from "../public/assets/projectsBg/landservice.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const Booking = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1080px] m-auto">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8 hover:scale-105 ease-in duration-300">
          <Image src={landServiceImg} alt="/" />
        </div>
      </div>
      <div className="max-w-[1080px] mx-auto px-4 grid md:grid-cols-5 gap-2 py-16">
        <div className="col-span-4 md:pr-24">
          <div className="max-w-[1080px] w-full  pb-4">
            <h2 className="py-2">Full Stack LandService App</h2>
            <h3 className="py-2 text-gray-400">Corporate Consulting website</h3>
            <h3>HTML / CSS (Tailwind) / NextJS / Firebase</h3>
          </div>
          <p className="py-4">
            Landservice application is a commercial project consuming Ukrainian
            cadastral database information. It allows you to find information
            about your land plot in Ukraine. If the information found has
            mistakes, you will be notified by displaying extra info components
            on the screen.
          </p>
          <p className="pb-4">
            The application is fully responsive. It is based on NextJS
            technology, using Firebase, npm plugins and libraries, etc. Tailwind
            CSS is used for styling. Formik and Yup are used for form
            validation. Incoming data is validated by native JavaScript.
          </p>

          <a
            href="https://landservice.vercel.app/"
            target="_blanc"
            title="Live"
          >
            <button className="px-8 py-2 mt-8 mr-8">Live</button>
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
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
