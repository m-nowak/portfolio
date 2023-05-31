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
  const skills = [
    {
      type: "Frontend",
      image: "/assets/frontend.svg",
      color: "bg-indigo-500",
      skills:
        "HTML, CSS, JavaScript, TypeScript, React, Next.js, TailwindCSS, ReactQuery, Zustand, Valtio",
    },
    {
      type: "Backend",
      image: "assets/backend.svg",
      color: "bg-gray-700",
      skills:
        " Python, DjangoRestFramework, Node.js, Express.js, Prisma, MongoDB, MySql, PostgreSQL",
    },
    {
      type: "AI / Machine Learning",
      image: "assets/ai.svg",
      color: "bg-gray-400",
      skills:
        "Python, NumPy, Pandas, Seaborn, SciKitLearn, Tensorflow, Keras, PyTorch",
    },
    {
      type: "Personal",
      image: "assets/personal.svg",
      color: "bg-gray-100",
      skills:
        "Trustworthy, Flexibility, Creativity, Hard-working, Problem-solving, Open-minded",
    },
  ];

  return (
    <div className=" min-h-[100vh] w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto flex items-start justify-between flex-col lg:flex-row">
        <div className="px-4 py-4 sm:py-8 h-[320px] flex flex-col w-[100%] lg:w-[50%]">
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
            <br />
            <a href="#contact" className="text-indigo-700 hover:underline">
              Let&apos;s work together
            </a>{" "}
            to bring ideas to life!
          </motion.div>
        </div>
        <div className="h-[320px] w-[100%] lg:w-[50%] flex justify-center items-end">
          <div className="rotate-12 w-[80%] h-[80%] flex justify-center items-center">
            <FibonacciImage />
          </div>
        </div>
      </div>
      <motion.div
        className="mt-6 sm:mt-8 flex flex-col"
        variants={textVariantFromBottom(0.6)}
      >
        {" "}
        <h2 className="mt-6 sm:mt-12 text-lg sm:text-xl font-medium text-gray-900 text-center">
          SKILLS
        </h2>
        <div className="max-w-7xl px-4 py-4 mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
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
