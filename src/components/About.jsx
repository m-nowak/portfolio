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
import { skillsList } from "../constants";

const About = () => {
  return (
    <div className=" min-h-[100vh] w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto flex ">
        <div className="px-4 py-4 flex flex-col w-[100%]">
          <motion.div
            className="flex flex-col w-full "
            variants={textVariantFromTop(0.1)}
          >
            <h1 className="text-2xl sm:text-3xl pb-2 font-bold text-gray-900">
              About
            </h1>

            <motion.span
              className="bg-indigo-600 h-2 rounded-r-lg"
              variants={growUp("160px", "spring", 0.1, 1)}
            ></motion.span>
          </motion.div>
          <div className="flex items-start justify-between flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%]">
              <h2 className="mt-6 sm:mt-12 text-lg sm:text-xl font-medium text-gray-900">
                OVERVIEW
              </h2>

              <motion.div
                variants={fadeIn("", "", 0.2, 1)}
                className=" font-normal text-gray-900 text-sm sm:text-[16px] pt-2"
              >
                My name is Michal Nowak. I am a full stack developer with over
                ten years of experience in building web applications. I have
                expertise in both front-end and back-end development, as well as
                machine learning and database design. My favorite languages are
                JavaScript and Python, which I use to build fast and scalable
                solutions. I enjoy creating user-friendly, responsive, and
                secure applications. I am always eager to learn new skills and
                explore new challenges...
              </motion.div>
            </div>{" "}
            <div className="h-[320px] w-[100%] md:w-[50%] py-3 flex justify-center items-center md:justify-end ">
              <FibonacciImage />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="mt-2 sm:mt-1 flex flex-col"
        variants={textVariantFromBottom(0.6)}
      >
        {" "}
        <h2 className=" text-lg sm:text-xl font-medium text-gray-900 text-center">
          SKILLS
        </h2>
        <div className="max-w-7xl px-4 py-4 mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          {skillsList.map((skill) => (
            <div
              className="h-[300px] bg-white shadow-lg rounded-md"
              key={skill.type}
            >
              <img
                src={skill.image}
                alt="frontend"
                className={`m-5 rounded-full p-1 w-10 h-10 justify-center items-center ${skill.color}`}
              />

              <div className="px-4">
                <h2 className="font-semibold text-gray-700 text-base sm:text-lg">
                  {skill.type}
                </h2>
                <p className="mt-4 font-normal text-gray-600 text-small sm:text-base">
                  {skill.skills}
                </p>
              </div>
            </div>
          ))}
        </div>{" "}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
