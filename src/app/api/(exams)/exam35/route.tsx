export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Our club consented to hold a ______ as a means of raising money.",
        answer: "lottery",
      },
      {
        id: 2,
        question:
          "If you want to ______ data on employment opportunities, a good source is the Bulletin of the Department of Labor.",
        answer: "obtain",
      },
      {
        id: 3,
        question: "Some call it a ______ but I call it a movie.",
        answer: "cinema",
      },
      {
        id: 4,
        question: "Our team excelled in the last ______ of the track meet.",
        answer: "event",
      },
      {
        id: 5,
        question:
          "As I watched the huge jet ______ into the sky, I wished that I were on board.",
        answer: "soaring",
      },
      {
        id: 6,
        question:
          "Since Margaret has become his neighbor, Bud's progress in school has been practically ______",
        answer: "stationary",
      },
      {
        id: 7,
        question:
          " ______ to his phone call, I received a confirmation in the mail.",
        answer: "Subsequent",
      },
      {
        id: 8,
        question: "We are compelled to ______ this outdated theory.",
        answer: "discard",
      },
      {
        id: 9,
        question: "How does that evidence ______ to the case?",
        answer: "relate",
      },
      {
        id: 10,
        question:
          "Tim's argument may be logical but it is too ______ to be convincing.",
        answer: "vague",
      },
      {
        id: 11,
        question:
          "With no one to ______ the project, the entire scheme collapsed.",
        answer: "finance",
      },
      {
        id: 12,
        question:
          "This feeble speech will do little to ______ the spirits of the audience.",
        answer: "elevate",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
