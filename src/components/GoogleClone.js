import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const GoogleClone = () => {
  return (
    <div className=" w-full bg-white pt-20 pb-20 sm:pb-44">
      <div className="max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
        <div className="px-4 py-2 sm:py-4 flex flex-col w-[100%] md:w-[80%] lg:w-[50%] mx-auto">
          <motion.div
            className="flex flex-col h-full w-full justify-center items-left"
            variants={slideIn("left", "spring", 0.2, 1)}
          >
            <h2 className=" text-lg sm:text-xl font-medium text-gray-900">
              GOOGLE CLONE
            </h2>
          </motion.div>
          <div className="flex lg:hidden px-4 py-2 sm:py-4 flex-col w-[100%]">
            <motion.img
              src="assets/google-clone.png"
              alt="google clone"
              variants={slideIn("right", "spring", 0.3, 1)}
            />
          </div>

          <motion.div
            variants={slideIn("left", "spring", 0.4, 1)}
            className=" font-normal text-gray-900 text-base sm:text-lg mt-4"
          >
            Fully responsive, simple Google Clone where user can search for text
            and images or random word.
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring", 0.6, 1)}
            className=" font-normal text-gray-500 text-xs sm:text-base pt-4"
          >
            Next.js, TypeScript, Tailwind&nbsp;CSS, React&nbsp;Query.
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring", 0.8, 1)}
            className=" flex items-start space-x-6 font-semibold text-indigo-700 text-base sm:text-lg pt-4"
          >
            <a
              href="https://google-clone-taupe-kappa.vercel.app"
              className="underline hover:no-underline"
              target="blank"
            >
              Live Demo
            </a>{" "}
            <a
              href="https://github.com/m-nowak/google-clone"
              className="underline hover:no-underline"
              target="blank"
            >
              Code
            </a>
          </motion.div>
        </div>{" "}
        <div className="hidden lg:flex px-4 py-2 sm:py-4 flex-col w-[50%]">
          <motion.img
            src="assets/google-clone.png"
            alt="google clone"
            variants={slideIn("right", "spring", 0.4, 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(GoogleClone, "google-clone");
