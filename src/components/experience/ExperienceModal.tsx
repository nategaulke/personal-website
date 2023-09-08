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
          className="aspect-square w-60 rounded-lg opacity-50 transition delay-150 duration-300 ease-in-out hover:w-64 hover:-translate-y-1 hover:scale-110 hover:opacity-100"
          src={props.logo}
          alt={props.companyName}
        />
      }
      miniIcons={props.devIcons}
    />
  );
}

export default ExperienceModal;
