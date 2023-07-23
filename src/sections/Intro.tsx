import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div className="relative h-screen bg-[url('/bg.jpg')] bg-cover">
      <div className="text-white w-full items-center text-center text-xl">
        <span>Hi</span>
        {/* <br />
        <TypeAnimation
          sequence={[1000, "I'm Nathanael Gaulke\nBut I often go by Nate :)"]}
          style={{ whiteSpace: "pre-line", display: "block" }}
        /> */}
      </div>
    </div>
  );
}

export default Intro;
