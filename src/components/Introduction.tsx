"use client";

import React from "react";
import { Kanit } from "next/font/google";
import useSWR from "swr";
import { Trash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "http://localhost:3000";

type Item = {
  id: number;
  sentence: string;
  translate: string;
};

type Data = {
  paragraph_one: Item[];
  paragraph_two: Item[];
  paragraph_three: Item[];
  paragraph_four: Item[];
};

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Introduction() {
  const [isShowTranslate, setIsShowTranslate] = React.useState<string>(
    "این کتاب، کتابی خودیار است."
  );

  const { data, error, isLoading } = useSWR<Data>(
    `${BASE_URL}/api/intro`,
    fetcher
  );

  if (error)
    return (
      <div className="text-center text-red-500 py-8">
        خطا در بارگذاری داده‌ها!
      </div>
    );

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-12">
        <motion.div
          className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </div>
    );

  const paragraphs = [
    data?.paragraph_one,
    data?.paragraph_two,
    data?.paragraph_three,
    data?.paragraph_four,
  ];

  return (
    <section
      id="Introduction"
      className="py-18 px-6 md:px-12 bg-blue-100 scroll-mt-5"
    >
      {/* عنوان */}
      <h2
        className={`${kanit.className} direction-ltr text-center text-4xl sm:text-6xl lg:text-[55px] text-stone-900 mb-3`}
      >
        Introduction
      </h2>
      <p className="text-center max-w-2xl mx-auto text-stone-500 text-xs mb-8 md:mb-12">
        توجه: با کلیک روی هر جمله می‌توانید ترجمه آن را ببینید!
      </p>

      <div className="grid gap-6 md:gap-12 lg:grid-cols-4">
        {/* کارت ترجمه */}
        <div className="lg:col-span-1">
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-300">
            <div className="flex items-center justify-between border-b border-gray-300 py-2 px-4 bg-gray-50">
              <h3 className="text-sm font-bold text-gray-800">ترجمه:</h3>
              <button
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                onClick={() => setIsShowTranslate("")}
              >
                <Trash size={18} color="#464" />
              </button>
            </div>
            <div className="py-3 px-4 min-h-25 md:min-h-40 text-xs text-gray-800">
              <AnimatePresence mode="wait">
                {isShowTranslate && (
                  <motion.p
                    key={isShowTranslate}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="leading-5 md:leading-6 text-justify"
                  >
                    {isShowTranslate}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* جملات */}
        <div className="lg:col-span-3">
          <div className="grid lg:grid-cols-2 gap-4 direction-ltr">
            {paragraphs?.map((paragraph, parIndex) => (
              <div
                key={parIndex}
                className={`p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow duration-200 direction-ltr text-justify ${kanit.className}`}
              >
                <span className="font-bold text-gray-500">{`${
                  parIndex + 1
                }- `}</span>
                {paragraph?.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-black text-md cursor-pointer hover:bg-blue-100 px-1 rounded transition-colors"
                    onClick={() => setIsShowTranslate(item.translate)}
                  >
                    {item.sentence}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
