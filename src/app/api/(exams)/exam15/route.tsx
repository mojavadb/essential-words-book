export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "Dominick was ______ to have such good friends.",
        answer: "fortunate",
      },
      {
        id: 2,
        question:
          "Rhonda didn't believe in divorce because she felt that marriage is ______",
        answer: "sacred",
      },
      {
        id: 3,
        question:
          "The pilot had to ______ his course when he ran into bad weather.",
        answer: "alter",
      },
      {
        id: 4,
        question: "Everyone approved of Dave's ______ proposal.",
        answer: "innovative",
      },
      {
        id: 5,
        question: "David wanted to ______ medicine as a career.",
        answer: "pursue",
      },
      {
        id: 6,
        question:
          "He moved out of the house when he became a ______ young man.",
        answer: "mature",
      },
      {
        id: 7,
        question:
          "The vote to make Jim president of the camera club was ______",
        answer: "unanimous",
      },
      {
        id: 8,
        question:
          "When his mother died of cancer, the young doctor decided to ______ his life to finding a cure for it.",
        answer: "pledge",
      },
      {
        id: 9,
        question:
          "They had to ______ their plans when a third person decided to join them for lunch.",
        answer: "revise",
      },
      {
        id: 10,
        question:
          "My grandfather was a ______ in the field of sports medicine.",
        answer: "pioneers",
      },
      {
        id: 11,
        question:
          "The relaxed friends spoke in a ______ manner as they talked on the street.",
        answer: "casual",
      },
      {
        id: 12,
        question: "I can feel my stomach ______ when I breathe deeply.",
        answer: "expand",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
