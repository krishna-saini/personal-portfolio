import Head from "next/head";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";

import { useState } from "react";
import avatar1 from "../public/avatar1.jpeg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import Link from "next/link";

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
];

const techStacks = [
  { name: "JavaScript", href: "/skills/js.svg" },
  { name: "React.js", href: "/skills/react.svg" },
  { name: "CSS3", href: "/skills/css3.svg" },
  { name: "Tailwind", href: "/skills/tailwind.svg" },
  { name: "HTML5", href: "/skills/html5.svg" },
  { name: "Next.js", href: "/skills/git.svg" },
  { name: "Git", href: "/skills/git.svg" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Krishna Saini</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Main  */}
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* hero section  */}
        <section className="min-h-screen py-20">
          <div className="flex items-center">
            {/* photo - left section */}
            <div className="h-80 w-80 bg-gradient-to-b from-teal-500  rounded-full mt-20 mx-auto relative overflow-hidden  md:h-96 md:w-96">
              <Image
                src={avatar1}
                alt="logo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* right hero section  */}
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Hi, I am Krishna
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                A Full Stack Developer with Specialization in Frontend
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                nesciunt eum suscipit eius asperiores, veniam minus amet quaerat
                harum! Maxime.
              </p>
              {/* social links  */}
              <div className="text-5xl flex justify-center gap-16 py-3 ">
                {/* different section list  */}
                <ul className="flex items-center justify-between gap-20 font-burtons ">
                  {socialLinks.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-stone-400 p-2  text-white  rounded-full"
                      >
                        <a href={link.href}>{link.icon}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section className="">
          <div>
            <h3 className="text-5xl text-center  text-teal-600 font-medium dark:text-teal-400 md:text-6xl ">Tech Stacks</h3>
            <div className="my-16 grid  gap-16 items-center grid-cols-3 sm:grid-cols-5">
              {/* skill 1  */}
              {techStacks.map((stack, index) => {
                return (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <Image
                      src={stack.href}
                      alt={stack.name}
                      width={80}
                      height={80}
                    />
                    <p className="font-semibold ">{stack.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* top project   */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              featured projects
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}
