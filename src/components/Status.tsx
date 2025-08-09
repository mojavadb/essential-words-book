import React from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

function Status() {
  return (
    <header
      className="py-18 max-w-3xl mx-auto text-center w-11/12 flex flex-col 
      justify-center items-center gap-4"
    >
      <h1
        className={`${kanit.className} direction-ltr flex justify-center 
        items-center text-4xl sm:text-6xl lg:text-[55px] text-stone-900`}
      >
        <span>Your status:</span>
      </h1>

      <h3 className="flex justify-center items-center text-xl md:text-2xl text-stone-900">
        <span>تا کجا پیش رفته اید؟</span>
      </h3>
    </header>
  );
}

export default Status;
