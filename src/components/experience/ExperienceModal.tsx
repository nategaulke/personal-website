import Modal from "../shared/Modal";
import ExperienceButton from "./ExperienceButton";
import TechPill from "./TechPill";

function ExperienceModal(props: any) {
  const devIcons = props.devTools.map((devTool: any, index: any) => (
    <TechPill name={devTool} index={index} />
  ));

  return (
    <Modal
      title={props.companyName}
      position={props.jobTitle}
      timePeriod={props.timePeriod}
      description={props.description}
      logo={props.logo}
      button={
        <ExperienceButton
          companyName={props.companyName}
          jobTitle={props.jobTitle}
          timePeriod={props.timePeriod}
          logo={props.logo}
          devTools={props.devTools}
        />
      }
      miniIcons={devIcons}
    />
  );
}

export default ExperienceModal;
