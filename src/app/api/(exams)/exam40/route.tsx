export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "Intemperate eating habits can lead to ______",
        answer: "depart",
      },
      {
        id: 2,
        question:
          "To avoid an ______ , the Surgeon-General ordered a thorough study of the situation.",
        answer: "cancelled",
      },
      {
        id: 3,
        question:
          "At a recent meeting of ______ , a new treatment for arthritis was discussed.",
        answer: "placard",
      },
      {
        id: 4,
        question: "The humid air in this room must be ______",
        answer: "contagious",
      },
      {
        id: 5,
        question:
          "One thousand angry voters loudly signified an ______ objection to the motion.",
        answer: "unearthed",
      },
      {
        id: 6,
        question:
          "The frightened man tormented himself by ______ every unpleasant experience into a calamity.",
        answer: "customary",
      },
      {
        id: 7,
        question:
          "If used as a precedent, this verdict will prove to be an ______ to justice.",
        answer: "scalded",
      },
      {
        id: 8,
        question:
          "Without the ______ he had confidently expected, Mr. Halcroft faced hardships in his retirement.",
        answer: "transparent",
      },
      {
        id: 9,
        question:
          "The sale of the vacant lot for construction of an office building will ______ the residential character of the neighborhood.",
        answer: "legible",
      },
      {
        id: 10,
        question: "Preserve the ______ in case we need more prints.",
        answer: "clergy",
      },
      {
        id: 11,
        question:
          "We should all attend the meeting at the ______ center, for the issues are of vital concern to every citizen.",
        answer: "debtor",
      },
      {
        id: 12,
        question:
          "The heart and the brain are considered the most ______ organs in the human body.",
        answer: "coincide",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
