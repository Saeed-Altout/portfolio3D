import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { flex, text } from "../styles";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="max-w-sm p-10 bg-black-200 rounded-3xl"
  >
    <p className="text-6xl font-black text-white ">،،</p>

    <div className="mt-1">
      <p className={`${text.text} text-white text-lg`}>{testimonial}</p>

      <div className={`${flex.centerBetween} gap-4 mt-10`}>
        <div className="flex flex-col flex-1">
          <p className="text-base font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-base text-secondary">
            {designation} of {company}
          </p>
        </div>

        {/* <img
          src={image}
          alt={`feedback_by-${name}`}
          className="object-cover w-10 h-10 rounded-full"
        /> */}
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;
