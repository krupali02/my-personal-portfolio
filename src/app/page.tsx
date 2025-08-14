"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  pb-20 sm:px-20  font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[20px] row-start-2 items-center sm:items-start">
          <div className="flex flex-col gap-3 text-2xl sm:text-4xl px-4 sm:px-0">
            <h1 className="font-medium font-[Playfair_Display] text-center sm:text-left">
              Hi, I’m Krupali!
            </h1>
            <h1 className="font-medium font-[Playfair_Display] text-center sm:text-left">
              A Computer Science student @ York University.
            </h1>
          </div>
          <div className="font-size-28 flex flex-col gap-1 text-gray-500 px-8 sm:px-0 text-md sm:text-lg text-center sm:text-left">
            <p>
              I love to use my creativity to design unique and practical
              solutions that make a difference.
            </p>
            <p>
              Previously worked as a Frontend Developer @ RBC and Full-Stack
              Developer @ Scotiabank.
            </p>
          </div>
          <p className="text-lg text-gray-500 pt-4 text-center text-sm sm:text-lg sm:text-left">
            Check out my projects{" "}
            <a
              href="#projects"
              className="font-medium text-(--primary-color) cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              below
            </a>
            , view my{" "}
            <span className="font-medium text-(--primary-color)  ">resume</span>{" "}
            or say{" "}
            <span className="font-medium text-(--primary-color)  ">hello</span>{" "}
            👋!
          </p>
        </main>
      </div>
      {/* Projects Section */}
      <div
        id="projects"
        className="grid grid-rows-[0px_1fr_20px] justify-items-start min-h-screen p-8 py-20 pb-20 sm:px-60 font-[family-name:var(--font-geist-sans)]"
      >
        <main className="flex flex-col gap-[20px] row-start-2 items-start w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-1 gap-2">
              <h2 className="text-4xl font-medium font-[Playfair_Display] text-left">
                Selected Projects
              </h2>
              <Link href="/all-projects" passHref>
                <span className="text-[var(--primary-color)] font-medium cursor-pointer flex items-center h-full text-center sm:ml-0 ml-1 pt-2 sm:pt-0">
                  See all projects
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Card 1 */}
            <div className="flex-1 bg-white">
              <img
                src="../img/budgify.png"
                alt="Project One"
                width={400}
                height={250}
              />
              <h3 className="text-gray-600  font-semibold pt-4 text-xs text-[var(--primary-color)]">
                FALL 2023 • UX RESEARCH, UI DESIGN
              </h3>
              <h2 className="text-xl font-semibold mb-2 pt-1">Budgify</h2>

              <p className="text-gray-600 text-sm">
                Helping students manage their money efficiently during the
                school year.{" "}
              </p>

              <Link href="/budgify" passHref>
                <button className="cursor-pointer mt-4 px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                  <span className="text-sm inline-flex items-center py-1 px-1">
                    View Case Study{" "}
                    <svg
                      className="w-3 h-3 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* Card 1 */}
            <div className="flex-1 bg-white">
              <img
                src="../img/main_mockup_whack_a_mole.png"
                alt="Project One"
                width={400}
                height={250}
              />
              <h3 className="text-gray-600  font-semibold pt-4 text-xs text-[var(--primary-color)]">
                WINTER 2024 • UX RESEARCH, ANDROID APP DEVELOPMENT
              </h3>

              <h2 className="text-xl font-semibold mb-2 pt-1">Whack A Mole</h2>

              <p className="text-gray-600 text-sm">
                Application developed to test user handedness efficiency in
                gameplay.
              </p>

              <Link href="/mole" passHref>
                <button className="cursor-pointer mt-4 px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                  <span className="text-sm inline-flex items-center py-1 px-1">
                    View Case Study{" "}
                    <svg
                      className="w-3 h-3 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
      {/* Experience */}
      <div
        id="experience"
        className="grid grid-rows-[0px_1fr_20px] justify-items-start min-h-screen p-8 py-10 pb-20 sm:px-60 font-[family-name:var(--font-geist-sans)]"
      >
        <main className="flex flex-col gap-[20px] row-start-2 items-start w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-1 gap-2">
              <h2 className="text-4xl font-medium font-[Playfair_Display] text-left">
                Experience
              </h2>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary-color)] font-medium cursor-pointer flex items-center h-full text-center sm:ml-0 ml-1  pt-2 sm:pt-0"
              >
                See my resume
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-4">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2024 - April 2025
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Frontend Developer @ RBC
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Designed and developed UI components, wireframes, and branding
                  assets using React and Figma, while collaborating with clients
                  to gather insights and enhance internal tools.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    Skills:
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Figma
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      React
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Ant Design Framework
                    </li>

                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Jira
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Git
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2022 - April 2023
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Full Stack Web Developer @ Scotiabank
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Contributed to multiple high-impact projects that improved
                  internal workflows, streamlined communication, automated key
                  processes, and significantly reduced operational risks.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    Skills:
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      HTML
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      CSS
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Bootstrap
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Jira
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      ASP.NET
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      C#
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      SQL
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  June 2021 - April 2023
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Promotions Director @ York University's Bethune College
                  Council
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Led creative initiatives and collaborations to design
                  promotional content and organize events, boosting social media
                  engagement and student participation
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    Skills:
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Adobe Illustrator
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Adobe Photoshop
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Collaboration
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Organization
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Time Management
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </main>
      </div>
      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-md text-center py-4">
        <p className="text-gray-500 text-sm">© 2025 Krupali Patel.</p>
      </footer>
    </div>
  );
}
