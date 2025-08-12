export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "Celia was left ______ after working so hard all her life.",
        answer: "idle",
      },
      {
        id: 2,
        question:
          "I would ______ that claim if I did not know you were jesting.",
        answer: "dispute",
      },
      {
        id: 3,
        question:
          "This site will attract many home buyers because of the advantages for the ______",
        answer: "commuter",
      },
      {
        id: 4,
        question:
          "The early pioneers exhibited great ______ in braving the hardships of the new frontiers.",
        answer: "valor",
      },
      {
        id: 5,
        question:
          "A ______ of caution helped Mr. Samler to avoid the obvious risks in his new job.",
        answer: "vein",
      },
      {
        id: 6,
        question:
          "It is no misfortune to spend a few ______ days without excitement and conflict.",
        answer: "uneventful",
      },
      {
        id: 7,
        question:
          "The ______ element of society ignores the warnings about the dangers of drugs.",
        answer: "lunatic",
      },
      {
        id: 8,
        question:
          "Since the statement was made in ______ it is not a valid point to argue.",
        answer: "jest",
      },
      {
        id: 9,
        question:
          "I asked my opponent in the debate to ______ his remarks to the subject under discussion.",
        answer: "confine",
      },
      {
        id: 10,
        question:
          "How can we transmit a healthy ______ view to the next generation?",
        answer: "patriotic",
      },
      {
        id: 11,
        question:
          "People have always wanted to inhabit the land where the soil is most ______",
        answer: "fertile",
      },
      {
        id: 12,
        question: "People still worship the ______ of greed and power.",
        answer: "idol",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
