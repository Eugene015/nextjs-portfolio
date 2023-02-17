import React from "react";
import Image from "next/image";
import Link from "next/link";
import todoImg from "../public/assets/projectsBg/todolist.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const TodoList = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1080px] m-auto">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8 hover:scale-105 ease-in duration-300">
          <Image src={todoImg} alt="/" />
        </div>
      </div>
      <div className="max-w-[1080px] mx-auto px-4 grid md:grid-cols-5 gap-2 py-16">
        <div className="col-span-4 md:pr-24">
          <div className="max-w-[1080px] w-full  pb-4">
            <h2 className="py-2">Todo List App</h2>
            <h3 className="py-2 text-gray-400">React Practice</h3>
            <h3>HTML / CSS / React</h3>
          </div>

          <p className="py-8">
            Educational project based on React JS technology using functional
            components and hooks (useState). You could add tasks by typing in
            the input form. When the task is complete you could delete it by
            mouse click on it. Try it in Live version by clicking the button
            below.
          </p>
          <a
            href="https://eugene015.github.io/react_tasks_list/"
            target="_blanc"
            title="Live"
          >
            <button className="px-8 py-2 mt-8 mr-8">Live</button>
          </a>
          <a
            href="https://github.com/Eugene015/react_tasks_list"
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
                CSS
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

export default TodoList;
