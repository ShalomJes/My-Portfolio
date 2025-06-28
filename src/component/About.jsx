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
    <section className="mx-auto" id="about" ref={Ref}>
      <div className="container relative md:pt-10 lg:mt-20 lg:pt-1 mx-auto ">
        <div className="md:flex  gap-28">
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView={"show"}
            src={img}
            alt=""
            className="flex sm:mt-10 sm:h-[200px  max-w-[50%]   lg:h-[500px] object-contain"
          />
          <div className="flex items-center justify-center  lg:block">
            <motion.div
              variants={variants}
              initial={{ opacity: 0, y: 70 }}
              whileInView={"show"}
            >
              <div className="flex-1 mt-10">
                <h1 className="mb-6  lg:text-[40px] h-font font-secondary text-[35px] font-semibold leading-[1] text-green-500">
                  About Me.
                </h1>
                <h3 className="text-[1.7rem] font-semibold mb-4 sec-font">
                  I'm a Front-End Developer with 2 years Experience,
                </h3>
                <p className=" mb-6 sec-font text-[18px] ">
                  I’m an IT graduate with over two years of hands-on experience
                  in front-end web development. I specialize in creating clean,
                  responsive, functionaland user-friendly web interfaces using
                  modern tools like React.js. I’m skilled in working with
                  JavaScript, Redux, and TailwindCSS(e.g.Chakra UI, ShadCn UI),
                  and enjoy building smooth, seamless user experiences. I’m
                  passionate about writing clean, reusable code, improving
                  performance, and keeping up with the latest front-end
                  technologies. I’m excited about the opportunity to bring these
                  skills to any projects and help create smart, effective
                  digital solutions.
                </p>
              </div>
              <div className="flex i gap-x-6 lg:gap-x-10 h-font mb-7">
                <div>
                  <div className="text-[40px] font-semibold text-gradient mb-2">
                    {inView ? <CountUP start={0} end={2} duration={3} /> : null}
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
