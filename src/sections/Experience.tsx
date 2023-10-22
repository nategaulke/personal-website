import { lazy } from "react";

const ExperienceModal = lazy(
  () => import("../components/experience/ExperienceModal")
);

const devTools: string[] = ["Java", "Spring"];

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
        <div className="mx-12 mt-12">
          <ExperienceModal
            companyName="Schwab"
            jobTitle="Associate Software Engineer"
            timePeriod="Jun. 2023 - Present"
            description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
            logo="/schwab_logo.png"
            devTools={devTools}
          />
          <div className="z-10 flex h-[100vh] min-h-full w-1 flex-col items-center justify-center justify-center overflow-y-auto bg-gradient-to-b from-cyan-500 to-blue-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
