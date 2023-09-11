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
        <div className="aspect-square w-60 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 transition delay-150 duration-300 ease-in-out hover:w-64 hover:-translate-y-1 hover:scale-110 hover:opacity-100" />
      }
      miniIcons={props.linkedSites}
    />
  );
}

export default ProjectModal;
