import { motion } from "framer-motion";
import { svgGrowUp } from "../utils/motion";

const FibonacciImage = () => {
  return (
    <svg
      width="80%"
      height="80%"
      viewBox="0 0 1324 813"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className="rotate-12 shadow-xl"
    >
      <rect
        x="12.5"
        y="6.5"
        width="799"
        height="799"
        stroke="#EEEEEE"
        strokeWidth="36"
      />
      <rect x="811.5" y="506.5" width="499" height="299" stroke="#EEEEEE" />
      <rect
        x="1011.5"
        y="506.5"
        width="299"
        height="299"
        stroke="#EEEEEE"
        strokeWidth="18"
      />
      <rect x="811.5" y="606.5" width="200" height="199" stroke="#EEEEEE" />
      <rect x="811.5" y="6.5" width="499" height="799" stroke="#EEEEEE" />
      <rect
        x="811.5"
        y="506.5"
        width="100"
        height="100"
        stroke="#DDDDDD"
        strokeWidth="12"
      />
      <motion.path
        d="M13.1282 805.607C7.91189 559.76 156.042 62.7512 806 13.4944L816.447 13.4944C969.46 5.63429 1312 81.0216 1312 504.302C1312 614.344 1222.54 810.087 1015.97 799.607C949.463 794.367 816.447 753.207 816.447 606.484C815.142 572.424 832.878 504.302 914.253 504.302C945.551 502.992 997.74 521.595 1004 606.484"
        stroke="#4F46E5"
        strokeWidth="22"
        strokeLinecap="round"
        variants={svgGrowUp("spring", 0.2, 3)}
      />
    </svg>
  );
};

export default FibonacciImage;
