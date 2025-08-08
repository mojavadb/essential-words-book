import { Download, MoveLeft } from "lucide-react";
import React from "react";
import { Kanit } from "next/font/google";
import Image from "next/image";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

function Intro() {
  return (
    <div
      className="my-36 max-w-3xl mx-auto text-center w-11/12 flex flex-col 
      justify-center items-center gap-4"
    >
      <div className="">
        <Image src="./essential-word-pic.jpg" alt="504 essential words" />
      </div>
      <h1
        className={`${kanit.className} direction-ltr flex justify-center 
        items-center text-4xl sm:text-6xl lg:text-[55px] text-stone-900`}
      >
        <span>504 absolutely essential words</span>
      </h1>

      <h3 className="flex justify-center items-center text-xl md:text-2xl text-stone-900">
        <span>۵۰۴ واژه ضروری انگلیسی</span>
      </h3>

      <p className="max-w-2xl mx-auto my-4 text-justify text-stone-700">
        من به طراحی و توسعه برنامه‌های وب تعاملی و کاربرپسند علاقه‌مندم. به
        فناوری‌های پایه فرانت‌اند مسلط هستم و تجربه کار با تکنولوژی‌های مدرن
        برنامه‌نویسی سمت کاربر را دارم. همچنین، علاقه‌مندم در پروژه‌های بزرگ و
        هیجان‌انگیز مشارکت داشته باشم.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
        <a
          href="#contact"
          className={`px-6 py-2 border border-white rounded-full 
        flex items-center gap-2`}
        >
          <span>ارتباط با من</span>
          <MoveLeft size={20} />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className={`px-6 py-2 border border-gray-500 rounded-full flex items-center gap-2`}
        >
          <span>رزومه من</span>
          <Download size={20} />
        </a>
      </div>
    </div>
  );
}

export default Intro;
