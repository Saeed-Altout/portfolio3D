import React from "react";
import { BallCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import SectionTitle from "../components/SectionTitle";
import { flex } from "../styles";

const Tech = () => {
  return (
    <>
      <SectionTitle headText="Skills" subText="We Good By All Of Theme" />
      <div className={`${flex.centerCenter} flex-wrap gap-10 py-20`}>
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
