import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import MobileApp from "../components/MobileApp";
import WebsiteApp from "../components/WebsiteApp";
export default function Budgify() {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 lg:px-40 py-10 ">
        <h1
          className="font-['Playfair_Display'] text-2xl md:text-4xl font-medium mb-10 justify-center items-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Archive
        </h1>
        <div>
          <p className="text-gray-700 text-base mb-2 ">
            Explore a curated selection of my projects, including case studies,
            mobile apps, and websites. <br /> Each project highlights my skills
            in UX research, UI design, frontend and mobile development.
          </p>
          <p className="text-gray-700 text-base mb-8 ">
            Click on any project to learn more about the process and
            technologies used.
          </p>
        </div>

        <div className="pb-22 grid items-start  pb-20 font-[family-name:var(--font-geist-sans)] justify-center items-center">
          <h2
            className="font-['Roboto'] text-lg md:text-2xl mb-4 font-semibold text-[var(--primary-color)]"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Case Studies
          </h2>
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
            </div>
          </div>
        </div>

        {/* Mobile Projects */}
        <div className="pb-22 grid items-start  min-h-screen pb-20 font-[family-name:var(--font-geist-sans)] justify-center items-center">
          <h2
            className="font-['Roboto'] text-lg md:text-2xl mb-6 font-semibold text-[var(--primary-color)]"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Mobile Apps
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <MobileApp
              appName="Bank On It"
              skill="ANDOID APP DEVELOPMENT, JAVA"
              description="App used to track certain actions (transactions, withdraw, transfer etc.) from your bank account."
              image="../img/bankonit.png"
              link="https://github.com/krupali02/Banking-App"
            />

            <MobileApp
              appName="Tic Tac Toe"
              skill="ANDROID APP DEVELOPMENT, JAVA"
              description="A version of the classic game of Tic Tac Toe, played between two players."
              image="../img/tictactoe.png"
              link="https://github.com/krupali02/Tic-Tac-Toe-App"
            />

            <MobileApp
              appName="Knock Knock"
              skill="REACT NATIVE"
              description="Mobile application that provides the user with 380+ unique jokes."
              image="../img/knockknock.png"
              link="https://github.com/krupali02/Knock-Knock"
            />
          </div>
        </div>

        {/* Website Projects */}
        <div className="pb-22 grid items-start   pb-20 font-[family-name:var(--font-geist-sans)]  items-center">
          <h2
            className="font-['Roboto'] text-lg md:text-2xl mb-6 mt-8 font-semibold text-[var(--primary-color)]"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Websites
          </h2>
          <WebsiteApp
            appName="Spacestagram"
            skill="FRONTEND DEVELOPMENT • JAVASCRIPT, HTML, CSS"
            description="Explore photos from Mars thanks to NASA's API."
            image="../img/space.png"
            link1="https://github.com/krupali02/Spacestagram"
            link2="https://krupali02.github.io/Spacestagram/"
          />

          <WebsiteApp
            appName="Here 4 You"
            skill="FRONTEND DEVELOPMENT • JAVASCRIPT, HTML, CSS"
            description="4 different activities you can do whenever you are feeling stressed and need to relax."
            image="../img/Here4You.png"
            link1="https://github.com/krupali02/Here4You"
            link2="https://krupali02.github.io/Here4You/"
          />

          <WebsiteApp
            appName="Marvel Diaries"
            skill="FRONTEND DEVELOPMENT • JAVASCRIPT, HTML, CSS"
            description="Collection of my thoughts and opinions on all the Marvel movies that I have watched (in release date order)."
            image="../img/marvel.png"
            link1="https://github.com/krupali02/marveldiaries"
            link2="https://krupali02.github.io/marveldiaries/"
          />

          <WebsiteApp
            appName="Artist Diaries"
            skill="FRONTEND DEVELOPMENT • JAVASCRIPT, HTML, CSS"
            description="Collection of my favourite artists, their history and their most famous art pieces."
            image="../img/artist.png"
            link1="https://github.com/krupali02/Artist-Diaries"
            link2="https://krupali02.github.io/Artist-Diaries/"
          />
        </div>
      </div>
    </div>
  );
}
