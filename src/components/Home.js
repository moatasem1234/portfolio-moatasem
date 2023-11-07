import React from "react";
import Hero from "../images/Hero1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  // const va ={
  //   E :  t('Engineer'),
  //   W : t('Web_Developer')
  // }
  return (
    <section
      name={"Home"}
      className="w-full h-screen bg-gradient-to-b from-slate-800 to-slate-700  text-gray-200  "
    >
      <div className="max-w-screen-lg mx-auto  sm:pt-4 items-center flex flex-col justify-between h-full px-4 md:flex-row ">
        <div className=" flex flex-col justify-center h-full ">
          <motion.h2
            variants={fadeIn("left", 0.7)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl  sm:text-7xl font-bold"
          >
           { t("I'm") }  
            <TypeAnimation
              sequence={[ t('Engineer') , 2000,t('Web_Developer'), 2000]}
              speed={50}
              className="text-green-400"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-2xl text-gray-400  mt-6  font-medium "
          >
            An enthusiastic IT engineer committed to developing innovative and
            effective technology solutions.       <br /> I aim to participate in technical
            projects that contribute to the development of society and achieve
            continuous improvements
     
          </motion.p>
          <Link to="Works" smooth duration={500} className="mt-6">
            <motion.button
              variants={fadeIn("left", 0.7)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex group  hover:scale-105 duration-200  bg-gradient-to-r from-blue-700 to-purple-600 text-gray-200  px-4 py-2  rounded-lg items-center"
            >
              {t('Works')}
              <span>
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className=" group-hover:rotate-90 duration-300 text-xl "
                />
              </span>
            </motion.button>
          </Link>
        </div>
        <motion.div
          variants={fadeIn("left", 0.7)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="  w-96 mx-auto "
        >
          <img src={Hero} className="rounded-2xl mx-auto" alt="Hero F" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
