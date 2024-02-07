"use client";
import React from "react";
import Content from "../components/Content";
import tetons from "../../public/tetons.jpg"
import Image from "next/image";



const Page = () => {
  return (
    <div>
      <h1 className="absolute top-[10%] left-[20%] font-serif text-sm">These are real life</h1>
      <h1 className="absolute top-[12%] left-[20%] font-serif text-sm">events</h1>
      <h1 className="absolute top-[14%] left-[20%] font-serif text-sm">that actually took place in real life</h1>
      <div className="absolute top-[20%] right-[10%]">
        <h1 className="font-serif text-md">First Roadtrip</h1>
        <Image src={tetons} className="relative w-52 my-4" />
        <p className="relative">
          <a href="">click here to learn about the trip(this link wont go anywhere its in progress)</a>
        </p>
      </div>
    </div>
  )
}

export default Page