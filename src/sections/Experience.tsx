import { lazy } from "react";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const ExperienceModal = lazy(
  () => import("../components/experience/ExperienceModal")
);

let devIcons: JSX.Element[] = [];
devIcons.push(<FaJava />);
devIcons.push(<SiSpring />);

function Experience() {
  return (
    <div
      id="experience"
      className="relative min-h-screen bg-gradient-to-br from-white to-gray-100 bg-cover"
    >
      <div className="mt-16 text-black">
        <h2 className="ml-16 text-6xl font-bold sm:mx-60">experience.</h2>
        <div className="relative flex h-[80vh] flex-wrap justify-around">
          <ExperienceModal
            companyName="Schwab"
            jobTitle="Associate Software Engineer"
            timePeriod="Jun. 2023 - Present"
            description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
            logo="/schwab_logo.svg"
            devIcons={devIcons}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
