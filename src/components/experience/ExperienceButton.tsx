import TechPill from "./TechPill";

function ExperienceButton(props: any) {
  return (
    <div className="flex overflow-hidden text-ellipsis rounded-lg border border-2 p-4 shadow duration-200 hover:shadow-none sm:w-4/5 lg:w-2/5">
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
          <h3 className="text-lg font-bold text-black sm:text-left md:text-lg">
            {props.companyName} - {props.jobTitle}
          </h3>
          <h4 className="text-center font-bold text-black sm:text-left">
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
