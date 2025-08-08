import { Flame, HandFist, MoveLeft, Rocket } from "lucide-react";
import React from "react";
import { Kanit } from "next/font/google";
import Image from "next/image";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

function Header() {
  return (
    <div
      className="my-12 max-w-3xl mx-auto text-center w-11/12 flex flex-col 
      justify-center items-center gap-4"
    >
      <div className="">
        <Image
          src={"/essential-word-pic.jpg"}
          alt="504 essential words"
          width={160}
          height={160}
        />
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

      <p
        className="max-w-2xl mx-auto my-4 text-justify text-stone-700 flex items-center 
      justify-start flex-wrap leading-7 text-sm"
      >
        <span>سلام و درود!</span>
        <HandFist className="ml-1" color="#b27272" size={18} />
        <span>به وب‌سایت آموزش ۵۰۴ کلمه ضروری انگلیسی خوش آمدید!</span>
        <Flame className="ml-1" color="#826282" size={18} />
        <span>
          این‌جا قراره قدم‌به‌قدم و به‌صورت تمرین‌محور، این کتاب معروف را با هم
          یاد بگیریم. این کتاب اثر آقای مورای برومبرگ و جولیوس لیب هست و برای
          کسانی طراحی شده که می‌خواهند دایره لغات انگلیسی خود را تقویت کنند. اگر
          هدف شما یادگیری مؤثر لغات، موفقیت در آزمون‌های زبان مثل تافل یا آیلتس
          یا تقویت مکالمه انگلیسی است، اینجا بهترین نقطه برای شروع است!
        </span>
        <span>
          دیگه معطل چی هستی؟ همین حالا درس اول رو شروع کن و مسلط‌تر از قبل بشو:
        </span>
        <Rocket className="ml-1" color="#444" size={18} />
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <a
          href="#Introduction"
          className="px-6 py-2 border border-white rounded-full 
        flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 
        px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
        >
          <span>مقدمه کتاب</span>
          <MoveLeft size={20} />
        </a>
        <a
          href="#lists"
          className="flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white 
          font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform 
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
        >
          <span>فهرست</span>
          <MoveLeft size={20} />
        </a>
      </div>
    </div>
  );
}

export default Header;
