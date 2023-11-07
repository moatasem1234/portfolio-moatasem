import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Project1 from "../images/Project1.jpg";
import Project2 from "../images/Project2.jpg";
import Project4 from "../images/Porject4.png";
import Project5 from "../images/Porject5.png";
import Project6 from "../images/Porject6.png";
import Skillapi from "../images/Skillapi.png";
const Portfolio = () => {
  const assets = [
    {
      id: 1,
      src: Project1,
      link: "https://github.com/moatasem1234/Ghather_app",
    },
    {
      id: 2,
      src: Project2,
      link: "https://github.com/moatasem1234/Ghather_app",
    },
    {
      id: 3,
      src: Skillapi,
      link: "https://github.com/moatasem1234/Rastapi-skills",
    },
    {
      id: 4,
      src: Project4,
      link: "https://github.com/moatasem1234/Movie_app",
    },
    {
      id: 5,
      src: Project5,
      link: "https://github.com/moatasem1234/Movie_app",
    },
    {
      id: 6,
      src: Project6,
      link: "https://github.com/moatasem1234/Movie_app",
    },
  ];

  return (
    <section
      name="Works"
      className=" md:h-screen bg-gradient-to-b text-slate-100  from-slate-600  to-slate-700"
    >
      <div className=" max-w-screen-lg flex flex-col justify-center mx-auto  p-4 w-full h-full ">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" pb-8 "
        >
          <h2 className=" text-4xl font-bold inline  text-green-400 border-b-4  border-green-400  ">
            Wroks
          </h2>
          <p className="py-6 ">Chack out some fo my work here </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {assets.map(({ id, src, link }) => (
            <motion.div
              variants={fadeIn("left", id / 6)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={id}
              className=" shadow-md shadow-gray-600  rounded-xl "
            >
              <img
                className=" rounded-lg duration-200 hover:scale-105"
                src={src}
                alt="error"
              />
              <div className=" flex item-center justify-center">
                <a
                  target="blank"
                  href={link}
                  className="  bg-gradient-to-r text-center from-blue-700 to-purple-600 rounded-xl  w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105 "
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
