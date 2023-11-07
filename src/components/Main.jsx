import { TypeAnimation } from "react-type-animation";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Main() {
  const background = new URL("../assets/background.jpg", import.meta.url).href;
  return (
    <div id="main" className="pb-28">
      <img
        className="w-full h-screen object-cover object-left"
        src={background}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I&apos;m Federico
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "I also play the bagpipes",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "0.9em",
                paddingLeft: "5px",
                fontWeight: "normal",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            {" "}
            <a
              href="https://www.instagram.com/fedeiud/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="cursor-pointer"
                size={20}
                color="#C13584"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/iudicefederico/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="cursor-pointer"
                size={20}
                color="#0e76a8"
              />
            </a>
            <a
              href="https://github.com/iudicefederico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} color="#171515" />
            </a>
            <a
              href="mailto:iudicefederico@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope
                className="cursor-pointer"
                size={20}
                color="#ea4335"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
