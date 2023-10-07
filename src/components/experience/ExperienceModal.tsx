import Modal from "../shared/Modal";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

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
      button={
        <img
          className="aspect-square w-60 rounded-lg opacity-75 transition ease-in-out hover:opacity-100"
          src={props.logo}
          alt={props.companyName}
        />
      }
      miniIcons={devIcons}
    />
  );
}

export default ExperienceModal;
