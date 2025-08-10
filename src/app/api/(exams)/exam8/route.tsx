export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Most people agreed that he was a looking man because of the long red beard.",
        answer: "weird",
      },
      {
        id: 2,
        question:
          "Chuck's reason for quitting his job was ; he was not being paid.",
        answer: "valid",
      },
      {
        id: 3,
        question: "The answer to the question was so that everyone knew it.",
        answer: "obvious",
      },
      {
        id: 4,
        question: "The tennis player would never make the Olympic squad.",
        answer: "mediocre",
      },
      {
        id: 5,
        question: "She was to take on any more responsibilities at work.",
        answer: "reluctant",
      },
      {
        id: 6,
        question: "People often tend to stories they hear.",
        answer: "exaggerate",
      },
      {
        id: 7,
        question: "The bank is kept under very tight ___ _",
        answer: "security",
      },
      {
        id: 8,
        question: "Because the box was so it took two men to lift it.",
        answer: "bulky",
      },
      {
        id: 9,
        question:
          "Even though he was not a professional, the photographer entered the contest.",
        answer: "amateur",
      },
      {
        id: 10,
        question: "A wide of shows is playing at the concert hall.",
        answer: "variety",
      },
      {
        id: 11,
        question: "Mrs. Meyers is a member of the staff.",
        answer: "prominent",
      },
      {
        id: 12,
        question: "We all hoped that the small boat would the storm. ",
        answer: "survive",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
