import { lazy } from "react";
import list from "../content/projects.json";

const ProjectModal = lazy(() => import("../components/projects/ProjectModal"));

function Projects() {
  return (
    <div
      id="projects"
      className="relative min-h-screen bg-gradient-to-tr from-white to-gray-100 bg-cover"
    >
      <div className="mt-16 text-black">
        <h2 className="text-center text-6xl font-bold lg:mx-60 lg:text-left">
          projects.
        </h2>
        <div className="relative mt-12 grid min-h-[80vh] grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3">
          {list.map((project, index) => (
            <ProjectModal
              projectName={project.projectName}
              position={project.position}
              timePeriod={project.timePeriod}
              description={project.linkedSites}
              linkedSites={project.linkedSites}
              logo={project.logo}
              color={project.color}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
