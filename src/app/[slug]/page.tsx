"use client";
import { Languages, MoveLeft, MoveRight, Volume2 } from "lucide-react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { Kanit, Pacifico } from "next/font/google";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
const BASE_URL = "http://localhost:3000";

type Word = {
  id: number;
  pronunciation: string;
  imageUrl: string;
  wordPr: string;
  definitionPr: string;
  word: string;
  definition: string;
  synonymsPr: string[];
  synonyms: string[];
  examplesPr: string[];
  examples: string[];
};
type Data = { words: Word[] };
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Lesson() {
  const [indexOfWords, setIndexOfWords] = React.useState<number>(0);
  const { slug } = useParams();
  const { data, error, isLoading } = useSWR<Data>(
    `${BASE_URL}/api/lsn${slug}`,
    fetcher
  );

  if (error)
    return <div className="text-center text-red-500 py-8">خطا در بارگذاری</div>;
  if (isLoading)
    return <div className="flex justify-center py-12">در حال بارگذاری...</div>;

  return (
    <main className="bg-gray-50 min-h-screen">
      <AnimatePresence mode="wait">
        {data?.words.map(
          (word, index) =>
            index === indexOfWords && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3 }}
                className="p-4 grid gap-6 md:grid-cols-2 md:gap-16 md:p-12"
              >
                <div className="p-5 bg-white rounded-xl shadow-md border border-gray-100">
                  <div
                    className={`w-60 h-56 mx-auto border border-gray-300 rounded-lg mb-8 bg-gray-900 text-white text-4xl font-bold ${pacifico.className} flex items-center justify-center shadow-inner`}
                  >
                    <div className="mb-3 px-2">{word.word}</div>
                  </div>
                  <div className="direction-ltr relative mb-4">
                    <p
                      className={`${kanit.className} text-sm text-gray-500 mb-1`}
                    >
                      English
                    </p>
                    <p className={`text-2xl font-bold mb-1 ${kanit.className}`}>
                      {word.word}
                    </p>
                    <p className={`text-sm text-gray-500 ${kanit.className}`}>
                      {word.pronunciation}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute top-0 right-12 cursor-pointer"
                    >
                      <Volume2 size={20} />
                    </motion.div>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={`https://translate.google.com/?hl=fa&sl=en&tl=fa&text=${word.word}&op=translate`}
                      target="_blank"
                      className="absolute top-0 right-2 flex items-center gap-1"
                    >
                      <Languages size={20} />
                    </motion.a>
                  </div>
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 mb-1">فارسی</p>
                    <p className="text-xl font-bold">{word.wordPr}</p>
                  </div>
                  <div className={`direction-ltr ${kanit.className} mb-4`}>
                    <p className="text-base">{word.definition}</p>
                  </div>
                  <p className="text-base">{word.definitionPr}</p>
                </div>

                <div>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="p-5 bg-blue-100 rounded-lg shadow-sm mb-4"
                    >
                      <p className={`${kanit.className} direction-ltr mb-2`}>
                        {i + 1}- {word.examples[i]}
                      </p>
                      <p>{word.examplesPr[i]}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between gap-12 px-8 mb-6 md:px-12 md:mb-9 md:gap-0 md:justify-around">
        <button
          type="button"
          className="flex items-center cursor-pointer gap-2 bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 disabled:opacity-50"
          onClick={() =>
            indexOfWords > 0 && setIndexOfWords((prev) => prev - 1)
          }
          disabled={indexOfWords === 0}
        >
          <span>قبلی</span>
          <MoveRight size={18} />
        </button>

        <div className="font-bold text-lg">{indexOfWords + 1}</div>

        {indexOfWords === 11 ? (
          <Link
            href="/"
            className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
          >
            <span>آزمون</span>
            <MoveLeft size={18} />
          </Link>
        ) : (
          <button
            type="button"
            className="flex items-center cursor-pointer gap-2 bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
            onClick={() =>
              indexOfWords < 11 && setIndexOfWords((prev) => prev + 1)
            }
          >
            <span>بعدی</span>
            <MoveLeft size={18} />
          </button>
        )}
      </div>
    </main>
  );
}
