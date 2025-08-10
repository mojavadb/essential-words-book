export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "The massive tree on the corner was a ______ to traffic.",
        answer: "menace",
      },
      {
        id: 2,
        question: "At parties, the shy girl would ______ being asked to dance.",
        answer: "dread",
      },
      {
        id: 3,
        question:
          "My uncle has a ______ to repeat the same story over and over again.",
        answer: "tendency",
      },
      {
        id: 4,
        question: "The modest man used to ______ his own strength.",
        answer: "underestimate",
      },
      {
        id: 5,
        question: "No person can ever ______ in all things he does.",
        answer: "excel",
      },
      {
        id: 6,
        question: "Being ______ is far better than being stubborn.",
        answer: "flabby",
      },
      {
        id: 7,
        question: "We went to the beach on ______ occasions last summer.",
        answer: "numerous",
      },
      {
        id: 8,
        question: "Playing with dolls is traditionally a ______ pastime.",
        answer: "feminine",
      },
      {
        id: 9,
        question:
          "Only the brightest students were invited to ______ for the prize.",
        answer: "compete",
      },
      {
        id: 10,
        question:
          "Carole was ten years old before her parents finally let her ______ a horse.",
        answer: "mount",
      },
      {
        id: 11,
        question:
          "The amateur tennis player completed many matches without being ______",
        answer: "victorious",
      },
      {
        id: 12,
        question:
          "When Stuart started growing a mustache, it was obvious he was becoming more ______",
        answer: "masculine",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
