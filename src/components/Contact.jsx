import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section
      name="Contact"
      className="md:h-screen bg-gradient-to-b text-slate-100  from-slate-600  to-slate-700"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto  p-4 w-full h-full ">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="pb-8"
        >
          <h2 className="   text-4xl font-bold inline  p-2 text-green-400 border-b-4  border-green-400 ">
            Contact
          </h2>
          <p className="py-6">
            submit the contact form below to get in touch with me
          </p>
        </motion.div>
        <div className=" flex justify-center items-center">
          <motion.form
            variants={fadeIn("right", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            action="https://getform.io/f/a0a4c6aa-0236-4cfd-b4fd-52138063bf75"
            method="POST"
            className=" sm:px-10 flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 mt-2 bg-transparent border-2  rounded-md text-white focus:outline-none "
            />
            <input
              type="email"
              name="name"
              placeholder="Enter Your Email"
              className="p-2 bg-transparent border-2 mt-2 rounded-md text-white focus:outline-none "
            />
            <textarea
              name="massege"
              placeholder="Enter Your Massege"
              id=""
              rows={10}
              className="p-2 bg-transparent border-2 mt-2 rounded-md text-white focus:outline-none "
            ></textarea>

            <button
              type="submit"
              className="  text-white bg-gradient-to-r text-center from-blue-700 to-purple-600 rounded-xl  w-1/2 px-4 py-2 mt-4 duration-200 hover:scale-105 "
            >
              send{" "}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
