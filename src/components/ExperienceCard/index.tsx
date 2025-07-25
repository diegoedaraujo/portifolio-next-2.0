/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";

function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden
    mt-24"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
        src="https://i.imgur.com/kzzCsxC.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Senior Systems Analyst of Levva</h4>
        <p className="font-bold text-2xl mt-1">Levva</p>
        <DiJsBadge size="40px" color={"#FFD600"} />
        <div className="flex space-x-2 my-2">{/* Tech used */}</div>
        <p className="uppercase py-5 text-gray-300">
          Started work... -Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>sumary points</li>
          <li>sumary points</li>
          <li>sumary points</li>
          <li>sumary points</li>
          <li>sumary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
