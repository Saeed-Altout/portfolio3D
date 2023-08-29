import React from "react";
import { motion } from "framer-motion";
import { flex, text } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { SectionTitle, ServiceCard } from "../components/index";

const About = () => {
  return (
    <>
      <SectionTitle headText="Overview." subText="Introduction" />
      <motion.p variants={fadeIn("", "", 0.1, 1)} className={text.text}>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className={`${flex.centerCenter} gap-10 mt-20 flex-wrap`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
