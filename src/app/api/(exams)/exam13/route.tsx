export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "The wedding will at eight o'clock.",
        answer: "commence",
      },
      {
        id: 2,
        question:
          "When Abe lost his job, he had to to a place where he could find work.",
        answer: "migrate",
      },
      {
        id: 3,
        question: "We could tell Ira was happy by the bright in his eyes.",
        answer: "gleam",
      },
      {
        id: 4,
        question: " Because of the , people were dying in the streets.",
        answer: "famine",
      },
      {
        id: 5,
        question:
          "Many people claim to have seen a ghostly sailing through the fog.",
        answer: "vessel",
      },
      {
        id: 6,
        question: "Can you the flags of all the states in the United States?",
        answer: "identify",
      },
      {
        id: 7,
        question: "He was of all the rules of his religion.",
        answer: "observant",
      },
      {
        id: 8,
        question: "The sent five reporters to cover the big story.",
        answer: "editor",
      },
      {
        id: 9,
        question: "They were trying to interest in old movies.",
        answer: "revive",
      },
      {
        id: 10,
        question:
          "The travelers were stupid to in eating the food after they were told it was spoiled.",
        answer: "persist",
      },
      {
        id: 11,
        question: "weather kept the pilot from seeing the airfield clearly.",
        answer: "Hazy",
      },
      {
        id: 12,
        question: "The young applied for his first job at a small newspaper.",
        answer: "journalist",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
