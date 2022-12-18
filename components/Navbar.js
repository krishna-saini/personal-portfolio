import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const navRoutes = {
  "/": "Home",
  "/project": "Projects",
  "/experience": "Experience",
  "/contact": "Contact",
};

function Navbar() {
 
  return (
    <>
      <nav className="flex items-center justify-between px-20 py-8 border z-1 dark:text-white ">
        {/* different section list  */}
        <ul className="flex items-center justify-between gap-20 font-burtons ">
          {Object.keys(navRoutes).map((path, index) => {
            return (
              <li key={index}>
                <Link href={path}>{navRoutes[path]}</Link>
              </li>
            );
          })}
        </ul>
        {/* dark mode and resume  */}
        <ul className="flex items-center font-burtons gap-20">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li>
          <li>
            <Link
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="https://drive.google.com/file/d/16q_KCF1tV0UZfeTgMO5qJbvhwtFYXG8k/view"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
