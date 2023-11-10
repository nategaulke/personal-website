import TechPill from "./TechPill";

function ExperienceButton(props: any) {
  return (
    <div className="z-10 w-max overflow-hidden text-ellipsis rounded-lg border border-2 bg-white p-4 shadow duration-200 hover:shadow-none sm:flex sm:w-[80vw] lg:w-[40vw]">
      <div>
        <div className="flex justify-center sm:w-max">
          <img
            className="aspect-sqaure h-40 w-40 rounded-lg"
            src={props.logo}
            alt={props.companyName}
          />
        </div>
      </div>
      {/* flex h-full w-auto flex-col items-center sm:w-1/3 */}
      <div className="ml-0 mt-4 flex flex-col justify-between sm:ml-4 sm:mt-0">
        <div>
          <h3
            id="buttonTitle"
            className="text-md font-bold text-black sm:text-left md:text-lg"
          >
            {props.companyName} - {props.jobTitle}
          </h3>
          <h4 className="md:text-md text-center text-sm italic text-black sm:text-left md:font-bold md:not-italic">
            {props.timePeriod}
          </h4>
          <div className="mt-2">
            <div className="flex flex-wrap justify-center sm:justify-normal">
              {props.devTools.map((devTool: any, index: any) => (
                <TechPill name={devTool} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-blue-700 hover:underline sm:justify-end sm:text-left">
          See More
        </div>
      </div>
    </div>
  );
}

export default ExperienceButton;
