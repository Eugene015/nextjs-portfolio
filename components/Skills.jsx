import React from "react";
import SkillCard from "./ui/SkillCardUi";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard skill="HTML" img="html" />
          <SkillCard skill="CSS" img="css" />
          <SkillCard skill="Tailwind" img="tailwind" />
          <SkillCard skill="JS" img="javascript" />
          <SkillCard skill="ReactJS" img="react" />
          <SkillCard skill="NextJS" img="nextjs" />
          <SkillCard skill="GitHub" img="github1" />
          <SkillCard skill="Firebase" img="firebase" />
          <SkillCard skill="MongoDB" img="mongo" />
          <SkillCard skill="Express" img="express" />
          <SkillCard skill="NodeJS" img="node" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
