import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

function Intro() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
      <div className="absolute bottom-16 left-0 right-0 flex w-full justify-center lg:bottom-4">
        <button
          type="button"
          className={`rounded-full ${
            show ? `` : `hidden`
          } bg-transparent p-2 opacity-75 hover:bg-white hover:bg-opacity-50 hover:opacity-100`}
          onClick={() => handleClick("about")}
          aria-label="Continue Page Down"
        >
          <IoIosArrowDown className="text-6xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default Intro;
