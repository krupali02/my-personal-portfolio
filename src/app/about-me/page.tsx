import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { link } from "fs/promises";
export default function AboutMe() {
  return (
    <div>
      <Navbar />
      <section
        className="about-me-section"
        style={{ padding: "1rem", maxWidth: "80%", margin: "0 auto" }}
      >
        <h1
          className="font-['Playfair_Display'] text-2xl md:text-4xl font-medium mb-10 flex justify-center items-center text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Me
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
          <img
            src="../img/profile.jpeg"
            alt="Profile picture"
            width={300}
            height={300}
            style={{ borderRadius: "5%" }}
          />
          <div>
            <p className="mb-2">
              Hi, I’m Krupali, a recent Computer Science graduate from York
              University with a BSc. Over the past few years, I’ve built a
              strong foundation in software development through academic work,
              internships, and personal projects.
            </p>
            <p className="mb-2">
              I’ve had the opportunity to work at{" "}
              <strong style={{ color: "#033d99" }}>RBC</strong> as a
              <strong style={{ color: "#033d99" }}> Front-End Developer</strong>
              , where I used <strong style={{ color: "#033d99" }}>React</strong>
              , <strong style={{ color: "#033d99" }}>Ant Design</strong>, and{" "}
              <strong style={{ color: "#033d99" }}>Figma</strong> to create
              engaging user interfaces. I also completed a Full-Stack Web
              Developer internship at{" "}
              <strong style={{ color: "#ad0000" }}>Scotiabank</strong>, where I
              worked on both the front-end and back-end, gaining hands-on
              experience with <strong style={{ color: "#ad0000" }}>C#</strong>{" "}
              and <strong style={{ color: "#ad0000" }}>MySQL</strong>.{" "}
            </p>
            <p className="mb-2">
              Along the way, I’ve developed skills in JavaScript, CSS, HTML,
              Java, and Android app development, and I enjoy working with tools
              like Eclipse, IntelliJ, Android Studio, and Visual Studio Code.
              I’ve also used Figma extensively, whether it was for the YU Hacks
              hackathon, my User Interface course at York, or various personal
              projects.
            </p>
            <p className="mb-2">
              I’m passionate about blending design and functionality to create
              impactful, user-friendly experiences, and I’m always excited to
              learn new technologies that push my skills further.
            </p>
            <div className="flex flex-col sm:flex-row  gap-4 mt-4 w-full">
              <Link
                href="mailto:krupalipatel092@gmail.com"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto cursor-pointer px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                  <span className="text-md inline-flex items-center py-1 px-1">
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
                  <span className="text-md inline-flex items-center py-1 px-1">
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
                  <span className="text-md inline-flex items-center py-1 px-1">
                    GitHub
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
