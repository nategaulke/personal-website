import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="relative bg-white bg-cover">
      <div className="mt-16 text-black">
        <h2 className="ml-16 text-6xl font-bold sm:mx-60">contact.</h2>
        <div className="my-12 flex justify-center">
          <a href="https://github.com/nategaulke">
            <FaGithub className="mr-12 aspect-square rounded text-8xl hover:opacity-50" />
          </a>
          <a href="https://www.linkedin.com/in/nategaulke/">
            <FaLinkedin className="ml-12 aspect-square rounded text-8xl hover:opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
