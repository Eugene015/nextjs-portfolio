import React from "react";
import ProjectCard from "./ui/ProjectCard";

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
            bgProjImg="project-img4"
            techStack="HTLM, CSS, MongoDB, Express, React, Node"
            projectUrl="/fastcompany"
          />
          <ProjectCard
            title="Expenses App"
            bgProjImg="project-img3"
            techStack="HTLM, CSS, React"
            projectUrl="/expenses"
          />
          <ProjectCard
            title="Zemlevporyadnik"
            bgProjImg="project-img1"
            techStack="HTLM, CSS, jQuery"
            projectUrl="/zemlevporyadnik"
          />
          <ProjectCard
            title="Resq Group"
            bgProjImg="project-img2"
            techStack="HTLM, CSS, jQuery"
            projectUrl="/resq"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
