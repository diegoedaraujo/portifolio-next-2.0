/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroungCircles from "../BackgroungCircles";
import Link from "next/link";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's Diego Araújo",
      "Guy-who-loves-Coffe.tsx",
      "<ButLovesCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroungCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://i.imgur.com/l6RJwq1.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href='#about'>
          <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
          <button className="heroButton">Experience</button>
          </Link>
          <Link href='#skills'>
          <button className="heroButton">Skills</button>
          </Link>
          <Link href='#projects'>
          <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
