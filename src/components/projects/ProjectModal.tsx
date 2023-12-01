import Modal from "../shared/Modal";

function ProjectModal(props: any) {
  const colorVariants: any = {
    blue: "from-cyan-500 to-blue-500",
    violet: "from-indigo-500 to-purple-500",
    green: "from-lime-500 to-emerald-500",
    yellow: "from-orange-500 to-yellow-500",
    red: "from-pink-500 to-red-500",
  };

  return (
    <Modal
      title={props.projectName}
      position={props.position}
      timePeriod={props.timePeriod}
      description={props.description}
      logo={props.logo}
      button={
        <div>
          <div
            className={`flex aspect-square w-60 rounded-lg bg-gradient-to-r ${
              colorVariants[props.color]
            } opacity-75 transition ease-in-out hover:opacity-100`}
          >
            <h3
              id="buttonTitle"
              className="mt-2 grid h-full w-full place-items-center text-xl font-bold text-white"
            >
              {props.projectName}
            </h3>
          </div>
        </div>
      }
      linkedSites={props.linkedSites}
    />
  );
}

export default ProjectModal;
