import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import ContactImg from "../public/assets/contacts_pic.jpg";

const Contacts = () => {
  return (
    <div id="contacts" className="w-full lg:h-screen">
      <div className="max-w-[1080px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contacts
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  width="874"
                  height="580"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="pb-2 pt-8">Eugene Havrilyuk</h2>
                <p>Front End Developer</p>
                <p className="py-6">
                  I`m available for freelance or full-time positions. Contact me
                  and let`s discuss.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 pb-4 font-bold">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/yevhen-havrilyuk-5ab36261/"
                    target="_blanc"
                    title="LinkedIn"
                  >
                    <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Eugene015"
                    target="_blanc"
                    title="GitHub"
                  >
                    <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="mailto:s290812@gmail.com"
                    target="_blanc"
                    title="Email"
                  >
                    <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1uOg2S6Uts8QnwhLrlAYHPTl8NlJZ2f4Q/view?usp=sharing"
                    target="_blanc"
                    title="My CV"
                  >
                    <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 relative z-1">
            <div className="p-4">
              <form
                action="https://getform.io/f/f6f4b970-025e-43ec-a334-41dc5824d422"
                method="POST"
              >
                <div className="w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="12"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              size={30}
              className="text-[#5651e5] m-auto"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
