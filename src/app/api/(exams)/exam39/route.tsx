export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "After several hours, Raoul abandoned his search to ______ for home.",
        answer: "depart",
      },
      {
        id: 2,
        question:
          "The police department ______ all leaves until the dangerous lunatic was captured.",
        answer: "cancelled",
      },
      {
        id: 3,
        question: "The ______ helped to advertise the circus.",
        answer: "placard",
      },
      {
        id: 4,
        question:
          "Since the disease is ______ so , it is essential to identify the carrier.",
        answer: "contagious",
      },
      {
        id: 5,
        question:
          "It was fortunate that the journalist had ______ the sinister plan to assassinate the president.",
        answer: "unearthed",
      },
      {
        id: 6,
        question:
          "It was ______ for the victorious general to ride at the head of a parade.",
        answer: "customary",
      },
      {
        id: 7,
        question:
          "When she slipped in the shower, Myra was ______ by the hot water.",
        answer: "scalded",
      },
      {
        id: 8,
        question: "Through the ______ curtain, the entire scene was visible.",
        answer: "transparent",
      },
      {
        id: 9,
        question:
          "Only a portion of the scrolls found in the cave were ______ , but their value should not be underestimated.",
        answer: "legible",
      },
      {
        id: 10,
        question:
          "The duties of the ______ are not confined to religious matters.",
        answer: "clergy",
      },
      {
        id: 11,
        question:
          "The was brought to court for having deceived the ______ bank with a false statement of his finances.",
        answer: "debtor",
      },
      {
        id: 12,
        question:
          "Since their interests do not ______ there is still a lingering doubt in my mind if they should enter into matrimony.",
        answer: "coincide",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
