import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="navbar-name"
        >
          RAJ
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/rajpandey._/" target="_blank">
            <img className="social-icons" src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rajpandey55/" target="_blank">
            <img className="social-icons" src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/raj-pandey55" target="_blank">
            <img className="social-icons" src="/github.png" alt="" />
          </a>
          <a href="https://x.com/rajpandeyyyy" target="_blank">
            <img className="social-icons" src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
