import React from "react";
import { flex, padding } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import SectionTitle from "../components/SectionTitle";
import FeedbackCard from "../components/FeedbackCard";

const Feedbacks = () => {
  return (
    <div className={`mt-20 bg-black-100 rounded-3xl`}>
      <div className={`bg-tertiary rounded-3xl ${padding.all} min-h-[300px]`}>
        <SectionTitle headText="Testimonials." subText="What others say" />
      </div>

      <div
        className={`-mt-20 pb-14 ${padding.x} ${flex.centerCenter} flex-wrap gap-10 w-full`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
