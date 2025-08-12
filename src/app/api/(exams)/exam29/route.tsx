export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "There is a tendency to ______ politicians from keeping campaign promises.",
        answer: "exempt",
      },
      {
        id: 2,
        question: "A ______ of such a blunder could be disastrous.",
        answer: "repetition",
      },
      {
        id: 3,
        question:
          "The guide was compelled to admit he had ______ far from the intended route.",
        answer: "blundered",
      },
      {
        id: 4,
        question: "A miserly person cannot ______ the joy of sharing.",
        answer: "comprehend",
      },
      {
        id: 5,
        question:
          "Though doctors ______ to cure the undernourished child, he never regained his full health.",
        answer: "toiled",
      },
      {
        id: 6,
        question: "Three workers were ______ when the ladder collapsed.",
        answer: "maimed",
      },
      {
        id: 7,
        question:
          "The policeman was ______ for his bravery in capturing the armed outlaw.",
        answer: "commended",
      },
      {
        id: 8,
        question:
          "The perfect attendance of our class illustrated the importance of this ______ exam.",
        answer: "final",
      },
      {
        id: 9,
        question:
          "Friend and foe united in ______ the death of the leader, for she was respected by all.",
        answer: "mourning",
      },
      {
        id: 10,
        question:
          "The drowning man's cries were uttered in ______ , because no one was near to hear them.",
        answer: "vain",
      },
      {
        id: 11,
        question: "Miguel's fever ______ after he took the medicine.",
        answer: "subsided",
      },
      {
        id: 12,
        question:
          "My brother was in such a ______ over the tragedy that he could hardly respond to questions. ",
        answer: "daze",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
