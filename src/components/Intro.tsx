import { Download, MoveLeft } from "lucide-react";
import React from "react";

function Intro() {
  return (
    <div className="py-36">
      <h1 className="direction-ltr flex justify-center items-center text-3xl sm:text-5xl lg:text-[50px]">
        <span>504 absolutely essential words</span>
      </h1>

      <h3 className="flex justify-center items-center text-xl md:text-2xl mb-3">
        <span>۵۰۴ واژه ضروری انگلیسی</span>
      </h3>

      <p className="max-w-2xl mx-auto my-4">
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
