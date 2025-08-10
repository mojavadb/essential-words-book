export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The committee recommended that we ______ all dangerous foods.",
        answer: "ban",
      },
      {
        id: 2,
        question: "Dave had his ______ of cookies for the day.",
        answer: "quota",
      },
      {
        id: 3,
        question:
          "You should always make sure that you have an ______ supply of gasoline for a long trip.",
        answer: "abundant",
      },
      {
        id: 4,
        question: "The rain was ______ into the concrete when it was dry.",
        answer: "absorbed",
      },
      {
        id: 5,
        question: "Is this inexpensive dress ______ for a formal wedding?",
        answer: "appropriate",
      },
      {
        id: 6,
        question: "How much do you ______ that horse is worth?",
        answer: "estimate",
      },
      {
        id: 7,
        question:
          "Helen had an ______ feeling as she went on to the stage for the first time.",
        answer: "uneasy",
      },
      {
        id: 8,
        question: "When you are in trouble the worst thing to do is to ______",
        answer: "panic",
      },
      {
        id: 9,
        question: "The farmers had a good ______ of corn this year.",
        answer: "harvest",
      },
      {
        id: 10,
        question: "We ______ all the figures and came to one solid answer.",
        answer: "calculated",
      },
      {
        id: 11,
        question: "Every ______ the cook prepared was tasty.",
        answer: "morsel",
      },
      {
        id: 12,
        question: "The ______ of snow caused us to change our holiday plans.",
        answer: "threat",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
