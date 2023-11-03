import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="relative bg-white bg-cover">
      <div className="mt-16 text-black">
        <h2 className="text-center text-6xl font-bold lg:mx-60 lg:text-left">
          contact.
        </h2>
        <div className="my-12 flex justify-center">
          <a
            href="https://github.com/nategaulke"
            aria-label="Github"
            target="_blank"
            className="mr-12"
          >
            <FaGithub className="aspect-square rounded text-8xl hover:opacity-50" />
          </a>
          <a
            href="https://www.linkedin.com/in/nategaulke/"
            aria-label="LinkedIn"
            target="_blank"
            className="ml-12"
          >
            <FaLinkedin className="aspect-square rounded text-8xl text-[#0077b7] hover:opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
