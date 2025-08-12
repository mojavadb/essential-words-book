export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Rory was thrown out of school because of his ______ behavior.",
        answer: " unruly",
      },
      {
        id: 2,
        question: "The ______ lion attacked the lost child in the forest.",
        answer: "brutal",
      },
      {
        id: 3,
        question: "They had a ______ over who was a better swimmer.",
        answer: "brawl",
      },
      {
        id: 4,
        question:
          "The magician ______ his hand into his hat, and out came a rabbit.",
        answer: "thrust",
      },
      {
        id: 5,
        question:
          "A man was caught trying to ______ documents* that were top secret.",
        answer: "duplicate",
      },
      {
        id: 6,
        question:
          "His ______ was a man who was trying to win the heart of his girl.",
        answer: "opponent",
      },
      {
        id: 7,
        question:
          "The experienced chess player tried to keep his ______ guessing.",
        answer: "rival",
      },
      {
        id: 8,
        question:
          "The boy was ______ by the fact that his parents had abandoned him.",
        answer: "bewildered",
      },
      {
        id: 9,
        question: "Whenever the skinny boy got into a fight he was the ______",
        answer: "underdog",
      },
      {
        id: 10,
        question:
          "When some animals aren't fed on time they become very ______",
        answer: "violent",
      },
      {
        id: 11,
        question:
          "The ball was hit so hard that it went ______ down the field.",
        answer: "whirling",
      },
      {
        id: 12,
        question: "Five hundred men were killed in that ______ battle.",
        answer: "vicious",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
