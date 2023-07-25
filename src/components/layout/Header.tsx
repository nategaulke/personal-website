function Header() {
  return (
    <nav className="fixed left-0 right-0 z-10 flex bg-accent-blue bg-opacity-60 px-16 py-2">
      <div className="flex w-full flex-wrap flex-wrap justify-between text-white">
        <a href="/">HOME</a>
        <a href="/">ABOUT</a>
        <a href="/">EXPERIENCE</a>
        <a href="/">PROJECTS</a>
        <a href="/">CONTACT</a>
      </div>
    </nav>
  );
}

export default Header;
