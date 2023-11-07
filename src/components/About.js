import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <section
      name="About"
      className=" sm:pt-8 h-screen bg-gradient-to-b  from-slate-700  to-slate-600"
    >
      <div className=" flex flex-col justify-center p-4 w-full h-full text-gray-200 mx-auto max-w-screen-lg">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="pb-8 "
        >
          <h2 className=" text-4xl inline  text-green-400 border-b-4  border-green-400 ">
            About
          </h2>
        </motion.div>
        <div>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum soc
            habitant morbi tristique senect et net null et non pro id est
            laborum. Lorem ipsum dolor sit amet, consect et net null et non pro
            id est laborum et ullamco labor ullamco labor ullam coales Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Cum soc habitant
            morbi tristique senect et net null et non pro id est
          </motion.p>
          <br />
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-xl"
          >
            laborum. Lorem ipsum dolor sit amet, consect et net null et non pro
            id est laborum et ullamco labor ullamco labor ullam coales Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Cum soc habitant
            morbi tristique senect et net null et non pro id est laborum. Lorem
            ipsum dolor sit amet, consect et net null et non pro id est laborum
            et ullamco labor ullamco labor ullam coales
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
