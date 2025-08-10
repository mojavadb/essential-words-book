export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "The dying soldier made a last ______ effort to rise.",
        answer: "feeble",
      },
      {
        id: 2,
        question:
          "Though the victim's breathing had ______ , the fireman continued giving oxygen.",
        answer: "ceased",
      },
      {
        id: 3,
        question:
          "We often regret a ______ statement made in the heat of an argument.",
        answer: "rash",
      },
      {
        id: 4,
        question:
          "Now that you have ______ all your excuses, tell us the truth.",
        answer: "exhausted",
      },
      {
        id: 5,
        question:
          "The bout was fought to determine who would be the ______ of the ring.",
        answer: "monarch",
      },
      {
        id: 6,
        question:
          "An increase in pollution will ______ our normal ways of life.",
        answer: "disrupt",
      },
      {
        id: 7,
        question: "Macy's Department Store always says, It pays to be ______",
        answer: "thrifty",
      },
      {
        id: 8,
        question:
          "I have learned to read Spanish ______ , but I cannot speak it so well.",
        answer: "rapidly",
      },
      {
        id: 9,
        question:
          "The ______ of the pain compelled Frank to call the doctor in the middle of the night.",
        answer: "severity",
      },
      {
        id: 10,
        question:
          "Under certain conditions, oxygen will ______ with hydrogen to form water.",
        answer: "unite",
      },
      {
        id: 11,
        question:
          "______ a warning glance from the teacher, Harold continued to annoy the girl next to him.",
        answer: "Despite",
      },
      {
        id: 12,
        question:
          "It is best to be neither too ______ nor too careless about one's money.",
        answer: "miserly",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
