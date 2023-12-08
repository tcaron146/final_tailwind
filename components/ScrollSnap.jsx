import React from "react";

const ScrollSnap = () => {
  return (
    <div className="px-11 py-11">
      <div className="not-prose relative bg-gradient-to-r from-pinkish to-tertiary rounded-xl">
        <div
          className="absolute inset-0 bg-grid-slate-100 "
          style={{ backgroundPosition: "10px 10px" }}
        />
        <div className="relative rounded-xl">
          <div className="relative">
            <div className="flex ml-[50%] items-end justify-start pt-10 mb-6"></div>
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-scroll pb-14">
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-4 sm:w-48" />
              </div>
              <div className="snap-center shrink-0">
                <img
                  src="/pic1.jpg"
                  className="shrink-0 w-80 h-40 rounded-lg drop-shadow-xl"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  className="shrink-0 w-80 h-40 rounded-lg drop-shadow-xl"
                  src="/pic2.jpg"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  className="shrink-0 w-80 h-40 rounded-lg drop-shadow-xl"
                  src="/pic3.jpg"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  className="shrink-0 w-80 h-40 rounded-lg drop-shadow-xl"
                  src="/pic4.jpg"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  className="shrink-0 w-80 h-40 rounded-lg drop-shadow-xl"
                  src="/pic5.jpg"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  className="shrink-0 w-80 h-40 rounded-lg drop-shadow-xl blur-sm hover:blur-none"
                  src="/pic6.jpg"
                />
              </div>
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-4 sm:w-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSnap;
