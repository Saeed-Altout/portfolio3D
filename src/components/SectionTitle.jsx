import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { text } from "../styles";

const SectionTitle = ({ subText, headText }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={text.sectionSub}>{subText}</p>
      <h2 className={text.sectionHead}>{headText}</h2>
    </motion.div>
  );
};

export default SectionTitle;
