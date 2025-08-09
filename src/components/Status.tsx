"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";

const TOTAL_LESSONS = 42;

function Status() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const numbers = Array.from({ length: TOTAL_LESSONS }, (_, i) => i + 1);

  const handleExpand = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      containerRef.current?.style.setProperty("max-height", "none");
    } else {
      containerRef.current?.style.setProperty("max-height", "385px");
    }
  }, [isExpanded]);

  return (
    <section
      id="status"
      className="py-18 mx-auto text-center w-11/12 flex flex-col justify-center items-center gap-4"
    >
      <h1 className="flex justify-center items-center text-2xl sm:text-4xl lg:text-[40px] text-stone-900">
        وضعیت شما
      </h1>

      <h3 className="flex justify-center items-center mb-8 text-md md:text-lg text-stone-900">
        تا کجا پیش رفته اید؟
      </h3>

      <div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full gap-4
        gap-8 overflow-hidden transition-all duration-300"
      >
        {numbers.map((numb) => (
          <LessonCard key={numb} number={numb} />
        ))}
      </div>

      <button
        onClick={handleExpand}
        className="mt-5 p-2 cursor-pointer flex items-center gap-2 border-2 border-gray-600
        text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300"
      >
        {isExpanded ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
      </button>
    </section>
  );
}

const LessonCard = ({ number }: { number: number }) => {
  return (
    <div
      className="p-4 rounded-md border-b-3 border-stone-200 bg-white
      cursor-pointer hover:shadow-sm hover:-translate-y-1
      active:shadow-sm active:-translate-y-1 transition-all duration-300"
    >
      <p className="mb-1 text-sm">درس {number}</p>
      <p className="mb-2 text-xs">
        <span className="text-neutral-700">وضعیت:</span>
        <span className="text-red-500 mr-1"> شروع نشده</span>
      </p>
      <Link
        href={`/lesson/${number}`}
        className="text-sky-600 text-xs hover:text-sky-600"
      >
        شروع
      </Link>
    </div>
  );
};

export default Status;
