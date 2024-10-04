
import Darkmode from "./darkmode";

import { motion } from "framer-motion";
export default function Catego() {
  return (
    <div className="w-[20%] dark:bg-black dark:text-gray-400 bg-white p-4 flex flex-col justify-between h-[100vh] ">
      <div className="flex flex-col justify-start ls-start gap-2 ">
        <h1 className="font-bold text-3xl tracking-tight mb-10">Todo List</h1>
        <FlipedLinks href="youtube.com">Home</FlipedLinks>
        <FlipedLinks href="youtube.com">Active</FlipedLinks>
        <FlipedLinks href="youtube.com">completed</FlipedLinks>
      </div>
      <Darkmode/>
    </div>
  );
}
const FlipedLinks = ({ children, href }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="border border-[rgba(0,0,0,.4)] flex pl-2 p-2 rounded-md hover:bg-black hover:text-white dark:bg-gray-200  w-full "
    >
      <motion.a className="relative block overflow-hidden" href={href}>
        <motion.div>
          {children &&
            children.split("").map((l, i) => (
              <motion.span
                className="inline-block dark:text-black "
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.025 * i,
                }}
                key={i}
              >
                {l}
              </motion.span>
            ))}
        </motion.div>
        <motion.div className="absolute inset-0">
          {children &&
            children.split("").map((l, i) => (
              <motion.span
                className="inline-block dark:text-black "
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.025 * i,
                }}
                key={i}
              >
                {l}
              </motion.span>
            ))}
        </motion.div>
      </motion.a>
    </motion.div>
  );
};
