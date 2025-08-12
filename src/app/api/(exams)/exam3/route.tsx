export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The March of Dimes makes its ______ appeal in the early spring.",
        answer: "annual",
      },
      {
        id: 2,
        question:
          "Oil paints ______ easily to form thousands of different shades.",
        answer: "blend",
      },
      {
        id: 3,
        question: "The ______ passing mark in most schools is 65%.",
        answer: "minimum",
      },
      {
        id: 4,
        question: "The producer always had her eye out for young ______",
        answer: "talent ",
      },
      {
        id: 5,
        question:
          "Your gifts do not tempt me and will not ______ me to change my mind.",
        answer: "persuade",
      },
      {
        id: 6,
        question:
          "In the cemetery the corpse was ______ in the bright moonlight.",
        answer: "visible",
      },
      {
        id: 7,
        question:
          "A ______ day in Florida is full of sunshine and warm breezes.",
        answer: " typical",
      },
      {
        id: 8,
        question: "Let's ______ a plan for doing away with homework.",
        answer: "devise",
      },
      {
        id: 9,
        question: "Everyone agrees that friendship is ______ for all of us.",
        answer: "essential ",
      },
      {
        id: 10,
        question:
          "A sharp rise in prices is bound to affect the prices in ______ our neighborhood stores.",
        answer: " wholesale",
      },
      {
        id: 11,
        question:
          "The buffalo, which once roamed the plains, is quite ______ today.",
        answer: "scarce",
      },
      {
        id: 12,
        question:
          "Government experts told us to buy chicken without realizing how ______ it had become.",
        answer: "expensive",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
