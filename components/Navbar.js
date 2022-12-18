import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  const navRoutes = {
    "/": "Home",
    "/project": "Projects",
    "/experience": "Experience",
    "/contact": "Contact",
  };
  return (
    <>
      <div className="flex items-center justify-between px-20 py-8 border z-1 sticky top-0 ">
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
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
      </div>
    </>
  );
}

export default Navbar;
