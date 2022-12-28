import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about_pic.jpg";

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>

          <p className="py-2">
            My name is Yevhen. I am a refugee from Kyiv, Ukraine. Now, my family
            and I are living here in Budapest. I have a temporary residence
            permit with the right to work here in Hungary. At home, in Kyiv, I
            was co-founder and CEO of a local company that practiced land
            surveying, cadastral works, and legal consulting in land
            relationships.
          </p>

          <p className="py-2">
            {" "}
            The main source of leads and clients for our company was our website
            zemlevporyadnik.com.ua, which I created and supported. It was
            created on a clean HTML, CSS, and jQuery stack. It is quite fast and
            lightweight, with valuable and relevant content. It has leading
            positions in its niche and up to 6500 unique users per day of
            organic Google traffic.
          </p>

          <p className="py-2">
            By now, I have learned up-to-date frontend development stack (HTML,
            CSS, JavaScript, React.js). What I can do now:
          </p>
          <ul className="py-2 ml-8">
            <li className="cursor-default  flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 mt-1 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>write basic react markup structure of React SPA;</span>
            </li>
            <li className="cursor-default py-2  flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 mt-1 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>
                write different forms (sign-in, signups, text, select,
                multi-select, radio, etc. inputs), use React hooks to handle
                data from it, and store data in different storages;
              </span>
            </li>
            <li className="cursor-default py-2 flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 mt-1 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
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
                class="flex-shrink-0 w-5 h-5 mt-1 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
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
                class="flex-shrink-0 w-5 h-5 mt-1 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>do other useful things with React and JavaScript.</span>
            </li>
          </ul>
          <p className="py-2 text-gray-600">
            I am ready to take part in the creation of stunning web
            applications, that could add significant value to company business
            products.
          </p>
          <div className="flex items-center justify-center md:block">
            <Link href="/#projects">
              <button className="mt-6">Let`s see my latest works</button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} width="467" height="576" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
