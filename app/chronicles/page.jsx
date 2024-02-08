"use client";
import React from "react";
import Content from "../components/Content";
import tetons from "../../public/tetons.jpg"
import Image from "next/image";
import horse from "../../public/horse.jpg"



const Page = () => {
  return (
    <div className="relative pt-16">
      <h1 className="absolute top-[3vh] left-[10%] font-serif text-sm sm:absolute sm:top-[5vh] sm:left-[15%] sm:text-xl">These are real life</h1>
      <h1 className="absolute top-[5vh] left-[10%] font-serif text-sm sm:absolute sm:top-[8vh] sm:left-[15%] sm:text-xl">events</h1>
      <h1 className="absolute top-[7vh] left-[10%] font-serif text-sm sm:absolute sm:top-[11vh] sm:left-[15%] sm:text-xl">that actually took place in real life</h1>
      {/* First roadtrip */}
      <div className="absolute top-[15vh] right-[8vw] sm:absolute sm:top-[20vh] sm:right-[20vw]">
        <h1 className="font-serif text-md sm:text-4xl">First Roadtrip</h1>
        <Image src={tetons} alt="tetons photo" className="relative w-52 my-4 sm:w-80" />
        <p className="relative">
          <a href="../first">click here to learn about the trip</a>
        </p>
      </div>
      <div className="absolute top-[50vh] left-[8vw] sm:absolute sm:top-[65vh] sm:left-[20vw]">
        <h1 className="font-serif text-md sm:text-4xl">Da Nasty South</h1>
        <Image src={horse} alt="south roadtrip preview" className="relative w-52 my-4 sm:w-80" />
        <p className="relative">
          <a href="">click here to learn about the trip</a>
        </p>
      </div>
    </div>
  )
}

export default Page