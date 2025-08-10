"use client";
import { Languages, MoveLeft, MoveRight, Volume2 } from "lucide-react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { Kanit, Pacifico } from "next/font/google";
import React from "react";
import Link from "next/link";

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
type Data = {
  words: Word[];
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Lesson() {
  const [indexOfWords, setIndexOfWords] = React.useState<number>(0);
  const { slug } = useParams();
  const { data, error, isLoading } = useSWR<Data>(
    `${BASE_URL}/api/lsn${slug}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      {data?.words.map(
        (word, index) =>
          index === indexOfWords && (
            <div
              className="p-4 grid gap-6 md:grid-cols-2 md:gap-16 md:p-12"
              key={index}
            >
              <div className="p-3 bg-white mb-3">
                <div
                  className={`w-60 h-56 mx-auto border border-gray-300 rounded-sm mb-8
                bg-gray-900 text-white text-5xl font-bold ${pacifico.className}
                flex items-center justify-center`}
                >
                  <div className="mb-3 border-b-1 border-gray-500 px-2">
                    {word.word}
                  </div>
                </div>
                <div className="direction-ltr relative mb-2">
                  <p
                    className={`${kanit.className} text-sm text-gray-500 mb-2`}
                  >
                    English
                  </p>
                  <p className={`text-2xl font-bold mb-1 ${kanit.className}`}>
                    {word.word}
                  </p>
                  <p className={`text-sm text-gray-500 ${kanit.className}`}>
                    {word.pronunciation}
                  </p>
                  <Volume2 size={20} className="absolute top-0 right-12" />
                  <a
                    href={`https://translate.google.com/?hl=fa&sl=en&tl=fa&text=${word.word}&op=translate`}
                    target="_blank"
                    className="absolute top-0 right-2 text-sm flex items-center gap-2"
                  >
                    <Languages size={20} />
                  </a>
                </div>
                <div className="mb-8">
                  <p className="text-xs text-gray-500 mb-2">فارسی</p>
                  <p className="text-xl font-bold mb-1">{word.wordPr}</p>
                </div>
                <div className={`direction-ltr ${kanit.className} mb-6`}>
                  <p className="text-base">{word.definition}</p>
                </div>
                <p className="text-base">{word.definitionPr}</p>
              </div>
              <div>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="p-5 bg-blue-100 mb-4">
                    <p className={`${kanit.className} direction-ltr mb-4`}>
                      {i + 1}- {word.examples[i]}
                    </p>
                    <p>{word.examplesPr[i]}</p>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
      <div
        className="flex items-center justify-between gap-12 px-8 mb-6 md:px-12
      md:mb-9 md:gap-0 md:justify-around"
      >
        <button
          type="button"
          className="flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white cursor-pointer
          font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform 
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
          onClick={() =>
            indexOfWords > 0 &&
            setIndexOfWords((indexOfWords) => indexOfWords - 1)
          }
        >
          <span>قبلی</span>
          <MoveRight size={18} />
        </button>
        <div className="font-bold text-lg">{indexOfWords + 1}</div>
        {indexOfWords === 11 ? (
          <Link
            href={"/"}
            className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white cursor-pointer 
          font-bold py-2 px-4 rounded-xl text-sm transition-all duration-300 transform 
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
          >
            <span>آزمون</span>
            <MoveLeft size={18} />
          </Link>
        ) : (
          <button
            type="button"
            className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white cursor-pointer 
          font-bold py-2 px-4 rounded-xl text-sm transition-all duration-300 transform 
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
            onClick={() =>
              indexOfWords < 11 &&
              setIndexOfWords((indexOfWords) => indexOfWords + 1)
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
