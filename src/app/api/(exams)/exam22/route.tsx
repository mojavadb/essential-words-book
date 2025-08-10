export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Wayne's parents yelled at him because he was known as a ______",
        answer: "delinquent",
      },
      {
        id: 2,
        question: "The courts will ______ you if you don't obey the law.",
        answer: "penalize",
      },
      {
        id: 3,
        question:
          "Are you satisfied with your ______ or are you thinking of getting a different job?",
        answer: "vocation",
      },
      {
        id: 4,
        question:
          "Five persons were being questioned by the police about the brutal ______",
        answer: "homicide",
      },
      {
        id: 5,
        question: "I ______ the fact that I received the tapes.",
        answer: "acknowledge",
      },
      {
        id: 6,
        question:
          "When Steve asked his girlfriend to marry him, he did not anticipate that she would ______ him.",
        answer: "reject",
      },
      {
        id: 7,
        question: "The ______ of the prison set up stricter rules.",
        answer: "warden",
      },
      {
        id: 8,
        question: "Mrs. Fried's ______ came home weary after each day's work.",
        answer: "spouse",
      },
      {
        id: 9,
        question: "It is often ______ persons who commit serious crimes.",
        answer: "unstable",
      },
      {
        id: 10,
        question:
          "Clara felt as if she had been ______ of the better things in life.",
        answer: "deprived",
      },
      {
        id: 11,
        question: "______ was served when the villain was put behind bars.",
        answer: "Justice",
      },
      {
        id: 12,
        question:
          "joseph was the ______ of large sums of money from his uncle's insurance policy. ",
        answer: "beneficiary",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
