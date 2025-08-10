export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "The doctor was completely with the dying man.",
        answer: "frank",
      },
      {
        id: 2,
        question: "In an whisper, Maria called for my attention.",
        answer: "audible",
      },
      {
        id: 3,
        question:
          "We didn't need any evidence* to see that the poor man was in need of money and food.",
        answer: "urgent",
      },
      {
        id: 4,
        question: "All his life the child was used to living in areas.",
        answer: "urban",
      },
      {
        id: 5,
        question: "Dry matches to the campfire were sought by the boy scout.",
        answer: "ignite",
      },
      {
        id: 6,
        question: "Smoking is in the medical building.",
        answer: "prohibited",
      },
      {
        id: 7,
        question: "Gasoline fumes help to the air.",
        answer: "pollute",
      },
      {
        id: 8,
        question:
          "The in the number of people voting in national elections is due to lack of interest.",
        answer: "decrease",
      },
      {
        id: 9,
        question: "Some citizens believe that we will never be able to war.",
        answer: "abolish",
      },
      {
        id: 10,
        question: "The of New York City is about eight million people.",
        answer: "population",
      },
      {
        id: 11,
        question: "In the comics, Superman never his true identity.",
        answer: "reveals",
      },
      {
        id: 12,
        question:
          "They needed an supply of water to last for the entire trip through the desert.",
        answer: "adequate",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
