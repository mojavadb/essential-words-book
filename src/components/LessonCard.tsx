"use client";
import Link from "next/link";
import { useLastLesson } from "@/Provider/LatestLesson";

function LessonCard({ number }: { number: number }) {
  const { lastLesson } = useLastLesson();
  console.log(lastLesson);
  return (
    <div
      className={`p-5 rounded-lg border border-gray-200 shadow-sm
      hover:shadow-md hover:-translate-y-1 active:shadow-md active:-translate-y-1
      transition-all duration-300 flex flex-col justify-between ${
        parseInt(lastLesson) > number ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <div>
        <p className="mb-1 text-base font-semibold">درس {number}</p>
        <p className="mb-3 text-sm">
          <span className="text-neutral-700 font-medium">وضعیت:</span>
          <span className="text-red-500 mr-1">شروع نشده</span>
        </p>
      </div>
      <Link
        href={`/${number}`}
        className="inline-block text-center bg-sky-600 text-white text-sm px-4 py-2 rounded-lg
        hover:bg-sky-700 transition-colors duration-300"
      >
        ادامه
      </Link>
    </div>
  );
}

export default LessonCard;
