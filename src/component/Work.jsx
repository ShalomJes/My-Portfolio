import React from "react";
import { motion } from "framer-motion";
// import ''
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Work = () => {
  // const Image1 = require('../bg-images/shop1.png')
  const variants = {
    hidden: { opacity: 0, x: 70 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Increase duration to slow down
  };
  const Image2 = require("../bg-images/E-comerce1.png");
  const Image3 = require("../bg-images/game.png");
  const Image4 = require("../bg-images/menuhome.png");
  const Image5 = require("../bg-images/Adventure.png");
  return (
    <section className="mx-auto" id="work">
      <div className="container relative md:pt-10 lg:mt-20 lg:pt-1 mx-auto ">
        <div className="flex container  md:pt-10 mt-20 lg:pt-2  relative flex-wrap gap-10 lg:flex-col ">
          {/* <motion.div */}
          {/* variants={variants}
            initial={{ opacity: 0, x: -70 }}
            whileInView={'show'}
            className='flex-1 flex flex-col gap-y-10 mb-16 lg:mb-0' > */}
          <motion.div
            variants={variants}
            initial={{ opacity: 0, x: -70 }}
            whileInView={"show"}
            className="flex justify-center item-center "
          >
            <div className="max-w-[1300px] flex flex-col gap-5">
              <h2 className="h-font leading-tight text-[35px] font-semibold text-green-500">
                My Latest
                <br />
                Work.
              </h2>
              <p className=" mb-16 sec-font text-[1.3rem] ">
                "Discover a collection of my web development projects,
                highlighting my expertise in frontend technologies like React.js
                and tailwind and my first web-designing example. Each project
                showcases my dedication to delivering innovative user interfaces
                and excellence in web development."
              </p>
            </div>
            {/* <button className='all-btn mb-16'>View All Projects</button> */}
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView={"show"}
            className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-10 justify-items-center "
          >
            <div className="group relative w-[400px] overflow-hidden border-2 border-white/60 rounded-xl ">
              <div className="group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                src={Image2}
                alt="image from shoping project "
                className=" w-full object-fill h-[250px] group-hover:scale-125 transition-all duration-500"
              />

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-48 
                         transition-all duration-500 z-50"
              >
                <a
                  href="https://shalselam.github.io/E-comerce-New/"
                  target="_blank"
                >
                  <span className="text-gradient flex items-center  gap-5 text-[2rem] ">
                    Shoping
                    <FaGithub color="white " />
                  </span>
                </a>
              </div>

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-20
                       transition-all duration-700 z-50"
              >
                <span className="text-xl text-white">
                  Explore a lively shopping landing page, with featuring animation with React and Tailwind
                </span>
              </div>
            </div>
            <div className="group relative w-[400px] overflow-hidden border-2 border-white/60 rounded-xl ">
              <div className="group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                src={Image5}
                alt="image from shoping project "
                className=" w-full object-fill h-[250px] group-hover:scale-125 transition-all duration-500"
              />

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-48
                         transition-all duration-500 z-50"
              >
                <a
                  href="https://shalselam.github.io/Adventure-Ethiopia/"
                  target="_blank"
                >
                  <span className="text-gradient flex items-center  gap-2 text-[2rem] ">
                    Adventure-Ethiopia
                    <FaGithub color="white " />
                  </span>
                </a>
              </div>

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-24
                       transition-all duration-700 z-50"
              >
                <span className="text-xl text-white">
                Experience the transformation of a Figma design into a fully
                  functional web page.              </span>
              </div>
            </div>

            <div className="group w-[400px] relative overflow-hidden border-2 border-white/60 rounded-xl ">
              <div className="group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                src={Image3}
                alt="image from shoping project "
                className="group-hover:scale-125 w-full object-fill h-[250px] transition-all duration-500"
              />

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-48
                         transition-all duration-500 z-50"
              >
                <a
                  href="https://github.com/shalselam/diceGame.git"
                  target="_blank"
                >
                  <span className="text-gradient flex items-center cursor-pointer gap-5 text-[2rem]">
                    Dice Game
                    <FaGithub color="white " />
                  </span>
                </a>
              </div>

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-24
                       transition-all duration-700 z-50"
              >
                <span className="text-xl text-white">
                  I develope a Dice Game which allow two player, with Vanila CSS
                  and Pure JavaScript{" "}
                </span>
              </div>
            </div>

            <div className="group w-[400px] relative overflow-hidden border-2 border-white/60 rounded-xl ">
              <div className="group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                src={Image4}
                alt="image from shoping project "
                className="group-hover:scale-125 w-full object-fill h-[250px]  transition-all duration-500"
              />

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-48
                         transition-all duration-500 z-50 "
              >
                <a
                  href="https://github.com/shalselam/hotelShali.git"
                  target="_blank"
                >
                  <span className="text-gradient flex items-center gap-5 text-[2rem]">
                    Hotel-Menu
                    <FaGithub color="white " />
                  </span>
                </a>
              </div>

              <div
                className=" h-font absolute -bottom-full left-12 group-hover:bottom-24
                       transition-all duration-700 z-50"
              >
                <span className="text-xl text-white">
                  A landing page for Hotels menu, events, table reservations and all hotels info.
                </span>
              </div>
            </div>
          </motion.div>
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
