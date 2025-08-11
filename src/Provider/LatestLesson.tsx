"use client";
import React from "react";

interface LastLessonContextType {
  lastLesson: string;
  setLastLesson: React.Dispatch<React.SetStateAction<string>>;
}

const lastLessonContext = React.createContext<LastLessonContextType | null>(
  null
);

function LastLessonProvider({ children }: { children: React.ReactNode }) {
  const [lastLesson, setLastLesson] = React.useState<string>("1");

  React.useEffect(() => {
    const saved = localStorage.getItem("lastLesson");
    if (saved) setLastLesson(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("lastLesson", lastLesson);
  }, [lastLesson]);

  return (
    <lastLessonContext.Provider value={{ lastLesson, setLastLesson }}>
      {children}
    </lastLessonContext.Provider>
  );
}

function useLastLesson() {
  const context = React.useContext(lastLessonContext);
  if (!context) {
    throw new Error("useLastLesson must be used within a LastLessonProvider");
  }
  return context;
}

export { LastLessonProvider, useLastLesson };
