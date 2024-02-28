import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
// import { Link } from 'react-router-dom'
import DetailSrvice from "./DetailSrvice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Developement",
    description:
      "As a Front-end web developer, I use HTML, CSS, JavaScript, and React and Angular to build engaging websites and apps. With a focus on user experience, I create visually appealing designs and interactive features, ensuring efficiency and scalability with React.",
  },

  {
    name: "UI/UX Design",
    description:
      " Using Figma, I design user-friendly digital interfaces and prototypes. I create layouts and mockups focusing on simplicity and functionality. While still learning, I aim to make designs that enhance user satisfaction and engagement.",
  },
  {
    name: "Costomer service",
    description:
      "I blend technical knowledge with a customer-friendly approach. My goal is to provide top-notch support and create valuable content that bridges the gap between technology and customers... ",
  },
];
const Service = () => {
  const variants = {
    hidden: { opacity: 0, x: 70 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Increase duration to slow down
  };
  return (
    <section className="section pt-10  pb-10 lg:mt-24" id="service">
      <div className="container   mx-auto lg:h-full">
        <div className="flex flex-col gap-20 lg:flex-row ">
          <motion.div
            variants={variants}
            initial={{ opacity: 0, x: -70 }}
            whileInView={"show"}
            className="flex-1 service mix-blend-lighten sm:pt-10 lg:bg-right"
          >
            <h2 className="text-[35px] font-semibold leading-[1] text-green-500 mb-16 pt-1">
              {" "}
              My Services . . .
            </h2>
            <h3 className="text-[1.7rem] mb-16 max-w-[355px]">
              I'm a Freelancer Front-End Developer with Junior Experience Level
            </h3>
            <a href="#contact" className="all-btn flex  justify-center">
              {" "}
              Contct Me{" "}
            </a>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <div>
              {services.map((Servs, index) => {
                const { name, description, link } = Servs;

                return (
                  <div
                    className="border-b border-white/20  mb-[36px] flex items-center"
                    key={index}
                  >
                    <div className="max-w [476px] ">
                      <h4 className="text-[20px] tracking-wider h-font font-semibold mb-6 mt-">
                        {name}
                      </h4>
                      <p className="sec-font mb-6 max-w-[450px] lg:text-[20px] lg:max-w-[600px] leading-tight">
                        {" "}
                        {description}
                      </p>
                    </div>
                    <div className="mb-4 text-[16px] flex-1 flex flex-col items-end ">
                      <Link
                        to="detail"
                        className="h-10 w-10 rounded-full linear flex  items-center justify-center "
                      >
                        <BsArrowUpRight />
                      </Link>
                      {/* <a href='./DetailSrvice' className='text-gradient font-semibold text '>{link}</a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
