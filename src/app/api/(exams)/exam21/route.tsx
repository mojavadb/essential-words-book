export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The first time a message was ______ over a telegraph was in 1840.",
        answer: "transmitted",
      },
      {
        id: 2,
        question: "Can you ______ that this is your handwriting?",
        answer: "confirm",
      },
      {
        id: 3,
        question: "I took a ______ to avoid traffic.",
        answer: "detour",
      },
      {
        id: 4,
        question: "We were all very ______ after the long trip.",
        answer: "weary",
      },
      {
        id: 5,
        question: "There is ______ in being a good listener.",
        answer: "merit",
      },
      {
        id: 6,
        question: "The judge listened to the burglar's ______ of not guilty.",
        answer: "plea",
      },
      {
        id: 7,
        question: "The runner and catcher were about to ______ at home plate.",
        answer: "collide",
      },
      {
        id: 8,
        question: "Tyrone was ______ that he didn't have any more work to do.",
        answer: "relieved",
      },
      {
        id: 9,
        question:
          "When you run a company you have at least one new ______ every day to solve.",
        answer: "dilemma",
      },
      {
        id: 10,
        question: "Did you ______ our reservations at the hotel?",
        answer: "verify",
      },
      {
        id: 11,
        question: "We were ______ as to who murdered the wretched old man.",
        answer: "baffled",
      },
      {
        id: 12,
        question:
          "After having been married to Arthur for thirty years, Selma could ______ everything he was going to say.",
        answer: "anticipate ",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
