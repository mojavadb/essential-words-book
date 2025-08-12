export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: " I left the city for a peaceful ______ farm. ",
        answer: "rural",
      },
      {
        id: 2,
        question:
          "Professor Dixon liked the atmosphere of the university ______",
        answer: "campus",
      },
      {
        id: 3,
        question: " He tried to ______ questions he didn't know how to answer.",
        answer: " evade",
      },
      {
        id: 4,
        question: "The ______ of people wanted him to be president.",
        answer: "majority",
      },
      {
        id: 5,
        question: "The guests began to ______ for Thanksgiving dinner.",
        answer: "assemble",
      },
      {
        id: 6,
        question: "Christmas trees are a popular ______ for many people.",
        answer: "tradition",
      },
      {
        id: 7,
        question: "Making a living for his family was too much of a ______",
        answer: "burden",
      },
      {
        id: 8,
        question: "I want to ______ all the cities I haven't visited.",
        answer: "explore",
      },
      {
        id: 9,
        question: "If Gene doesn't ______ , he will get into serious trouble.",
        answer: "reform",
      },
      {
        id: 10,
        question:
          "He had to do research on the ______ of biology for a school report.",
        answer: "topic ",
      },
      {
        id: 11,
        question: "Historians will ______ the causes of the war in Iraq.",
        answer: "probe",
      },
      {
        id: 12,
        question:
          "Whether or not eighteen-year-olds should be allowed to vote was in ______ for a long time.",
        answer: "debate",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
