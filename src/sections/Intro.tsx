import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div
      id="home"
      className="relative h-screen bg-[url('/bg.webp')] bg-cover bg-center"
    >
      <div className="mt-32 w-full items-center md:mt-20 md:flex lg:mt-60">
        <img
          className="ml-20 aspect-square h-60 rounded-full border-4 border-white lg:ml-60"
          src="/profile.webp"
          alt="profile picture"
        />
        <div className="ml-16 text-5xl leading-normal text-white lg:ml-48">
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
