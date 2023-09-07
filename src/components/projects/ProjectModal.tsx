import Modal from "../shared/Modal";

function ProjectModal(props: any) {
  return (
    <Modal
      title={props.projectName}
      position={props.teamRole}
      timePeriod={props.timePeriod}
      description={props.description}
      logo={props.logo}
      button={
        <img
          className="aspect-square w-60 rounded-lg opacity-50"
          src={props.logo}
          alt={props.companyName}
        />
      }
      icons={props.linkedSites}
    />
  );
}

export default ProjectModal;
