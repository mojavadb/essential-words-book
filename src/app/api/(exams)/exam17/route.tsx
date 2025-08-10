export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "Sometimes it is best to ______ being too nice to strangers.",
        answer: "avoid",
      },
      {
        id: 2,
        question:
          "I wasn't ______ that there were concerts in the park on Tuesdays.",
        answer: "aware",
      },
      {
        id: 3,
        question: "We bought a large ______ of potato chips for the party.",
        answer: "quantity",
      },
      {
        id: 4,
        question: "Rock 'n roll music just doesn't ______ to me.",
        answer: "appeal",
      },
      {
        id: 5,
        question:
          "My aunt was in ______ health and had to have nurses on twenty-four hour duty.",
        answer: "wretched",
      },
      {
        id: 6,
        question: "The ______ smoke from the fireplace burned my eyes.",
        answer: "harsh",
      },
      {
        id: 7,
        question:
          "It was quite a ______ that Beverly's husband died in an automobile accident.",
        answer: "misfortune",
      },
      {
        id: 8,
        question: "If I had to ______ for a new career, it would be medicine.",
        answer: "opt",
      },
      {
        id: 9,
        question:
          "It is smart to be ______ of foods whose contents are not listed on the package.",
        answer: "wary",
      },
      {
        id: 10,
        question:
          "The judge denounced the thief for stealing a ______ of molasses.",
        answer: "keg",
      },
      {
        id: 11,
        question:
          "A candy bar will not ______ you the way a piece of meat will.",
        answer: "nourish",
      },
      {
        id: 12,
        question:
          "Baxter took pep pills regularly and became a drug ______ without realizing it.",
        answer: "addict",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
