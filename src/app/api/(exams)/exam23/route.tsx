export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "I ______ my daughter when she came home from camp.",
        answer: "embraced",
      },
      {
        id: 2,
        question: "We ______ you to leave the area.",
        answer: "forbid",
      },
      {
        id: 3,
        question: "Did you ______ along the hall until you got to the room?",
        answer: "proceed",
      },
      {
        id: 4,
        question: "A turtle is a very common ______",
        answer: "reptile",
      },
      {
        id: 5,
        question:
          "We made a ______ listing of the people who owed the library books because it would take too long to copy all the names.",
        answer: "partial",
      },
      {
        id: 6,
        question:
          "Betty Sue is always very ______ when she prepares her arguments for a debate.",
        answer: "logical",
      },
      {
        id: 7,
        question: "I ______ if ever go to the movies.",
        answer: "rarely",
      },
      {
        id: 8,
        question: "Have you seen the cave dweller ______ in the museum?",
        answer: "exhibit",
      },
      {
        id: 9,
        question: "I went to high school ______ to entering the army.",
        answer: "prior",
      },
      {
        id: 10,
        question: "Be sure to take the ______ not to swim after eating.",
        answer: "precaution",
      },
      {
        id: 11,
        question: "Sergeant York got a medal for being ______ in war.",
        answer: "valiant",
      },
      {
        id: 12,
        question: "Did you ______ the splinter from his foot?",
        answer: "extract",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
