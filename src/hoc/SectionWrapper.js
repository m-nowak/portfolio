import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <span id={id} className="hash-span">
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
