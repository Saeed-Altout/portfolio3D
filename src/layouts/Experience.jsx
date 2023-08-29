import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { ExperienceCard, SectionTitle } from "../components/index";

const Experience = () => {
  return (
    <>
      <SectionTitle
        headText="Work Experience."
        subText="What I have done so far?"
      />

      <div className="flex flex-col py-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
