import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
export default function Budgify() {
  return (
    <div>
      <Navbar />

      <div className="pt-22 grid items-start justify-items-center min-h-screen pb-20 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[20px]  items-center sm:items-start">
          <div className="w-full flex justify-start px-8 sm:px-0">
            <Link
              href="/#projects"
              className="text-[color-mix(in srgb, var(--primary-color) 60%, white)] text-sm hover:text-[var(--primary-color)] py-1 transition-colors mt-4"
            >
              ← <span className="ml-1">Back</span>
            </Link>
          </div>
          {/* <div className="font-size-20 flex flex-col gap-1 text-gray-500 px-8 sm:px-0 text-lg sm:text-xl text-center sm:text-left">
            <p>Budgify Case Study </p>
          </div> */}
          <div className="flex flex-col gap-3 text-2xl sm:text-4xl px-4 sm:px-0">
            <h1 className="font-medium font-[Playfair_Display] text-center sm:text-left">
              This page is currently under construction ⚙️{" "}
            </h1>
          </div>
          <div className="font-size-20 flex flex-col gap-1 text-gray-500 sm:px-0 text-md sm:text-lg text-center sm:text-left">
            <p>
              To view the Budgify case study, please click the button below:{" "}
            </p>
          </div>
          <div>
            <button className="cursor-pointer mr-4 px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
              <span className="text-sm inline-flex items-center py-1 px-1">
                {" "}
                <Link
                  href="/CaseStudy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" ml-1"
                >
                  View Case Study PDF
                </Link>
              </span>
            </button>
            <button className="cursor-pointer px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
              <span className="text-sm inline-flex items-center py-1 px-1">
                <Link
                  href="https://www.figma.com/file/PSRKO5bPhVMyWIVmED4jj7/Student-Budget-Planner?node-id=19-2&t=3qarJL272OJfceSD-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" ml-1"
                >
                  View Figma File
                </Link>
              </span>
            </button>
          </div>

          <div className="font-size-20 flex flex-col gap-1 text-gray-500 sm:px-0 text-md sm:text-lg text-center sm:text-left mt-7">
            <p>
              If you have any questions or feedback, feel free to reach out to
              me at{" "}
              <a
                href="mailto:krupalipatel092@gmail.com"
                className="underline text-[var(--primary-color)]"
              >
                krupalipatel092@gmail.com
              </a>
            </p>
          </div>

          {/* <div className="mt-40 flex flex-col gap-3 text-2xl sm:text-4xl px-4 sm:px-0">
        <h1 className="font-medium font-[Playfair_Display] text-center sm:text-left">
          Sneak Peek!{" "}
        </h1>
        </div> */}
        </main>
      </div>
    </div>
  );
}
