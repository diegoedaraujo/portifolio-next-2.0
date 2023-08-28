"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
