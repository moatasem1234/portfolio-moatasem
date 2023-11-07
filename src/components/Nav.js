import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  const { t, i18n } = useTranslation();

  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Works",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <nav className=" sm:pt-4 flex w-full text-white items-center px-4 justify-between h-20 bg-slate-800  ">
      <motion.h1
        variants={fadeIn("left", 0.7)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        name="top"
        className=" text-3xl pt-2 text-green-400  font-medium"
      >
        {t("Title")}
      </motion.h1>
      <ul className=" pt-2 hidden md:flex  ">
        {links.map((link) => (
          <motion.li
            variants={fadeIn("up", 0.6)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            key={link.id}
            className=" capitalize hover:text-lg hover:text-green-400 duration-200 text-gray-200 cursor-pointer px-4"
          >
            <Link to={link.link} smooth duration={500}>
              {" "}
              {t(link.link)}{" "}
            </Link>
          </motion.li>
        ))}
        <motion.li
          variants={fadeIn("up", 0.6)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <select
            className=" bg-slate-600 rounded-md text-green-200  focus: outline-none "
            onChange={changeLanguageHandler}
          >
            <option className="rounded-md" value="en">
              English
            </option>
            <option className="rounded-md" value="ar">
              عربي
            </option>
          </select>
        </motion.li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" md:hidden pr-4 cursor-pointer z-10  text-gray-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col text-gray-200 absolute top-0 left-0 justify-center w-full h-screen  bg-gradient-to-b from-slate-800 to-slate-700 items-center">
          {links.map((link) => (
            <li
              key={link.id}
              className=" capitalize   hover:scale-110 duration-200 text-4xl text-gray-200 cursor-pointer py-6 px-4"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link.link}
                smooth
                duration={500}
              >
                {" "}
                {t(link.link)}
              </Link>
            </li>
          ))}
          <li>
            <select
              className=" bg-slate-600 rounded-md text-green-200  focus: outline-none "
              onChange={changeLanguageHandler}
            >
              <option className="rounded-md" value="en">
                English
              </option>
              <option className="rounded-md" value="ar">
                عربي
              </option>
            </select>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
