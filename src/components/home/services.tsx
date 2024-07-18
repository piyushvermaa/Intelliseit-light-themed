"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";


export const services = [
  {
    title: "WEBSITE DESIGNING",
    description:
      "WEBSITE is the face that represents us in the Digital World. We use a very unique design methodology for every website…",
    link: "",
  },
  {
    title: "ANDROID APPLICATION",
    description:
      "ANDROID Android app is the most common and widely used solution. There are more than 250 Crores users of Android…",
    link: "",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "SOFTWARE Our Softwares offer services to small sized as well as mid-sized businesses around the globe. Our offering services include:…",
    link: "",
  },
  {
    title: "INDUSTRIAL INTERNSHIP",
    description:
      "We at INTELLISE IT not only teach university syllabus to our students, but also give them live training of development…",
    link: "",
  },
  {
    title: "STUDENT TRAINING",
    description:
      "We provide training to brighten up the futures of students. Our 15+ years of teaching as well as development experience…",
    link: "",
  },
  {
    title: "CORPORATE TRAINING",
    description:
      "Corporate training is a means of ensuring that employees improve skills and enhance performance by focusing on professional development. Many…",
    link: "",
  },
];

const Features = () => {
  return (
    <div className="h-fit bg-white">
        <div className="text-center">
          <h1 className="text-black font-bold sm:text-6xl pt-10 text-3xl opacity-100">Our Services</h1>
        </div>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
    </div>
  );
};

export default Features;