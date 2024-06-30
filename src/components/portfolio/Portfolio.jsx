import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Behance Clone",
    img: "./behance.jpeg",
    desc: "A clone of the Behance website's landing page. This project showcases the implementation of a dynamic landing page with search auto-suggestions and a sorting feature. It aims to replicate the design and functionality of Behance, providing a seamless user experience.",
    url: "https://behance-clone-raj.netlify.app/",
    github: "https://github.com/raj-pandey55/behance_clone"
  },
  {
    id: 2,
    title: "Live Polls",
    img: "./live-polls.png",
    desc: "A dynamic platform where users can create interactive polls and share them with others. This project was a fantastic opportunity to work with various web technologies and build something that enables real-time interaction and data visualization.",
    url: "https://live-polls-mp0z.onrender.com/",
    github: "https://github.com/raj-pandey55/Live-Polls"
  },
  {
    id: 3,
    title: "Mapty",
    img: "./mapty.jpeg",
    desc: "An interactive platform that allows users to track their workouts, like running and cycling, on a map. It's a simple yet powerful way to visualize fitness activities and stay motivated.",
    url: "https://mapty-raj.netlify.app/",
    github: "https://github.com/raj-pandey55/Mapty"
  },
  {
    id: 4,
    title: "Omnifood",
    img: "./omnifood.jpeg",
    desc: "Omnifood is a landing page of an AI-powered food subscription that will make you healthy again, 365 days per year. It's tailored to your personal tastes and nutritional needs.",
    url: "https://omnifood-rajp.netlify.app/",
    github: "https://github.com/raj-pandey55/Omnifood"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <a  className="demo" href={item.url} target="_blank">
                See Demo
              </a>
              <a className="github" href={item.github} target="_blank">
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
