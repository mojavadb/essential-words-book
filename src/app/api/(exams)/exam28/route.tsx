export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Many Americans can be considered ______ because they deprive their body of proper foods in favor of rich, fatty foods.",
        answer: "undernourished",
      },
      {
        id: 2,
        question:
          "Though he was threatened with imprisonment, Martin would not ______ the whereabouts of the treasure.",
        answer: "disclose",
      },
      {
        id: 3,
        question:
          "When the report of the airplane ______ reached us, many people pledged their help in locating survivors.",
        answer: "disaster",
      },
      {
        id: 4,
        question: "The only hope for the world is to ______ war.",
        answer: "outlaw",
      },
      {
        id: 5,
        question:
          "The police were reluctant to use ______ force, even to preserve order.",
        answer: "excessive",
      },
      {
        id: 6,
        question:
          "This is a court of justice for the ______ and the innocent alike.",
        answer: "culprit",
      },
      {
        id: 7,
        question:
          "Certain foods that ______ tooth decay should be banned from the market.",
        answer: "promote",
      },
      {
        id: 8,
        question:
          "An artist was hired to ______ a book on the birds of this vicinity.",
        answer: " illustrate",
      },
      {
        id: 9,
        question: "lf you ______ on shouting, I shall be compelled to leave.",
        answer: "insist",
      },
      {
        id: 10,
        question:
          "It would be a disaster for freedom of the press if the ______ were permitted to tell us what we can read.",
        answer: "censor",
      },
      {
        id: 11,
        question:
          "James has just about exhausted his father's patience with his ______ behavior.",
        answer: "juvenile",
      },
      {
        id: 12,
        question: "Only a brutal person would ______ someone who is disabled. ",
        answer: "bait",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
