import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import {
  fadeIn,
  growUp,
  svgGrowUp,
  textVariantFromTop,
  textVariantFromBottom,
} from "../utils/motion";
import FibonacciImage from "./FibonacciImage";

const About = () => {
  return (
    <div className=" min-h-[100vh] w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto h-full flex items-start">
        <div className="px-4 py-4 sm:py-8 flex flex-col w-[100%] md:w-[80%] lg:w-[50%] mx-auto justify-center">
          <motion.div
            className="flex flex-col h-full w-full "
            variants={textVariantFromTop(0.1)}
          >
            <h1 className="text-2xl sm:text-3xl pb-2 font-bold text-gray-900">
              About
            </h1>
            <motion.span
              className="bg-indigo-600 h-2 rounded-r-lg"
              variants={growUp("160px", "spring", 0.1, 1)}
            ></motion.span>
            <h2 className="mt-6 sm:mt-12 text-lg sm:text-xl font-medium text-gray-900">
              OVERVIEW
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.2, 1)}
            className=" font-normal text-gray-900 text-base sm:text-lg pt-2 pb-4"
          >
            My name is Michal Nowak. I started coding with HTML, CSS,
            JavaScript, JQuery, Ajax, PHP and MySql in 2008. I like to learn
            with new technologies. I&apos;m a quick learner, who create modern,
            fully&nbsp;responsive and user&nbsp;friendly applications.
          </motion.div>
          <div className=" flex lg:hidden mt-2 p-10 w-[100%] sm:w-[80%] sm:ml-[10%] items-center justify-center">
            <FibonacciImage />
          </div>
          <motion.div
            className="mt-6 sm:mt-8 flex flex-col"
            variants={textVariantFromBottom(0.6)}
          >
            {" "}
            <h2 className="mt-6 sm:mt-12 text-lg sm:text-xl font-medium text-gray-900 text-center">
              SKILLS
            </h2>
            <div className="flex flex-row mt-4 justify-start items-center shadow-none sm:shadow-md p-2 rounded-full border-none sm:border-gray-50 sm:border-[1px] sm:bg-white">
              <img
                src="assets/frontend.svg"
                alt="frontend"
                className="hidden sm:inline rounded-full p-1 w-20 h-20 bg-indigo-500 justify-center items-center"
              />

              <div className="sm:pl-3">
                <h2 className="font-semibold text-gray-700 text-base sm:text-lg">
                  Frontend
                </h2>
                <p className="font-normal text-gray-500 text-small sm:text-base">
                  HTML, CSS, JavaScript, TypeScript, React, Next.js,
                  Tailwind&nbsp;CSS, React&nbsp;Query, Zustand, Valtio
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center mt-4 sm:mt-12 shadow-none sm:shadow-md p-2 rounded-full border-none sm:border-gray-50 sm:border-[1px] sm:bg-white">
              <img
                src="assets/backend.svg"
                alt="backend"
                className="hidden sm:inline rounded-full p-1 w-20 h-20 bg-gray-700 justify-center items-center"
              />

              <div className="sm:pl-3">
                <h2 className="font-semibold text-gray-700 text-base sm:text-lg">
                  Backend
                </h2>
                <p className="font-normal text-gray-500 text-small sm:text-base">
                  Python, Django Rest Framework, Node.js, Express.js, Prisma,
                  MongoDB, MySql, PostgreSQL
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center mt-4 sm:mt-12 shadow-none sm:shadow-md p-2 rounded-full border-none sm:border-gray-50 sm:border-[1px] sm:bg-white">
              <img
                src="assets/ai.svg"
                alt="backend"
                className="hidden sm:inline rounded-full p-1 w-20 h-20 bg-gray-400 justify-center items-center"
              />

              <div className="sm:pl-3">
                <h2 className="font-semibold text-gray-700 text-base sm:text-lg">
                  Artificial Intelligence
                </h2>
                <p className="font-normal text-gray-500 text-small sm:text-base">
                  Python, NumPy, Pandas, Seaborn, SciKit-Learn, Tensorflow,
                  Keras, PyTorch
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="hidden p-4 lg:flex flex-col w-[50%] h-full items-end">
          <FibonacciImage />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
