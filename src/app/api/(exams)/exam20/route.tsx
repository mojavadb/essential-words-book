export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "If we do not do something about pollution, we may ______ from this earth.",
        answer: "perish",
      },
      {
        id: 2,
        question: "The ______ edge of that sheet of metal is very dangerous.",
        answer: "jagged",
      },
      {
        id: 3,
        question: "We were held ______ by the sinister enemy for ten days.",
        answer: "captive",
      },
      {
        id: 4,
        question:
          "The bank teller's ______ plan to steal a million dollars didn't succeed.",
        answer: "crafty",
      },
      {
        id: 5,
        question:
          "I like to ______ on until everyone else has left the theater.",
        answer: "linger",
      },
      {
        id: 6,
        question: "My parents taught me not to be ______ of authority.",
        answer: "defiant",
      },
      {
        id: 7,
        question: "Did the ______ of the Lebanese soldiers fail?",
        answer: "ambush",
      },
      {
        id: 8,
        question:
          "Business persons can ______ if they are honest with their customers.",
        answer: "prosper",
      },
      {
        id: 9,
        question: "A new star has just ______ from the rock music world.",
        answer: "emerged",
      },
      {
        id: 10,
        question: "I can ______ a steak in two minutes when I am hungry.",
        answer: "devour",
      },
      {
        id: 11,
        question:
          "With a surprising show of ______ , the old woman swam up and down the pool six times!",
        answer: "vigor",
      },
      {
        id: 12,
        question:
          "A lack of calcium in Tyrone's diet caused his bones to be quite ______ ",
        answer: "fragile",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
