import "./skills.scss";
import {
  RiReactjsLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiGithubLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaSass, FaPython, FaJava, FaWindows } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="skills">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        SKILLS
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="skills-container"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <RiHtml5Line className="icon" style={{ color: "rgb(234 88 12)" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <RiCss3Line className="icon" style={{ color: "#264de4" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <RiJavascriptLine className="icon" style={{ color: "#f0db4f" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <FaSass className="icon" style={{ color: "#cc6699" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <RiTailwindCssFill
            className="icon"
            style={{ color: "rgb(56, 189, 248)" }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="skills-container"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <RiReactjsLine
            className="icon"
            style={{ color: "rgb(34 211 238)" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <TbBrandNextjs className="icon" style={{ color: "#fff" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <SiMongodb className="icon" style={{ color: "#22c55e" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <FaNodeJs className="icon" style={{ color: "#22c55e" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <DiMysql className="icon" style={{ color: "#0369a1" }} />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="skills-container"
      >
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <FaPython className="icon" style={{ color: "#4584b6" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <FaJava className="icon" style={{ color: "#5382a1" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <RiGithubLine className="icon" style={{ color: "#fff" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <VscVscode className="icon" style={{ color: "#0078d7" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="icons"
        >
          <FaWindows className="icon" style={{ color: "#00A3EE" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
