import React from "react";
import { motion } from "framer-motion";
import { flex, text } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { ProjectCard, SectionTitle } from "../components/index";

const Works = () => {
  return (
    <>
      <SectionTitle headText="Projects." subText="My work" />
      <div className="w-full ">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className={text.text}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className={`${flex.centerCenter} flex-wrap py-20 gap-5 w-full`}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
