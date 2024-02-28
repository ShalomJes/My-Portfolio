import React from "react";
import img from "../bg-images/imgabout1.jpg";
import CountUP from "react-countup";
import { useInView } from "react-intersection-observer";
import { inView, motion } from "framer-motion";

const About = () => {
  const [Ref, inView] = useInView({
    threshold: 0.5,
  });
  const variants = {
    hidden: { opacity: 0, y: -70 },
    show: { opacity: 1, y: 0, transition: { duration: 2 } }, // Increase duration to slow down
  };
  return (
    <section className="pt-20" id="about" ref={Ref}>
      <div className="container mx-auto  ">
        <div className="flex sm:flex-col lg:flex-row gap-28">
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView={"show"}
            src={img}
            alt=""
            className="lg flex sm:h-[400px] sm:mt-10 lg:-mt-[100px]  lg:h-[500px] object-contain"
          />
          <div className="flex items-center justify-center  lg:block">
            <motion.div
              variants={variants}
              initial={{ opacity: 0, y: 70 }}
              whileInView={"show"}
            >
              <div className="flex-1">
                <h1 className="mb-6  lg:text-[40px] h-font font-secondary text-[35px] font-semibold leading-[1] text-green-500">
                  About Me.
                </h1>
                <h3 className="text-[1.7rem] font-semibold mb-4 sec-font">
                  I'm a Front-End Developer with Junior Experience ,
                </h3>
                <p className=" mb-6 sec-font text-[18px] ">
                  As an IT professional, I specialize in frontend web
                  development with expertise in React.js. with additional
                  customer service, I excel in problem-solving and delivering
                  exceptional service. Proficient in HTML, CSS, and
                  JavaScript,also familiarity with TypeScript and C# I transform
                  concepts into responsive web applications. Additionally, I'm
                  beginning to venture into web design, eager to combine my
                  technical expertise with creative design principles to create
                  engaging and visually appealing websites. Known for my
                  attention to detail and adaptability.
                </p>
              </div>
              <div className="flex i gap-x-6 lg:gap-x-10 h-font mb-7">
                <div>
                  <div className="text-[40px] font-semibold text-gradient mb-2">
                    {inView ? (
                      <CountUP start={10} end={1} duration={3} />
                    ) : null}
                    +
                  </div>
                  <div className="tracking-[2px]">
                    <br /> Experience{" "}
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-semibold text-gradient mb-2 ">
                    {inView ? <CountUP start={0} end={5} duration={3} /> : null}
                    +
                  </div>
                  <div className="tracking-[2px]">
                    Projects <br />
                    complete{" "}
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-semibold text-gradient mb-2">
                    {inView ? <CountUP start={0} end={6} duration={3} /> : null}
                    +
                  </div>
                  <p></p>
                  <div className="tracking-[2px]">
                    Month Self Learning <br /> and Practice Time{" "}
                  </div>
                </div>
              </div>
              <div className="flex gap-x-8 items-center">
                <a
                  href="#contact"
                  className="all-btn text-center font-semibold text-lg h-font"
                >
                  Contact Me
                </a>
                <a href="#work" className="text-gradient h-font text-[1.3rem] ">
                  My Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
