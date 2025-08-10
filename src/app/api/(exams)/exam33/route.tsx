export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The culprit ______ his oath in court as if his tongue were numb.",
        answer: "mumbled",
      },

      {
        id: 2,
        question:
          "The ______ of material stuffed under Mr. Marlowe's shirt made him look bulky enough to play the part of Santa.",
        answer: "wad",
      },
      {
        id: 3,
        question:
          "With the evidence mounting against him, Dr. Parkman was persuaded to ______ the best lawyer in the state.",
        answer: "retain",
      },
      {
        id: 4,
        question:
          "In a fine showing of loyalty, many ______ responded to the fire.",
        answer: "volunteers",
      },
      {
        id: 5,
        question:
          "Our party was a ______ blend of good fellowship, song, and dance.",
        answer: "jolly",
      },
      {
        id: 6,
        question:
          "The defense attorney made a desperate plea to the jury not to allow the hazy evidence to ______ them against his client.",
        answer: "prejudice",
      },
      {
        id: 7,
        question:
          "Edith's fierce loyalty has ______ the investigation of the crime.",
        answer: "hindered",
      },
      {
        id: 8,
        question:
          "Flynn was usually talkative but the accident left him ______",
        answer: "mute",
      },
      {
        id: 9,
        question:
          "There were visible signs that the child had been severely ______",
        answer: "abused",
      },
      {
        id: 10,
        question:
          "The ______ screams of the jet planes lead many people to envy the quiet country life.",
        answer: "shrill",
      },
      {
        id: 11,
        question: "Father gave Steve a ______ for neglecting to wash the car.",
        answer: "lecture",
      },
      {
        id: 12,
        question:
          "A ______ line in Shakespeare's plays may not get a chuckle in our century.",
        answer: "witty",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
