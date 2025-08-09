import React from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
const texts = [
  "اول",
  "دوم",
  "سوم",
  "چهارم",
  "پنجم",
  "ششم",
  "هفتم",
  "هشتم",
  "نهم",
  "دهم",
  "یازدهم",
  "دوازدهم",
];

function Status() {
  return (
    <section
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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full">
        {texts.map((numb: string, index: number) => (
          <div key={index} className="p-4 rounded-lg border">
            درس {numb}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Status;
