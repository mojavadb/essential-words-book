export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Try not to be _______ when you drive a car, especially at night.",
        answer: "reckless",
      },
      {
        id: 2,
        question:
          "The brilliant investigator found an _______ answer to the problem.",
        answer: "ingenious",
      },
      {
        id: 3,
        question:
          "I find it more _______ to buy a monthly train ticket than to pay for each ride each day.",
        answer: "economical",
      },
      {
        id: 4,
        question:
          "If you continue to _______ about the play, everyone will think you are a relative of the author.",
        answer: "rave",
      },
      {
        id: 5,
        question: "I took one _______ and I knew it was Miley Cyrus.",
        answer: "glance",
      },
      {
        id: 6,
        question:
          "Every week Mrs. Evans made a _______ covering the essential sums she would have to spend.",
        answer: "budget",
      },
      {
        id: 7,
        question:
          "The coach knew how to _______ the players to do what he wanted.",
        answer: "manipulate",
      },
      {
        id: 8,
        question:
          "Bobby's job at the gas station was to _______ all the cars after they had been worked on.",
        answer: "lubricate",
      },
      {
        id: 9,
        question: "When someone you love dies, it is a _______",
        answer: "tragedy",
      },
      {
        id: 10,
        question:
          "Journalists reported that the dropping of the bombs was a _______ act.",
        answer: "horrid",
      },
      {
        id: 11,
        question:
          "The car leaped up on the sidewalk, struck a _______ , and then crashed into the bakery's window.",
        answer: "pedestrian",
      },
      {
        id: 12,
        question:
          "Whirling across the stage, the _______ ballet dancer captured our hearts.",
        answer: "nimble",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
