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
        <div className="aspect-square w-60 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500" />
      }
      miniIcons={props.linkedSites}
    />
  );
}

export default ProjectModal;
