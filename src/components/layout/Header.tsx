import { useState, useEffect } from "react";

function Header() {
  const [noShow, setNoShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setNoShow(false);
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
    <nav
      className={`${
        noShow && "opacity-0"
      } fixed left-0 right-0 z-30 flex bg-accent-blue bg-opacity-60 px-16 py-2 transition transition-opacity duration-500`}
    >
      <div className="flex w-full flex-wrap justify-between text-white">
        <button
          type="button"
          role="link"
          className="border-b border-transparent p-1 hover:border-white"
          onClick={() => handleClick("home")}
        >
          HOME
        </button>
        <button
          type="button"
          role="link"
          className="border-b border-transparent p-1 hover:border-white"
          onClick={() => handleClick("about")}
        >
          ABOUT
        </button>
        <button
          type="button"
          role="link"
          className="border-b border-transparent p-1 hover:border-white"
          onClick={() => handleClick("experience")}
        >
          EXPERIENCE
        </button>
        <button
          type="button"
          role="link"
          className="border-b border-transparent p-1 hover:border-white"
          onClick={() => handleClick("projects")}
        >
          PROJECTS
        </button>
        <button
          type="button"
          role="link"
          className="border-b border-transparent p-1 hover:border-white"
          onClick={() => handleClick("contact")}
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
}

export default Header;
