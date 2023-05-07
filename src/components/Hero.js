import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariantFromBottom } from "../utils/motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" h-[100vh] w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 to-white overflow-hidden "
    >
      <div className="max-w-7xl mx-auto h-full relative">
        <div className=" absolute z-10  h-full w-full inset-0">
          <div className="flex w-full h-full justify-between">
            <div className="flex items-end">
              <motion.img
                animate={{ rotate: 360 }}
                transition={{
                  ease: "linear",
                  duration: 12,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                width={"240"}
                src="assets/circle-3.svg"
                alt="circle"
                className="rounded-full md:ml-40 md:mb-40"
              />
            </div>
            <div className="flex items-start overflow-hidden">
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 48, repeat: Infinity }}
                width={"420"}
                src="assets/circle-2.svg"
                alt="circle"
                className=" rounded-full"
              />
            </div>
          </div>
        </div>
        <div className=" absolute z-20 h-[90%] w-[90%] inset-[5%] sm:h-[80%] sm:w-[80%] sm:inset-[10%]">
          <motion.div
            className="flex flex-col h-full w-full items-center justify-center"
            variants={textVariantFromBottom()}
            initial="hidden"
            animate="show"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 text-center">
              Hi, I&apos;m <span className="text-indigo-700">Michal</span>.
            </h1>
            <p className="text-base md:text-lg font-normal text-gray-800 mt-2 text-center">
              I am a full stack developer <br className="sm:hidden" /> located
              in Rugby, UK.
            </p>

            <div className="mt-10 flex space-x-10">
              {" "}
              <a href="#about">
                <div className="h-24 w-24 rounded-full shadow-lg flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
                  <div className="w-[35px] h-[64px] rounded-3xl border-4 border-indigo-500 flex justify-center items-start p-2">
                    <motion.div
                      animate={{
                        y: [0, 24, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      className="w-3 h-3 rounded-full bg-indigo-500 mb-1"
                    ></motion.div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
