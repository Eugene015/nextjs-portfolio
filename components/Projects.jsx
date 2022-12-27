import React from "react";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Zemlevporyadnik"
            bgProjImg="project-img1"
            projectUrl="/property"
          />
          <ProjectCard
            title="Zemlevporyadnik"
            bgProjImg="project-img2"
            projectUrl="/property"
          />
          <ProjectCard
            title="Zemlevporyadnik"
            bgProjImg="project-img3"
            projectUrl="/property"
          />
          <ProjectCard
            title="Zemlevporyadnik"
            bgProjImg="project-img4"
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
