import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div
      id="home"
      className="relative h-screen bg-[url('/bg.jpg')] bg-cover bg-center"
    >
      <div className="mt-60 flex w-full items-center">
        {/* <h1>Hi</h1> */}
        <img
          className="ml-60 aspect-square h-60 w-60 rounded-full border-4 border-white"
          src="/profile.png"
          alt="profile picture"
        />
        <div className="ml-24 text-5xl leading-normal text-white">
          <h1>Hi!</h1>
          {/* <h1>My name is Nathanael</h1>
          <h1>But you can call me Nate :)</h1> */}
          <div className="h-40">
            <TypeAnimation
              sequence={[1000, "I'm Nathanael\nBut you can call me Nate :)"]}
              style={{ whiteSpace: "pre-line", display: "block" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
