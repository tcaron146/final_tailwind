"use client";
import React from "react";
import Image from "next/image";
import fisherman from "../../public/fisherman.jpg";
import sea from "../../public/sea-7484743_1920.jpg";
import stew from "../../public/pho.jpg";
import { useRef, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { InstagramEmbed } from "react-social-media-embed";

const Hero = () => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const SimpleForm = () => <MailchimpSubscribe url={url} />;

  return (
    <div className="w-full h-full pb-4">
      <div className="m-auto">
        <div className="flex flex-col items-center p-4 justify-around">
          <h1 className="text-primary">Welcome</h1>
        </div>
        {/* Cards */}
        <div className="flex flex-col items-center justify-around px-6 pb-4 w-full h-full sm:flex sm:flex-row">
          {/* Card 1*/}
          <div className="flex flex-col my-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:max-w-xl sm:flex-row">
            <Image
              className="h-96 w-full rounded-t-lg object-cover sm:h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg"
              src={fisherman}
              alt="fisherman"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                <a href="../chronicles">Chronicles</a>
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Here you will find some very nice photos and short blurbs
                regarding past experinces on the water, in the mountains, and
                many other interesting locations. Enjoy.
              </p>
            </div>
          </div>
          {/* Card 2*/}
          <div className="flex flex-col my-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:max-w-xl sm:flex-row">
            <Image
              className="h-96 w-full rounded-t-lg object-cover sm:h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg"
              src={stew}
              alt="stew"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                <a href="../grits">Eggs & Bacon</a>
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                The most essential thing in life is excellent food and beverage,
                here are some of my favorite dishes, sandwwiches, and quaffable
                drinks in recent history.
              </p>
            </div>
          </div>
        </div>
        {/* Newsletter div */}
        <div className="flex items-center justify-around w-full">
          <div className="p-3 border border-primary/0 rounded-md flex flex-col">
            <h1 className="text-2xl font-bold text-center text-primary">
              Subscribe to the Newsletter
            </h1>
            <MailchimpSubscribe
              className="flex flex-col"
              url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
              render={({ subscribe, status, message }) => (
                <div>
                  <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
                  {status === "sending" && (
                    <div className="text-primary">sending...</div>
                  )}
                  {status === "error" && (
                    <div
                      style={{ color: "red" }}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  )}
                  {status === "success" && (
                    <div style={{ color: "green" }}>Subscribed !</div>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
