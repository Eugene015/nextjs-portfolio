import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../public/assets/profile_photo_flip.jpg";

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1080px] m-auto md:grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>

          <p className="py-2">
            My name is Eugene Havrilyuk. A long time ago I got interested in web
            technologies. Till 2022 I practiced developing MPA static websites,
            content management, SEO optimization, and promotion.
          </p>

          <p className="py-2">
            {" "}
            In 2022 I got updated with new knowledge of JavaScript ES6, ReactJS,
            NodeJS, NextJS, MongoDB, Express, Firebase, Strapi and other modern
            technologies in web development.
          </p>

          <p className="py-2">What I can do now:</p>
          <ul className="py-2 ml-8">
            <li className="cursor-default  flex space-x-3">
              <svg
                className="w-5 h-5 mt-1 text-[#5651e5] dark:text-[#5651e5] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <span>write and edit React SPAs and MPAs;</span>
            </li>
            <li className="cursor-default py-2  flex space-x-3">
              <svg
                className="w-5 h-5 mt-1 text-[#5651e5] dark:text-[#5651e5] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>
                create authorization website services (sign-in, signups);
              </span>
            </li>
            <li className="cursor-default py-2 flex space-x-3">
              <svg
                className="w-5 h-5 mt-1 text-[#5651e5] dark:text-[#5651e5] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>
                fetch data from APIs, use appropriate hooks, and use objects and
                arrays to display that data in the application interface;
              </span>
            </li>
            <li className="cursor-default py-2 flex space-x-3">
              <svg
                className="w-5 h-5 mt-1 text-[#5651e5] dark:text-[#5651e5] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>
                create sorting, filtering, and searching functionality for
                fetched data;
              </span>
            </li>
            <li className="cursor-default py-2 flex space-x-3">
              <svg
                className="w-5 h-5 mt-1 text-[#5651e5] dark:text-[#5651e5] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>
                create and manage state management libraries like Redux Toolkit;
              </span>
            </li>
            <li className="cursor-default py-2 flex space-x-3">
              <svg
                className="w-5 h-5 mt-1 text-[#5651e5] dark:text-[#5651e5] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>do other useful things with React and JavaScript.</span>
            </li>
          </ul>
          <p className="py-2 text-gray-600">
            I am ready to take part in the creation of stunning web
            applications, that could add significant value to company`s products
            and optimize business processes.
          </p>
          <div className="flex items-center justify-center md:block">
            <Link href="/#projects">
              <button className="my-6">Let`s see my latest works</button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={profileImg} width="554" height="617" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
