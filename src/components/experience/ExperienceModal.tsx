import Modal from "../shared/Modal";

function ExperienceModal(props: any) {
  return (
    <Modal
      title={props.companyName}
      position={props.jobTitle}
      timePeriod={props.timePeriod}
      description={props.description}
      logo={props.logo}
      button={
        <img
          className="aspect-square w-60 rounded-lg opacity-75 transition ease-in-out hover:opacity-100"
          src={props.logo}
          alt={props.companyName}
        />
      }
      miniIcons={props.devIcons}
    />
  );
}

export default ExperienceModal;
