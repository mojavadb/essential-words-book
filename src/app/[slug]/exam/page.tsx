"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import { Kanit } from "next/font/google";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useLastLesson } from "@/Provider/LatestLesson";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});
const BASE_URL = "http://localhost:3000";

type Question = {
  id: number;
  question: string;
  answer: string;
};
type Data = {
  exam: Question[];
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function randomArray(array: string[] = []) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function AnswersPanel({
  randomAnswers,
  isShowingAnswer,
  toggleShowAnswer,
}: {
  randomAnswers: string[];
  isShowingAnswer: boolean;
  toggleShowAnswer: () => void;
}) {
  return (
    <div
      className="w-full text-center shadow-lg p-5 mb-2 mx-auto
      w-full max-w-2xl bg-white rounded-2xl flex items-center justify-start 
      flex-col text-sm text-gray-800 gap-5"
    >
      <div className="flex items-center justify-between border-b border-gray-300 bg-gray-50 w-full">
        <h3 className="text-sm font-bold text-gray-800">
          اگر املای لغات را نمیدانید:
        </h3>
        <button
          className="p-2 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
          onClick={toggleShowAnswer}
        >
          {isShowingAnswer ? (
            <Eye size={18} color="#464" />
          ) : (
            <EyeOff size={18} color="#644" />
          )}
        </button>
      </div>
      <div
        className={`flex direction-ltr gap-3 items-center justify-start flex-wrap
        ${isShowingAnswer ? "text-gray-200" : "text-gray-800"}`}
      >
        {randomAnswers.map((answer, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            key={index}
          >
            <div className="p-2 bg-gray-200 rounded-lg">{answer}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  indexOfQuestion,
  totalQuestions,
  score,
  clientAnswer,
  setClientAnswer,
  handleChecking,
  setIsShowingResult,
  isShowingResult,
}: {
  question: Question;
  indexOfQuestion: number;
  totalQuestions: number;
  score: number;
  clientAnswer: string;
  setClientAnswer: React.Dispatch<React.SetStateAction<string>>;
  handleChecking: () => void;
  setIsShowingResult: React.Dispatch<React.SetStateAction<boolean>>;
  isShowingResult: boolean;
}) {
  const { setLastLesson } = useLastLesson();
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6"
    >
      {isShowingResult ? (
        <div>
          <div className="mb-4 text-2xl font-semibold text-gray-700 flex flex-col md:flex-row items-center justify-between">
            <p>Result:</p>
            <p>
              {score} / {totalQuestions}
            </p>
          </div>
          <div className="mb-4 text-2xl font-semibold text-gray-700 flex flex-col md:flex-row items-center justify-between">
            {score >= (totalQuestions * 2) / 3 ? (
              <>
                <p className="text-green-800">accept</p>
                <Link
                  className="text-green-800"
                  href={`/lists`}
                  onClick={() =>
                    setLastLesson((l) => (Number(l) + 1).toString())
                  }
                >
                  Status
                </Link>
              </>
            ) : (
              <>
                <p className="text-red-800">unaccept</p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-red-800 cursor-pointer"
                >
                  Try again
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4 text-2xl font-semibold text-gray-700 flex flex-col md:flex-row items-center justify-between">
            <p>- Fill in the blank:</p>
            <p>
              Score: {score} / {totalQuestions}
            </p>
          </div>
          <div className="bg-gradient-to-b from-blue-200 to-blue-100 text-lg rounded-xl shadow-inner min-h-[150px] flex items-center justify-center p-6 mb-4 text-gray-800 leading-8">
            <div>
              {indexOfQuestion + 1}- {question.question}
            </div>
          </div>
          <input
            type="text"
            placeholder="answer here..."
            value={clientAnswer}
            onChange={(e) => setClientAnswer(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          {indexOfQuestion === 11 ? (
            <button
              disabled={clientAnswer === ""}
              type="button"
              className="flex items-center gap-2 bg-red-600 disabled:bg-red-300 
                      hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl text-sm transition 
                      transform hover:scale-105 cursor-pointer disabled:cursor-default"
              onClick={() => setIsShowingResult((r) => !r)}
            >
              <MoveLeft size={18} />
              <span>result</span>
            </button>
          ) : (
            <button
              disabled={clientAnswer === ""}
              type="button"
              className="flex items-center gap-2 bg-red-600 disabled:bg-red-300 
                      hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl text-sm transition 
                      transform hover:scale-105 cursor-pointer disabled:cursor-default"
              onClick={handleChecking}
            >
              <MoveLeft size={18} />
              <span>Next</span>
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Lesson() {
  const [indexOfQuestion, setIndexOfQuestion] = React.useState<number>(0);
  const [score, setScore] = React.useState<number>(0);
  const [clientAnswer, setClientAnswer] = React.useState<string>("");
  const [isShowingAnswer, setIsShowingAnswer] = React.useState<boolean>(true);
  const [isShowingResult, setIsShowingResult] = React.useState<boolean>(false);

  const params = useParams();
  const { data, error, isLoading } = useSWR<Data>(
    `${BASE_URL}/api/exam${params.slug}`,
    fetcher
  );

  const randomAnswers = React.useMemo(() => {
    const answers = data?.exam?.map((item) => item.answer) ?? [];
    return randomArray(answers);
  }, [data]);

  function handleChecking() {
    if (clientAnswer === "") return;
    if (clientAnswer === data?.exam[indexOfQuestion].answer) {
      setScore((score) => score + 1);
    }
    setIndexOfQuestion((prev) => prev + 1);
    setClientAnswer("");
  }

  if (error)
    return (
      <div className="text-red-600 text-center mt-10">
        خطا در بارگذاری داده‌ها
      </div>
    );
  if (isLoading)
    return (
      <div className="text-gray-500 text-center mt-10">در حال بارگذاری...</div>
    );

  return (
    <main
      className={`min-h-screen bg-gray-100 p-6 flex flex-col justify-between`}
    >
      <AnswersPanel
        randomAnswers={randomAnswers}
        isShowingAnswer={isShowingAnswer}
        toggleShowAnswer={() => setIsShowingAnswer((s) => !s)}
      />
      <div
        className={`flex-1 flex items-center justify-center direction-ltr ${kanit.className}`}
      >
        <AnimatePresence mode="wait">
          {data?.exam.map(
            (question, index) =>
              index === indexOfQuestion && (
                <QuestionCard
                  key={question.id}
                  question={question}
                  indexOfQuestion={indexOfQuestion}
                  totalQuestions={data.exam.length}
                  score={score}
                  clientAnswer={clientAnswer}
                  setClientAnswer={setClientAnswer}
                  handleChecking={handleChecking}
                  setIsShowingResult={setIsShowingResult}
                  isShowingResult={isShowingResult}
                />
              )
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
