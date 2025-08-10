export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The uneventful flow of news was interrupted by a report of a ship in ______",
        answer: "distress",
      },
      {
        id: 2,
        question:
          "Our temperature for the day dropped from a ______ of 85 degrees to a minimum of70 degrees.",
        answer: "maximum",
      },
      {
        id: 3,
        question:
          "The dishonest employee planned to ______ with several thousand dollars of the company's money.",
        answer: "flee",
      },
      {
        id: 4,
        question:
          "It was easy to see that the club members resented Phil's ______ them with silly questions.",
        answer: "tormenting",
      },
      {
        id: 5,
        question:
          "Colonel Bishop's deep sense of ______ to his men signifies an honest and honorable nature.",
        answer: "loyalty",
      },
      {
        id: 6,
        question:
          "Elizabeth was finally persuaded to ______ for her remark and to pledge to be more careful in the future.",
        answer: "apologize",
      },
      {
        id: 7,
        question:
          "What I admire in Marty is that he never abandoned his ______ in their time of need.",
        answer: "colleagues",
      },
      {
        id: 8,
        question:
          "Mr. Harris' manipulation of the bank funds ______ his greed.",
        answer: "signified",
      },
      {
        id: 9,
        question:
          "Debra had a tendency to ______ all her questions to the librarian instead of looking them up herself.",
        answer: "refer",
      },
      {
        id: 10,
        question:
          "The registration for this course has ______ to the point where we must consider eliminating it from the curriculum.",
        answer: "diminished",
      },
      {
        id: 11,
        question:
          "The names of the days of the week are based on the names of the gods and goddesses of Norse ______.",
        answer: "mythology",
      },
      {
        id: 12,
        question:
          "The distressing fact is that we are all ______ to natural disasters.",
        answer: "vulnerable",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
