function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-center text-gray-500">
      &copy; {year} Nathanael Gaulke
    </footer>
  );
}

export default Footer;
