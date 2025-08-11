"use client";

import { Flame, HandFist, MoveLeft, Rocket } from "lucide-react";
import React from "react";
import { Kanit } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

function Header() {
  return (
    <header className="py-12 max-w-3xl mx-auto text-center w-11/12 flex flex-col justify-center items-center gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/essential-word-pic.jpg"
          alt="504 essential words"
          width={160}
          height={160}
          className="rounded-xl shadow-2xl"
        />
      </motion.div>

      <motion.h1
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`${kanit.className} direction-ltr flex justify-center items-center text-4xl sm:text-6xl lg:text-[55px] text-stone-900 font-bold`}
      >
        504 absolutely essential words
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl md:text-2xl text-stone-900"
      >
        ۵۰۴ واژه ضروری انگلیسی
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-2xl mx-auto my-4 text-justify text-stone-700 leading-7 text-sm flex flex-wrap gap-1 items-center"
      >
        <span>سلام و درود!</span>
        <motion.span whileHover={{ rotate: -15 }}>
          <HandFist className="ml-1" color="#b27272" size={18} />
        </motion.span>
        <span>به وب‌سایت آموزش ۵۰۴ کلمه ضروری انگلیسی خوش آمدید!</span>
        <motion.span whileHover={{ rotate: 15 }}>
          <Flame className="ml-1" color="#826282" size={18} />
        </motion.span>
        <span>
          این‌جا قراره قدم‌به‌قدم و به‌صورت تمرین‌محور، این کتاب معروف را با هم
          یاد بگیریم. این کتاب اثر آقای مورای برومبرگ و جولیوس لیب هست و برای
          کسانی طراحی شده که می‌خواهند دایره لغات انگلیسی خود را تقویت کنند. اگر
          هدف شما یادگیری مؤثر لغات، موفقیت در آزمون‌های زبان مثل تافل یا آیلتس
          یا تقویت مکالمه انگلیسی است، اینجا بهترین نقطه برای شروع است!
        </span>
        <span>دیگه معطل چی هستی؟ همین حالا درس اول رو شروع کن:</span>
        <motion.span
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <Rocket className="ml-1" color="#444" size={18} />
        </motion.span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <a
          href="#Introduction"
          className="px-6 py-3 rounded-full flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-bold shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
        >
          <span>مقدمه کتاب</span>
          <MoveLeft size={20} />
        </a>
        <a
          href="#status"
          className="px-6 py-3 rounded-full flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-cyan-900 hover:from-cyan-800 hover:to-cyan-950 text-white font-bold shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
        >
          <span>وضعیت شما</span>
          <MoveLeft size={20} />
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
