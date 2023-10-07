import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import {
  growUp,
  textVariantFromTop,
  textVariantFromBottom,
} from "../utils/motion";
import { projects } from "../constants";
import Project from "./Project";

const Work = () => {
  return (
    <div className=" min-h-[100vh] w-full bg-gradient-to-b from-white from-10% via-gray-50 via-30% to-white to-90%">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-2 sm:py-4 flex flex-col w-[100%]">
          <motion.div
            className="flex flex-col h-full w-full justify-center items-center mt-4"
            variants={textVariantFromTop(0.1)}
          >
            <h1 className="text-2xl sm:text-3xl pb-2 font-bold text-gray-900">
              Work
            </h1>

            <motion.span
              className="bg-indigo-600 h-2 rounded-lg"
              variants={growUp("160px", "spring", 0.1, 1)}
            >
              &nbsp;
            </motion.span>
            <p className="mt-10 text-sm px-4 text-center text-gray-600">
              Please see sample projects. Keep in mind these are just simple
              examples.
            </p>
          </motion.div>
        </div>
        <motion.div variants={textVariantFromBottom(0.6)}>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mt-5"
          >
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Work, "work");
