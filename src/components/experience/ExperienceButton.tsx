import TechPill from "./TechPill";

function ExperienceButton(props: any) {
  return (
    <div className="z-10 flex overflow-hidden text-ellipsis rounded-lg border border-2 bg-white p-4 shadow duration-200 hover:shadow-none sm:w-[80vw] lg:w-[40vw]">
      <div>
        <div className="w-max">
          <img
            className="aspect-sqaure h-40 rounded-lg"
            src={props.logo}
            alt={props.companyName}
          />
        </div>
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <h3 className="text-md font-bold text-black sm:text-left md:text-lg">
            {props.companyName} - {props.jobTitle}
          </h3>
          <h4 className="md:text-md text-center text-sm italic text-black sm:text-left md:font-bold md:not-italic">
            {props.timePeriod}
          </h4>
          <div className="mt-2">
            <div className="flex flex-wrap">
              {props.devTools.map((devTool: any, index: any) => (
                <TechPill name={devTool} index={index} />
              ))}
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
