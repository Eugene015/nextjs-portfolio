import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import NavLogo from "../public/assets/profile-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShaddow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShaddow(true);
      } else {
        setShaddow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className="w-full h-28 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image src={NavLogo} alt="/" width="300" height="80" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:font-bold border-gray-700">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-base uppercase hover:font-bold border-gray-700">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-base uppercase hover:font-bold border-gray-700">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-base uppercase hover:font-bold border-gray-700">
                Projects
              </li>
            </Link>
            <Link href="/#contacts">
              <li className="ml-10 text-base uppercase hover:font-bold border-gray-700">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        onClick={() => setNav(false)}
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} alt="/" width="300" height="80" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let`s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contacts">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Contacts
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let`s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/yevhen-havrilyuk-5ab36261/"
                  target="_blanc"
                  title="LinkedIn"
                >
                  <div className="rounded-full shadow-lg shaddow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Eugene015"
                  target="_blanc"
                  title="GitHub"
                >
                  <div className="rounded-full shadow-lg shaddow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="mailto:s290812@gmail.com"
                  target="_blanc"
                  title="Email"
                >
                  <div className="rounded-full shadow-lg shaddow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href="https://drive.google.com/file/d/1EoCECA1fcKyEwdQPogTdUwcxEnmnxyAp/view?usp=sharing"
                  target="_blanc"
                  title="My CV"
                >
                  <div className="rounded-full shadow-lg shaddow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
