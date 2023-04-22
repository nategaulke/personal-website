function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-center">
      &copy; {year} Nathanael Gaulke
    </footer>
  );
}

export default Footer;
