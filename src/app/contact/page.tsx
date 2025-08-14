import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { link } from "fs/promises";
export default function Budgify() {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 lg:px-40 py-10 mt-10 ">
        <h1
          className="font-['Playfair_Display'] text-2xl md:text-4xl font-medium mb-10 flex justify-center items-center text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Me
        </h1>
        <div className="flex justify-center items-center">
          <p
            className="font-['Roboto'] text-lg md:text-xl px-4 md:px-20 text-center"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            I’m currently exploring new opportunities! <br />
            if you'd like to chat, you can reach me through:{" "}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 w-full">
          <Link
            href="mailto:krupalipatel092@gmail.com"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto cursor-pointer px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
              <span className="text-lg inline-flex items-center py-1 px-1">
                Email
              </span>
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/krupalip20/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto cursor-pointer px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
              <span className="text-lg inline-flex items-center py-1 px-1">
                LinkedIn
              </span>
            </button>
          </Link>
          <Link
            href="https://github.com/krupali02"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto cursor-pointer px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
              <span className="text-lg inline-flex items-center py-1 px-1">
                GitHub
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* <div>
        <h1>Contact</h1>
        <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Contact Me</h2>
        <p>
          I am currently looking for opportunities. Feel free to contact me at{" "}
          <a href="mailto:krupalipatel092@gmai.com">krupalipatel092@gmai.com</a>
          .
        </p>
        <p>
          Or connect with me through{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div> */}
    </div>
  );
}
