export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "",
        answer: "",
      },
      {
        id: 2,
        question: "",
        answer: "",
      },
      {
        id: 3,
        question: "",
        answer: "",
      },
      {
        id: 4,
        question: "",
        answer: "",
      },
      {
        id: 5,
        question: "",
        answer: "",
      },
      {
        id: 6,
        question: "",
        answer: "",
      },
      {
        id: 7,
        question: "",
        answer: "",
      },
      {
        id: 8,
        question: "",
        answer: "",
      },
      {
        id: 9,
        question: "",
        answer: "",
      },
      {
        id: 10,
        question: "",
        answer: "",
      },
      {
        id: 11,
        question: "",
        answer: "",
      },
      {
        id: 12,
        question: "",
        answer: "",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
