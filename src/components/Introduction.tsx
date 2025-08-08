import React from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

function Introduction() {
  return (
    <section
      className="my-36 max-w-3xl mx-auto text-center w-11/12 flex flex-col 
    justify-center items-center gap-4"
    >
      <h2
        className={`${kanit.className} direction-ltr flex justify-center 
        items-center text-4xl sm:text-6xl lg:text-[55px] text-stone-900`}
      >
        Introduction
      </h2>
      <p
        className="
      max-w-2xl mx-auto text-stone-400 text-xs"
      >
        توجه: با کلیک روی هر جمله میتوانید ترجمه آنرا ببینید!
      </p>
    </section>
  );
}

export default Introduction;
