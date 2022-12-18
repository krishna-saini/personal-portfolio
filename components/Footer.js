import React from "react";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMail,
  AiFillPhone
} from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";

const socialLinks = [
  {
    icon: <AiFillTwitterCircle />,
    href: "https://twitter.com/krishnasaini1",
  },
  {
    icon: <AiFillLinkedin />,
    href: "www.linkedin.com/in/krishna-saini-frontend-developer",
  },
  { icon: <AiFillGithub />, href: "https://github.com/krishna-saini" },
  {
    icon: <FaBlogger />,
    href: "https://krishnasaini.hashnode.dev/",
  },
  {
    icon:<AiFillMail/>,
    href:`mailto:krishna.saini19@yahoo.com`
  },
  {
    icon:<AiFillPhone/>,
    href:`tel:+917409948787`
  },

];

function Footer() {
  return (
    <div className="py-5 text-center border">
      <div className="text-3xl flex justify-center gap-16 py-3 ">
        {/* different section list  */}
        <ul className="flex items-center justify-between gap-20 font-burtons ">
          {socialLinks.map((link, index) => {
            return (
              <li key={index} className="bg-stone-400 p-2  text-white  rounded-full">
                <a href={link.href}>{link.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="text-lg mt-2  opacity-50">
				&copy; {new Date().getFullYear()} Krishna Saini. Built from scratch.
			</p>
    </div>

   
  );
}

export default Footer;
