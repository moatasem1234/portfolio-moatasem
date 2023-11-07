import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Reactimage from "../images/tech/React.png";
import Bootstrap from "../images/tech/Bootstrap.png";
import CSS3 from "../images/tech/CSS3.png";
import Html from "../images/tech/Html.png";
import Github from "../images/tech/Github.png";
import JavaScript from "../images/tech/JavaScript.png";
import Laravel from "../images/tech/Laravel.png";
import Tailwindcss from "../images/tech/Tailwindcss.png";
import Python from "../images/tech/Python.png";

const Skills = () => {
  const SkillsImage = [
    {
      id: 1,
      src: Html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS3,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: Reactimage,
      title: "React js",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: Tailwindcss,
      title: "Tailwindcss",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: Laravel,
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: Python,
      title: "Python",
      style: "shadow-yellow-300",
    },
  ];

  return (
    <section
      name="Skills"
      className=" md:h-screen bg-gradient-to-b text-slate-100  from-slate-700  to-slate-600"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto  p-4 w-full h-full ">
        <div>
          <motion.h2
            variants={fadeIn("left", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="   text-4xl font-bold inline  p-2 text-green-400 border-b-4  border-green-400 "
          >
            Skills
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-6"
          >
            Thera are the technologies i've worked with
          </motion.p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 py-6 px-12 sm:px-0">
          {SkillsImage.map(({ id, title, style, src }) => (
            <motion.div
              variants={fadeIn("left", id/8)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={id}
              className={
                " shadow-md hover:scale-105 duration-500 py-2 rounded-lg " +
                " " +
                style
              }
            >
              <img className="w-20 mx-auto" src={src} alt="css fo" />
              <p className="mx-auto mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
