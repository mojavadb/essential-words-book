export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "Each of our workers is trained to give your car a examination. (Which two words might fit this sentence?)",
        answer: "thorough",
      },
      {
        id: 2,
        question:
          "Tom jones was the best singer in the choir when he was young.",
        answer: "undoubtedly",
      },
      {
        id: 3,
        question: "He could the problem from all angles.",
        answer: "approach",
      },
      {
        id: 4,
        question: "Mrs. Spector always wanted to be with her friends.",
        answer: "popular",
      },
      {
        id: 5,
        question: "Why did you cleaning your room today?",
        answer: "neglect",
      },
      {
        id: 6,
        question: "The bought his boss a birthday present.",
        answer: "employee",
      },
      {
        id: 7,
        question: "Rocco's only was that he walked with a slight limp.",
        answer: "defect",
      },
      {
        id: 8,
        question:
          "None of the other poker players suspected that their friend would them in order to win.",
        answer: "defraud",
      },
      {
        id: 9,
        question:
          "When Cynthia realized that nobody liked her, she knew she had been ___ _",
        answer: "deceived",
      },
      {
        id: 10,
        question:
          "I could from the tone of his voice that he was in a bad mood.",
        answer: "detect",
      },
      {
        id: 11,
        question: "His was happy with the work Terence had been doing for him.",
        answer: "client",
      },
      {
        id: 12,
        question:
          "I do not want to do anything less than a job on my term paper. (Which two words might fit this sentence?)",
        answer: "comprehensive",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
