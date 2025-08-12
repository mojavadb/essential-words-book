export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Little Paul was _______ that he got the Christmas present he asked for.",
        answer: "grateful",
      },
      {
        id: 2,
        question: "I _______ that you can break Michael's scoring record.",
        answer: "doubt",
      },
      {
        id: 3,
        question: "My mother used to say that I was as _______ as a toothpick.",
        answer: "slender",
      },
      {
        id: 4,
        question: "Be _______ about swimming right after eating a meal.",
        answer: "cautious",
      },
      {
        id: 5,
        question: "The map he drew of our neighborhood was not very ______",
        answer: "accurate",
      },
      {
        id: 6,
        question:
          "In Superman comics, the only thing Superman couldn't _______ was lead.",
        answer: "penetrate",
      },
      {
        id: 7,
        question:
          "When my family went to look for a new house, we had a _______ choice.",
        answer: "vast",
      },
      {
        id: 8,
        question:
          "Modern highways far _______ the old dirt roads of yesterday.",
        answer: "surpass",
      },
      {
        id: 9,
        question: "The jar was filled to ______",
        answer: "capacity",
      },
      {
        id: 10,
        question: "We were all very _______ that Duane would pass his exams.",
        answer: "confident",
      },
      {
        id: 11,
        question: "The _______ used by my biology teacher is very expensive.",
        answer: "microscope",
      },
      {
        id: 12,
        question:
          "The music was so loud that I thought that it would _______ my eardrums.",
        answer: "pierce",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
