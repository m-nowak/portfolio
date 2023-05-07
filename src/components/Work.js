import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { growUp, textVariantFromTop } from "../utils/motion";

const Work = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-2 sm:py-4 flex flex-col w-[100%]">
          <motion.div
            className="flex flex-col h-full w-full justify-center items-center mt-4"
            variants={textVariantFromTop(0.1)}
          >
            <h1 className="text-2xl sm:text-3xl pb-2 font-bold text-gray-900">
              Work
            </h1>{" "}
            <motion.span
              className="bg-indigo-600 h-2 rounded-lg"
              variants={growUp("160px", "spring", 0.1, 1)}
            >
              &nbsp;
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Work, "work");
