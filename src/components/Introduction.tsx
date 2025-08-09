"use client";

import React from "react";
import { Kanit } from "next/font/google";
import useSWR from "swr";

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
  const [isShowTranslate, setIsShowTranslate] = React.useState<boolean>(false);
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
    <section className="py-18 px-4 bg-blue-50">
      <h2
        className={`${kanit.className} direction-ltr flex justify-center 
        items-center text-4xl sm:text-6xl lg:text-[55px] text-stone-900 mb-3`}
      >
        Introduction
      </h2>
      <p
        className="flex justify-center items-center max-w-2xl mx-auto text-stone-500 
        text-xs mb-5"
      >
        توجه: با کلیک روی هر جمله میتوانید ترجمه آنرا ببینید!
      </p>
      <div className="grid">
        {paragraphs?.map((paragraph, parIndex) => (
          <div key={parIndex} className="mb-4">
            {paragraph?.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className="text-black text-md"
                onClick={() =>
                  setIsShowTranslate((isShowTranslate) => !isShowTranslate)
                }
              >
                {isShowTranslate ? item.translate : item.sentence}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Introduction;
