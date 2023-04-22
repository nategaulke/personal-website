function Header() {
  return (
    <nav className="fixed left-0 right-0 z-10 bg-blue-500">
      <div className="flex flex w-full flex-wrap flex-wrap justify-between">
        <a>Home</a>
        <a>About</a>
        <a>School & Experience</a>
        <a>Projects</a>
        <a>Contact Me</a>
      </div>
    </nav>
  );
}

export default Header;
