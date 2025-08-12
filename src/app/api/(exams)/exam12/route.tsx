export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "The doctor was completely ______ with the dying man.",
        answer: "frank",
      },
      {
        id: 2,
        question: "In an ______ whisper, Maria called for my attention.",
        answer: "audible",
      },
      {
        id: 3,
        question:
          "We didn't need any evidence to see that the poor man was in ______ need of money and food.",
        answer: "urgent",
      },
      {
        id: 4,
        question: "All his life the child was used to living in ______ areas.",
        answer: "urban",
      },
      {
        id: 5,
        question:
          "Dry matches to ______ the campfire were sought by the boy scout.",
        answer: "ignite",
      },
      {
        id: 6,
        question: "Smoking is ______ in the medical building.",
        answer: "prohibited",
      },
      {
        id: 7,
        question: "Gasoline fumes help to ______ the air.",
        answer: "pollute",
      },
      {
        id: 8,
        question:
          "The ______ in the number of people voting in national elections is due to lack of interest.",
        answer: "decrease",
      },
      {
        id: 9,
        question:
          "Some citizens believe that we will never be able to ______ war.",
        answer: "abolish",
      },
      {
        id: 10,
        question: "The ______ of New York City is about eight million people.",
        answer: "population",
      },
      {
        id: 11,
        question: "In the comics, Superman never ______ his true identity.",
        answer: "reveals",
      },
      {
        id: 12,
        question:
          "They needed an ______ supply of water to last for the entire trip through the desert.",
        answer: "adequate",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
