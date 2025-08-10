export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Most people agreed that he was a ______ looking man because of the long red beard.",
        answer: "weird",
      },
      {
        id: 2,
        question:
          "Chuck's reason for quitting his job was ______ ; he was not being paid.",
        answer: "valid",
      },
      {
        id: 3,
        question:
          "The answer to the question was so ______ that everyone knew it.",
        answer: "obvious",
      },
      {
        id: 4,
        question:
          "The ______ tennis player would never make the Olympic squad.",
        answer: "mediocre",
      },
      {
        id: 5,
        question:
          "She was ______ to take on any more responsibilities at work.",
        answer: "reluctant",
      },
      {
        id: 6,
        question: "People often tend to ______ stories they hear.",
        answer: "exaggerate",
      },
      {
        id: 7,
        question: "The bank is kept under very tight ______",
        answer: "security",
      },
      {
        id: 8,
        question: "Because the box was so ______ it took two men to lift it.",
        answer: "bulky",
      },
      {
        id: 9,
        question:
          "Even though he was not a professional, the ______ photographer entered the contest.",
        answer: "amateur",
      },
      {
        id: 10,
        question: "A wide ______ of shows is playing at the concert hall.",
        answer: "variety",
      },
      {
        id: 11,
        question: "Mrs. Meyers is a ______ member of the staff.",
        answer: "prominent",
      },
      {
        id: 12,
        question: "We all hoped that the small boat would ______ the storm. ",
        answer: "survive",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
