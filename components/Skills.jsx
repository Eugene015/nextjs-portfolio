import React from "react";
import SkillCard from "./ui/SkillCardUi";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import MongoDb from "../public/assets/skills/mongo.png";
import Express from "../public/assets/skills/express.png";
import Node from "../public/assets/skills/node.png";
import ReduxToolkit from "../public/assets/skills/redux_purple.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard img={Html} skill="HTML" />
          <SkillCard img={Css} skill="CSS" />
          <SkillCard img={Tailwind} skill="TAILWIND" />
          <SkillCard img={Javascript} skill="JAVASCRIPT" />
          <SkillCard img={ReactImg} skill="REACT" />
          <SkillCard img={NextJS} skill="NEXTJS" />
          <SkillCard img={Github} skill="GITHUB" />
          <SkillCard img={Firebase} skill="FIREBASE" />
          <SkillCard img={MongoDb} skill="MONGODB" />
          <SkillCard img={Express} skill="EXPRESS" />
          <SkillCard img={Node} skill="NODEJS" />
          <SkillCard img={ReduxToolkit} skill="REDUX TOOLKIT" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
