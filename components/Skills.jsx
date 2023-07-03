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
import Express from "../public/assets/skills/expressjs.png";
import Node from "../public/assets/skills/node.png";
import ReduxToolkit from "../public/assets/skills/redux_purple.png";
import Strapi from "../public/assets/skills/strapi.png";
import Mui from "../public/assets/skills/mui.png";
import TypeScript from "../public/assets/skills/typescript.png";
import Cloudinary from "../public/assets/skills/cloudinary.png";
import Scss from "../public/assets/skills/scss.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 mb-24">
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard img={Html} skill="HTML" />
          <SkillCard img={Css} skill="CSS" />
          <SkillCard img={Tailwind} skill="TAILWIND" />
          <SkillCard img={Mui} skill="MATERIAL UI" />
          <SkillCard img={Scss} skill="SCSS" />
          <SkillCard img={Javascript} skill="JAVASCRIPT" />
          <SkillCard img={TypeScript} skill="TYPESCRIPT" />
          <SkillCard img={ReactImg} skill="REACT" />
          <SkillCard img={ReactImg} skill="REACT NATIVE" />
          <SkillCard img={ReduxToolkit} skill="REDUX TOOLKIT" />
          <SkillCard img={NextJS} skill="NEXTJS" />
          <SkillCard img={Github} skill="GITHUB" />
          <SkillCard img={Firebase} skill="FIREBASE" />
          <SkillCard img={MongoDb} skill="MONGODB" />
          <SkillCard img={Strapi} skill="STRAPI" />
          <SkillCard img={Cloudinary} skill="CLOUDINARY" />
          <SkillCard img={Express} skill="EXPRESS" />
          <SkillCard img={Node} skill="NODEJS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
