import ProjectModal from "../components/projects/ProjectModal";

function Projects() {
  return (
    <div className="relative min-h-screen bg-white bg-cover">
      <div className="mt-16 text-black">
        <h2 className="mx-60 text-6xl font-bold">projects.</h2>
        <div className="relative mx-40 grid h-[80vh] grid-cols-3 items-center">
          <ProjectModal
            projectName="Schwab"
            position="Associate Software Engineer"
            timePeriod="Jun. 2023 - Present"
            description="I started worked at Charles Schwab as a software developer intern from June 2022 to August 2022. I enjoyed the company culture of Charles Schwab and learned a lot in those nine weeks, thanks to my manager and technical advisors. When I was offered a role to come back full time after graduation, I was happy to accept. While my team is based primarily in Phoenix, Arizona, I work remotely in Orlando, Florida. My role in the firm is in Retirement Business Services. I have done different dev tasks such as writing new API endpoints, scripting test automation, and managing servers."
            logo="/schwab_logo.svg"
            linkedSites={["/dev-icons/java.png", "/dev-icons/spring.png"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
