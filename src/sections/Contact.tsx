function Contact() {
  return (
    <div id="contact" className="relative bg-white bg-cover">
      <div className="mt-16 text-black">
        <h2 className="mx-4 text-6xl font-bold sm:mx-6">contact.</h2>
        <div className="my-12 flex justify-center">
          <a href="https://github.com/nategaulke">
            <img
              className="mr-12 h-24 rounded-full hover:opacity-50"
              src="/external-icons/github.png"
              alt="Github"
            />
          </a>
          <a href="https://www.linkedin.com/in/nategaulke/">
            <img
              className="ml-12 h-24 rounded hover:opacity-50"
              src="/external-icons/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
