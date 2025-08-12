import LessonCard from "@/components/LessonCard";
import React from "react";

const numbers = Array.from({ length: 42 }, (_, i) => i + 1);

function Lists() {
  return (
    <div
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    p-4 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10 bg-gray-200"
    >
      {numbers.map((number: number, index: number) => (
        <LessonCard key={index} number={number} />
      ))}
    </div>
  );
}

export default Lists;
