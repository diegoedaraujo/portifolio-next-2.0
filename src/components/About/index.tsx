"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://i.imgur.com/crbbhJB.jpg"
        className="-mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          👋Hello! I'm a FullStack Developer passionate about creating
          exceptional digital experiences. 💼 With a solid career in frontend
          and backend development, I'm focused on transforming creative designs
          on interactive and engaging user interfaces. My experience includes
          leading teams, collaborating with designers and developers and deliver
          innovative technology solutions.
        </p>
      </div>
    </div>
  );
}
