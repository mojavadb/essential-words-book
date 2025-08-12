export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "History has shown us that tyranny cannot ______ the human desire for freedom.",
        answer: "quench",
      },
      {
        id: 2,
        question:
          "The sailors used the North Star to ______ them to their destination.",
        answer: "guide",
      },
      {
        id: 3,
        question: "Our eyes ______ to sudden light by blinking.",
        answer: "respond",
      },
      {
        id: 4,
        question: "The coach ______ to the pitcher to watch for a bunt.",
        answer: "beckoned",
      },
      {
        id: 5,
        question:
          "Little Benjy was foolish enough to ______ out on the thin ice.",
        answer: "venture",
      },
      {
        id: 6,
        question:
          "If we are ______ to vote without hearing all sides of the issue, we could make a serious mistake.",
        answer: "compelled",
      },
      {
        id: 7,
        question:
          "Power in the hands of the ignorant is an ______ responsibility.",
        answer: "awesome",
      },
      {
        id: 8,
        question: "Benedict Arnold ______ his country.",
        answer: "betrayed",
      },
      {
        id: 9,
        question:
          "The only ______ excuse for Barry's failure is his lack of effort.",
        answer: "possible",
      },
      {
        id: 10,
        question:
          "It was not possible to ______ the excited woman after she was fined for jaywalking.",
        answer: "pacify",
      },
      {
        id: 11,
        question:
          "The last words ______ by the dying soldier were, 'We must hold the fort.'",
        answer: "uttered",
      },
      {
        id: 12,
        question:
          "Ralph found himself in an ______ situation when his blind date turned out to be a foot taller than he.",
        answer: "awkward",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
