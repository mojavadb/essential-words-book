export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "Ernesto would constantly ______ his father's questions.",
        answer: "ignore",
      },
      {
        id: 2,
        question:
          "Historical ______ are kept in a special section of the library.",
        answer: "documents",
      },
      {
        id: 3,
        question: "Great scientific progress has been made in this ______",
        answer: "century",
      },
      {
        id: 4,
        question: "The massive wrestler accepted the ______ of the newcomer.",
        answer: "challenge",
      },
      {
        id: 5,
        question: "Not wearing warm clothing was the ______ of his illness.",
        answer: "source",
      },
      {
        id: 6,
        question:
          "When do you expect to ______ your investigation of the case?",
        answer: "conclude",
      },
      {
        id: 7,
        question: "It is ______ that this restaurant's food is delicious.",
        answer: "undeniable",
      },
      {
        id: 8,
        question: "Lena showed ______ a of good judgment.",
        answer: "lack",
      },
      {
        id: 9,
        question:
          "Everyone who lived in the ______ of the bomb test was in peril.",
        answer: "vicinity",
      },
      {
        id: 10,
        question:
          "Anita's habit of interrupting him sent her husband into a ______",
        answer: "rage",
      },
      {
        id: 11,
        question: "My nephew was given a set of ______ soldiers for Christmas.",
        answer: "miniature",
      },
      {
        id: 12,
        question:
          "When you are tired it is hard to ______ staying in bed all day.",
        answer: "resist",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
