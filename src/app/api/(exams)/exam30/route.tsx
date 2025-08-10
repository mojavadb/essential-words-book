export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The judge ______ to this case must be a person of justice and honesty.",
        answer: "appointed",
      },
      {
        id: 2,
        question:
          "I knew that the culprit was in ______ terror of being caught.",
        answer: "mortal",
      },
      {
        id: 3,
        question:
          "The ______ of the collapsed buil9ing were dazed by the tragedy.",
        answer: "occupants",
      },
      {
        id: 4,
        question:
          "How can you ______ in a favorable light a person who betrayed his country?",
        answer: "depict",
      },
      {
        id: 5,
        question:
          "Let us explore another ______ for the hospital where the population is not so dense.",
        answer: "site",
      },
      {
        id: 6,
        question:
          "A good line of ______ is thrifty with words and bursting with feeling.",
        answer: "verse",
      },
      {
        id: 7,
        question:
          "Troops were ______ in the city in a vain attempt to keep order.",
        answer: "quartered",
      },
      {
        id: 8,
        question:
          "The price he ______ for the car was essentially the same as that of his competitor.",
        answer: "quoted",
      },
      {
        id: 9,
        question:
          "Seeing the movie based on the ______ does not exempt you from reading the book.",
        answer: "novel",
      },
      {
        id: 10,
        question:
          "The death of the millionaire ______ a bewildering number of hopeful beneficiaries.",
        answer: "attracted",
      },
      {
        id: 11,
        question:
          "The new ______ has not won unanimous acceptance; there are those who prefer the traditional ways.",
        answer: "morality",
      },
      {
        id: 12,
        question:
          "When I ______ abroad, I come across many historic sites and structures. ",
        answer: "roam",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
