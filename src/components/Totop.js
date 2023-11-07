import React from "react";
import { BsArrowBarUp } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Totop = () => {
  return (
    <motion.div
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    transition={{ duration: 5 }}
    >
      <Link
        className=" p-4  cursor-pointer text-white font-bold bg-gradient-to-r text-center from-blue-700 to-purple-600 fixed  bottom-10 right-10 rounded-full "
        to="top"
        smooth
        duration={500}
      >
        <BsArrowBarUp className=" text-center text-xl " />
      </Link>
    </motion.div>
  );
};

export default Totop;
