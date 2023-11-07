import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/moatasem-mdaraty-59b227239/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/moatasem1234/",
      style: " ",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:matsmbllah1234@gmail.com",
      style: " ",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/moatasem-mdaraty.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 1.5 }}
      animate={{ opacity: 1, x: 0 }}
      className=" flex flex-col top-[35%] left-0 fixed"
    >
      <ul>
        {links.map(({ id, child, style, href, download }) => (
          <li
            key={id}
            className={
              " cursor-pointer ml-[-100px]  hover:ml-[-10px] duration-300 flex justify-between items-center w-40 h-14  px-4 bg-gradient-to-r from-blue-700 to-purple-600" +
              " " +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="blank"
              className=" text-slate-200  w-full flex justify-between items-center "
            >
              {child}
            </a>
          </li>
        ))}
        ;
      </ul>
    </motion.section>
  );
};

export default SocialLink;
