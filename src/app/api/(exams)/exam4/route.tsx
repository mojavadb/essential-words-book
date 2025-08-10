export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "If we have one more hot, ______ day, you will be able to persuade* me to move to Alaska.",
        answer: "humid",
      },
      {
        id: 2,
        question:
          "In the show the magician waved his wand to make a lady ______",
        answer: "vanish",
      },
      {
        id: 3,
        question:
          "The hair on his head was so ______ , a special pair of scissors was used to thin it.",
        answer: "dense",
      },
      {
        id: 4,
        question:
          "Since he has passed all his subjects, I'll ______ that he will graduate.",
        answer: "predict",
      },
      {
        id: 5,
        question:
          "The ______ in the movie was played by an actor who was able to look mean.",
        answer: " villain",
      },
      {
        id: 6,
        question: "______ rose out of the valve on top of the steam engine.",
        answer: " Vapor",
      },
      {
        id: 7,
        question:
          "The basketball player was ______ ; he could practically drop the ball through the hoop.",
        answer: "enormous",
      },
      {
        id: 8,
        question:
          "What ______ can you suggest to explain the frequent changes in women's clothing?",
        answer: " theory",
      },
      {
        id: 9,
        question: "Why don't you ______ all the space on that page?",
        answer: "utilize",
      },
      {
        id: 10,
        question:
          "Sooner or later the elevator will ______ and we'll be able to go up.",
        answer: "descend",
      },
      {
        id: 11,
        question:
          "I heard a doctor on a television show say that if we ______ one slice of bread each day, we'll lose weight.",
        answer: "eliminate",
      },
      {
        id: 12,
        question:
          "Copies of some magazines are so scarce,* the librarian won't allow them to ______ ",
        answer: "circulate",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
