export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "The old man had lived for seven ______",
        answer: "decades",
      },
      {
        id: 2,
        question:
          "He had the ______ that some day there would be peace on earth.",
        answer: "vision",
      },
      {
        id: 3,
        question: "Only a ______ of the senators were against welfare.",
        answer: "minority",
      },
      {
        id: 4,
        question: "No one has ever had even a ______ of the future.",
        answer: "glimpse",
      },
      {
        id: 5,
        question:
          "People used to think it was an ______ idea that human beings could ever fly.",
        answer: "absurd",
      },
      {
        id: 6,
        question: "We make ______ visits to Florida in the winter.",
        answer: "frequent",
      },
      {
        id: 7,
        question: "If you have any questions, don't ______ to ask.",
        answer: "hesitate",
      },
      {
        id: 8,
        question: "There was only a ______ man on the beach.",
        answer: "solitary",
      },
      {
        id: 9,
        question: "The ______ was over the high cost of bread.",
        answer: "conflict",
      },
      {
        id: 10,
        question:
          "______ studies have shown that the cost of living has gone up rapidly.",
        answer: "Recent",
      },
      {
        id: 11,
        question: "The gun alone was ______ enough to convict the killer.",
        answer: "evidence",
      },
      {
        id: 12,
        question:
          "The stories Henry told people about his adventures turned out to be merely ______",
        answer: "fiction",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
