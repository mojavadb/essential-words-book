export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "I have it on the highest ______ that the lead in the play has been chosen.",
        answer: "authority",
      },
      {
        id: 2,
        question: "I am going to ______ my brother to become a lawyer.",
        answer: "encourage",
      },
      {
        id: 3,
        question: "Uncle Sam is the well-known ______ of the United States.",
        answer: "symbol",
      },
      {
        id: 4,
        question: "We pay $5 a month to keep our house free from ______",
        answer: "vermin",
      },
      {
        id: 5,
        question:
          "When a country is ______ , it does not want to get involved in foreign conflict. ",
        answer: "neutral",
      },
      {
        id: 6,
        question: "What type of art work do you ______ to be beautiful?",
        answer: "consider",
      },
      {
        id: 7,
        question: "The ______ lion clawed at the visitors to the zoo.",
        answer: "fierce",
      },
      {
        id: 8,
        question:
          "To hear the ______ of a person in sorrow is to hear a dismal sound.",
        answer: "wail",
      },
      {
        id: 9,
        question:
          "Only a ______ of Ivan's fortune was left to his human beneficiaries; most of the money was given to his cats.",
        answer: "trifle",
      },
      {
        id: 10,
        question: "I ______ people who are jealous of my success.",
        answer: "detest",
      },
      {
        id: 11,
        question: "The unpleasant salesgirl always had a ______ on her face.",
        answer: "scowl",
      },
      {
        id: 12,
        question: "My father warned me not to ______ at our poor relatives. ",
        answer: "sneer",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
