import React from "react";
import ProjectCard from "./ui/ProjectCard";
import zemImg from "../public/assets/projectsImg/zem.jpg";
import productImg from "../public/assets/projectsImg/productlist.jpg";
import tasksImg from "../public/assets/projectsImg/todolist.jpg";
import expensImg from "../public/assets/projectsImg/expenses.jpg";
import fastcoImg from "../public/assets/projectsImg/fast.jpg";
import bookingImg from "../public/assets/projectsImg/booking.jpg";

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
            title="React Booking App"
            bgProjImg={bookingImg}
            techStack="HTML, CSS, MongoDB, Express, React, Node"
            projectUrl="/booking"
          />
          <ProjectCard
            title="Fast Company App"
            bgProjImg={fastcoImg}
            techStack="HTML, CSS, MongoDB, Express, React, Node"
            projectUrl="/fastcompany"
          />
          <ProjectCard
            title="Expenses App"
            bgProjImg={expensImg}
            techStack="HTML, CSS, React"
            projectUrl="/expenses"
          />
          <ProjectCard
            title="Products List"
            bgProjImg={productImg}
            techStack="HTML, CSS, React"
            projectUrl="/productlist"
          />
          <ProjectCard
            title="Tasks List"
            bgProjImg={tasksImg}
            techStack="HTML, CSS, React"
            projectUrl="/todolist"
          />
          <ProjectCard
            title="Zemlevporyadnik"
            bgProjImg={zemImg}
            techStack="HTML, CSS, jQuery"
            projectUrl="/zemlevporyadnik"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
