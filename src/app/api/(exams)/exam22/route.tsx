export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "",
        answer: "",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
