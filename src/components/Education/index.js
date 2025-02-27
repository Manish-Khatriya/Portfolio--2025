import React from "react";
import { education } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from "../Cards/EducationCard";

const About = () => {
  return (
    <section
      id="qualification"
      className="w-full min-h-screen text-grey bg-black flex flex-col items-center justify-center relative"
    >
      <div className="custom-shape-divider-top-1639336966">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* SVG Content Here */}
        </svg>
      </div>
      <div className="flex flex-col items-center pb-8">
        <h2
          className="text-center text-white font-bold lg:mt-16 mt-10 mb-10"
          style={{ textAlign: "center", color: "white", fontSize: "40px" }}
        >
          Qualifications
        </h2>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
