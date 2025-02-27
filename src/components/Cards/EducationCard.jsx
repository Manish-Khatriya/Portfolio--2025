import React from 'react';
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #fff",
          }}
          src={education.image}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "15px",
        background: "#2d4059",
        color: "#fff",
        boxShadow: "0px 4px 24px rgba(23, 92, 230, 0.15)",
        borderRadius: "8px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #2d4059",
      }}
      date={
        <span style={{ color: "#f5a623", fontWeight: "bold" }}>
          {education.date}
        </span>
      }
    >
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex gap-4 items-center">
          {/* <img
            src={education.image}
            alt={education.school}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #fff",
            }}
          /> */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {education.school}
            </h3>
            <p style={{ color: "#a0aec0", fontSize: "1rem" }}>
              {education.degree}
            </p>
          </div>
        </div>

        {/* Grade Section */}
        <div>
          <p style={{ color: "#f5a623", fontSize: "1rem" }}>
            <b>Grade:</b> {education.grade}
          </p>
        </div>

        {/* Description Section */}
        <div>
          <p style={{ color: "#e2e8f0", fontSize: "1rem", lineHeight: "1.5" }}>
            {education.desc}
          </p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
