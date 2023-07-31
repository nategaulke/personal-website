// import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div className="relative h-screen bg-[url('/bg.jpg')] bg-cover">
      <div className="mt-60 flex w-full items-center">
        {/* <h1>Hi</h1> */}
        <img
          className="border-white/> <div ml-60 h-60 w-60 rounded-full border-4"
          src="/profile.png"
          alt="profile picture"
        />
        <div className="ml-24 text-5xl text-white ">
          <h1>Hi!</h1>
          <h1>My name is Nathanael</h1>
          <h1>But you can call me Nate :)</h1>
          {/* <TypeAnimation
            sequence={[3000, "I'm Nathaznael\nBut you can call me Nate :)"]}
            style={{ whiteSpace: "pre-line", display: "block" }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Intro;
