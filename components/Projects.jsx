import React from "react";
import ProjectCard from "./ui/ProjectCard";
import zemImg from "../public/assets/projectsImg/zem.jpg";
import resqImg from "../public/assets/projectsImg/project-img2.png";
import expensImg from "../public/assets/projectsImg/project-img3.png";
import fastcoImg from "../public/assets/projectsImg/project-img4.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Fast Company App"
            bgProjImg={fastcoImg}
            techStack="HTLM, CSS, MongoDB, Express, React, Node"
            projectUrl="/fastcompany"
          />
          <ProjectCard
            title="Expenses App"
            bgProjImg={expensImg}
            techStack="HTLM, CSS, React"
            projectUrl="/expenses"
          />
          <ProjectCard
            title="Zemlevporyadnik"
            bgProjImg={zemImg}
            techStack="HTLM, CSS, jQuery"
            projectUrl="/zemlevporyadnik"
          />
          <ProjectCard
            title="Resq Group"
            bgProjImg={resqImg}
            techStack="HTLM, CSS, jQuery"
            projectUrl="/resq"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
