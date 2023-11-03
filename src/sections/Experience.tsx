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
        <div className="mx-12 mt-12 flex flex-col gap-8">
          <div className="absolute left-0 right-0 w-full items-center justify-center">
            <div className="mx-auto flex h-[80vh] min-h-full w-[2px] flex-col overflow-y-auto bg-gray-500" />
          </div>
          <div className="w-min self-center md:self-start">
            <ExperienceModal
              companyName="Schwab"
              jobTitle="Associate Software Engineer"
              timePeriod="Jun. 2023 - Present"
              description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
              logo="/schwab_logo.png"
              devTools={devTools}
            />
          </div>
          <div className="w-min self-center md:self-end">
            <ExperienceModal
              companyName="Schwab"
              jobTitle="Associate Software Engineer"
              timePeriod="Jun. 2023 - Present"
              description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
              devTools={devTools}
              logo="/schwab_logo.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
