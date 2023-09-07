function Header() {
  const handleClick = (id: string) => {
    var element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 right-0 z-10 flex bg-accent-blue bg-opacity-60 px-16 py-2">
      <div className="flex w-full flex-wrap flex-wrap justify-between text-white">
        <button
          type="button"
          className="rounded border border border-transparent p-1 hover:border-white"
          onClick={() => handleClick("home")}
        >
          HOME
        </button>
        <button
          type="button"
          className="rounded border border border-transparent p-1 hover:border-white"
          onClick={() => handleClick("about")}
        >
          ABOUT
        </button>
        <button
          type="button"
          className="rounded border border border-transparent p-1 hover:border-white"
          onClick={() => handleClick("experience")}
        >
          EXPERIENCE
        </button>
        <button
          type="button"
          className="rounded border border border-transparent p-1 hover:border-white"
          onClick={() => handleClick("projects")}
        >
          PROJECTS
        </button>
        <button
          type="button"
          className="rounded border border border-transparent p-1 hover:border-white"
          onClick={() => handleClick("contact")}
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
}

export default Header;
