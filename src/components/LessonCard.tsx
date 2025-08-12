"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLastLesson } from "@/Provider/LatestLesson";
import React from "react";

function LessonCard({ number }: { number: number }) {
  const { lastLesson } = useLastLesson();
  const [status, setStatus] = React.useState<string>("");
  console.log(lastLesson);

  React.useEffect(() => {
    if (Number(lastLesson) === number) {
      setStatus("equal");
      return;
    }
    if (Number(lastLesson) > number) {
      setStatus("passed");
      return;
    }
    if (Number(lastLesson) < number) {
      setStatus("unpassed");
      return;
    }
  }, [lastLesson, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={`p-6 rounded-3xl border backdrop-blur-lg flex flex-col justify-between transition-all duration-300 overflow-hidden 
        ${
          status === "unpassed" &&
          "bg-gradient-to-br from-red-500 via-rose-400 to-pink-500 border-rose-300"
        }
        ${
          status === "passed" &&
          "bg-gradient-to-br from-green-500 via-emerald-400 to-teal-500 border-emerald-300"
        }
        ${
          status === "equal" &&
          "bg-gradient-to-br from-gray-500 via-stone-400 to-netural-500 border-stone-300"
        }
        `}
    >
      <div>
        <h3 className="mb-2 text-xl font-extrabold text-white drop-shadow-sm">
          درس {number}
        </h3>
        <p className="mb-5 text-sm text-white/90 flex items-center gap-2">
          <span className="font-medium">وضعیت:</span>
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm shadow-sm"
          >
            {status === "unpassed" && "گذرانده نشده"}
            {status === "passed" && "گذرانده شده"}
            {status === "equal" && "درس فعلی"}
          </motion.span>
        </p>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={`/${number}`}
          className="block text-center text-sm font-semibold px-6 py-2 rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-lg"
        >
          {status === "unpassed" && "قفل"}
          {status === "passed" && "گذراندن مجدد"}
          {status === "equal" && "شروع"}
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default LessonCard;
