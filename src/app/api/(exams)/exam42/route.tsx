export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "When the third person she approached turned away from her, Marilyn had a vague* feeling she was being ______",
        answer: "snubbed",
      },
      {
        id: 2,
        question:
          "______ Achilles' did not cease* until he had taken revenge on the slayer of his friend.",
        answer: "wrath",
      },
      {
        id: 3,
        question:
          "As the captain ______ their situation, he realized that resistance* was in vain.*",
        answer: "pondered",
      },
      {
        id: 4,
        question:
          "Father ______ that all forms of gambling should be declared illegal.*",
        answer: "maintained",
      },
      {
        id: 5,
        question:
          "The prophet warned that the land cannot ______ such violations of morality.*",
        answer: "endure",
      },
      {
        id: 6,
        question:
          "To diminish* the chances of raising weaklings, the ancient Spartans used to ______ to the elements the babies that they did not want.",
        answer: "expose",
      },
      {
        id: 7,
        question:
          "The Robin Hood stories are a good illustration* of a ______ from the Middle Ages.",
        answer: "legend",
      },
      {
        id: 8,
        question:
          "The ______ is the symbol* of the democratic way of choosing leaders.",
        answer: "ballot",
      },
      {
        id: 9,
        question:
          "Because of the secret nature of the cargo, visits to the ______ area were prohibited.*",
        answer: "wharf",
      },
      {
        id: 10,
        question: "The patriot* was ______ dying for his deed.",
        answer: "resigned",
      },
      {
        id: 11,
        question:
          "We are trying to persuade* the sponsors of the bill to ______ it in order to improve its chances for passage.",
        answer: "amend",
      },
      {
        id: 12,
        question:
          "The guinea pigs could not put up with ______ changes in their diet.",
        answer: "drastic",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
