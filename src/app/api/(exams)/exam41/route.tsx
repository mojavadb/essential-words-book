export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The children shrieked with fear as the ______ flew over them.",
        answer: "wasp",
      },
      {
        id: 2,
        question:
          "It is illegal to ______ prisoners until they have served a minimum sentence.",
        answer: "parole",
      },
      {
        id: 3,
        question:
          "The municipal council voted to ______ the run-down section of the city and to make it a model residential area.",
        answer: "rehabilitate",
      },
      {
        id: 4,
        question:
          "Mike Pavonna was the unanimous choice of the ______ for the office of mayor.",
        answer: "multitude",
      },
      {
        id: 5,
        question:
          "With all this equipment, we have the ______ to survive for weeks in the most frigid climate.",
        answer: "potential",
      },
      {
        id: 6,
        question: "The worn ______ betrayed the poverty of the family.",
        answer: "upholstery",
      },
      {
        id: 7,
        question:
          "His family was distressed at Frank's ______ to the normal adolescent activities.",
        answer: "indifference",
      },
      {
        id: 8,
        question:
          "Unfortunately, Carmen was too ______ with dates to devote much time to her studies.",
        answer: "preoccupied",
      },
      {
        id: 9,
        question:
          "To start the air circulating, turn the button to a ______ pos1t1on.",
        answer: "vertical",
      },
      {
        id: 10,
        question:
          "Bob was pleased to be ______ for the presidency, but he gallantly declined in favor of Carole.",
        answer: "nominated",
      },
      {
        id: 11,
        question:
          "When the security leak was discovered, the editor called the newspaper ______ to check if there was any precedent for such a case.",
        answer: "morgue",
      },
      {
        id: 12,
        question:
          "The winner's ______ smile annoyed some of the members of the audience.",
        answer: "complacent",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
