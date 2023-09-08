import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div
      id="home"
      className="relative h-screen bg-[url('/bg.jpg')] bg-cover bg-center"
    >
      <div className="mt-32 w-full items-center sm:mt-60 sm:flex">
        <img
          className="ml-20 aspect-square h-60 rounded-full border-4 border-white sm:ml-60"
          src="/profile.png"
          alt="profile picture"
        />
        <div className="ml-16 text-5xl leading-normal text-white sm:ml-24">
          <h1>Hi!</h1>
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
