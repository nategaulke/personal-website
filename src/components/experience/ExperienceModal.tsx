import Modal from "../shared/Modal";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import ExperienceButton from "./ExperienceButton";

let devIcons: JSX.Element[] = [];
devIcons.push(<FaJava />);
devIcons.push(<SiSpring />);

function ExperienceModal(props: any) {
  return (
    <Modal
      title={props.companyName}
      position={props.jobTitle}
      timePeriod={props.timePeriod}
      description={props.description}
      logo={props.logo}
      button={<ExperienceButton />}
      miniIcons={devIcons}
    />
  );
}

export default ExperienceModal;
