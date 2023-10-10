import TechPill from "./TechPill";

function ExperienceButton() {
  return (
    <div className="flex overflow-hidden text-ellipsis rounded-lg border border-2 p-4 shadow duration-200 hover:shadow-none sm:w-4/5 lg:w-2/5">
      <div>
        <div className="w-max">
          <img
            className="aspect-sqaure h-40 rounded-lg"
            src="/schwab_logo.svg"
            alt="Schwab"
          />
        </div>
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-black sm:text-left md:text-lg">
            Charles Schwab - Associate Software Engineer
          </h3>
          <h4 className="text-center font-bold text-black sm:text-left">
            Jun. 2023 - Present
          </h4>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <TechPill name="Java" />
              <TechPill name="Spring Framework" />
            </div>
          </div>
        </div>
        <div className="justify-end text-left text-blue-700 hover:underline">
          See More
        </div>
      </div>
    </div>
  );
}

export default ExperienceButton;
