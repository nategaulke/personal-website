import { lazy } from "react";
import list from "../content/experience.json";

const ExperienceModal = lazy(
  () => import("../components/experience/ExperienceModal")
);

function Experience() {
  return (
    <div
      id="experience"
      className="relative min-h-screen bg-gradient-to-br from-white to-gray-100 bg-cover"
    >
      <div className="mt-16 text-black">
        <h2 className="text-center text-6xl font-bold lg:mx-60 lg:text-left">
          experience.
        </h2>
        <div className="mx-12 mt-12 flex flex-col gap-8">
          <div className="absolute left-0 right-0 h-full w-full items-center justify-center">
            <div className="mx-auto flex h-full w-[2px] flex-col overflow-y-auto bg-gray-500" />
          </div>
          {list.map((experience, index) => (
            <div
              className={`w-min self-center ${
                index % 2 == 0 ? "md:self-start" : "md:self-end"
              }`}
            >
              <ExperienceModal
                companyName={experience.companyName}
                jobTitle={experience.jobTitle}
                timePeriod={experience.timePeriod}
                description={experience.description}
                logo={experience.logo}
                devTools={experience.devTools}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
