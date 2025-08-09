"use client";

import React from "react";
import { Kanit } from "next/font/google";
import useSWR from "swr";
import { Trash } from "lucide-react";

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

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const paragraphs = [
    data?.paragraph_one,
    data?.paragraph_two,
    data?.paragraph_three,
    data?.paragraph_four,
  ];

  return (
    <section
      id="Introduction"
      className="py-18 px-6 md:px-12 bg-blue-50 scroll-mt-5"
    >
      <h2
        className={`${kanit.className} direction-ltr flex justify-center 
        items-center text-4xl sm:text-6xl lg:text-[55px] text-stone-900 mb-3`}
      >
        Introduction
      </h2>
      <p
        className="flex justify-center items-center max-w-2xl mx-auto text-stone-500 
        text-xs mb-8 md:mb-12"
      >
        توجه: با کلیک روی هر جمله میتوانید ترجمه آنرا ببینید!
      </p>
      <div className="grid gap-6 md:gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div
            className="max-w-sm rounded-xl overflow-hidden shadow-md
          border border-gray-100 transition-all duration-300"
          >
            <div className="">
              <div
                className="flex items-center justify-between border-b border-gray-300
              py-2 px-4"
              >
                <h3 className="text-sm font-bold text-gray-800">ترجمه:</h3>
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => setIsShowTranslate("")}
                >
                  <Trash size={18} color="#464" />
                </button>
              </div>
              <p
                className="text-gray-800 text-justify
               leading-5 md:leading-6 py-3 px-4 min-h-25 md:min-h-40 text-xs"
              >
                {isShowTranslate}
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="grid md:grid-cols-2 gap-4 direction-ltr">
            {paragraphs?.map((paragraph, parIndex) => (
              <div
                key={parIndex}
                className={`p-6 rounded-lg border-1 border-gray-300 direction-ltr
                text-justify
                 ${kanit.className}`}
              >
                <span>{`${parIndex + 1}- `}</span>
                {paragraph?.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-black text-md active:bg-black active:text-white cursor-pointer"
                    onClick={() => setIsShowTranslate(item.translate)}
                  >
                    {item.sentence}
                  </span>
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
