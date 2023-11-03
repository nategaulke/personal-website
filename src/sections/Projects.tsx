import { lazy } from "react";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const ProjectModal = lazy(() => import("../components/projects/ProjectModal"));

let linkedSites: JSX.Element[] = [<FaJava />, <SiSpring />];
linkedSites.push();
linkedSites.push(<SiSpring />);

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
          <ProjectModal
            projectName="UCF"
            position="Associate Software Engineer"
            timePeriod="Jun. 2023 - Present"
            description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
            logo="/schwab_logo.png"
            linkedSites={linkedSites}
          />
          <ProjectModal
            projectName="UCF"
            position="Associate Software Engineer"
            timePeriod="Jun. 2023 - Present"
            description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
            logo="/schwab_logo.png"
            linkedSites={linkedSites}
          />
          <ProjectModal
            projectName="UCF"
            position="Associate Software Engineer"
            timePeriod="Jun. 2023 - Present"
            description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
            logo="/schwab_logo.png"
            linkedSites={linkedSites}
          />
          <ProjectModal
            projectName="UCF"
            position="Associate Software Engineer"
            timePeriod="Jun. 2023 - Present"
            description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
            logo="/schwab_logo.png"
            linkedSites={linkedSites}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
