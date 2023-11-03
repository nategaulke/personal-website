import Modal from "../shared/Modal";

function ProjectModal(props: any) {
  return (
    <Modal
      title={props.projectName}
      position={props.position}
      timePeriod={props.timePeriod}
      description={props.description}
      logo={props.logo}
      button={
        <div>
          <div className="aspect-square w-60 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 transition ease-in-out hover:opacity-100" />
          <h3 id="buttonTitle" className="mt-2 text-xl font-bold">
            {props.projectName}
          </h3>
        </div>
      }
      linkedSites={props.linkedSites}
    />
  );
}

export default ProjectModal;
