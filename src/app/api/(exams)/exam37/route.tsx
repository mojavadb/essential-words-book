export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: "The exhausted regiment ______ down to a few troops.",
        answer: "dwindled",
      },
      {
        id: 2,
        question: "Secret documents listed the ______ to the large fortune.",
        answer: "heir",
      },
      {
        id: 3,
        question: "Iris made a ______ attempt to ignore their biting comments.",
        answer: "deliberate",
      },
      {
        id: 4,
        question: "The ______ of waste materials has polluted our rivers.",
        answer: "surplus",
      },
      {
        id: 5,
        question:
          "Charles blundered off in the wrong direction without ______ my warning cries.",
        answer: "heeding",
      },
      {
        id: 6,
        question: "Lincoln tried in vain to keep the North and South ______",
        answer: "unified",
      },
      {
        id: 7,
        question:
          "It did not take long before the unruly crowd turned into a mob of howling ______",
        answer: "vandals",
      },
      {
        id: 8,
        question:
          "The confirmed bachelor could not ______ having anyone touch a single utensil in his home.",
        answer: "abide",
      },
      {
        id: 9,
        question: "If the ______ does not end soon, I can predict a famine.",
        answer: "drought",
      },
      {
        id: 10,
        question:
          "The population rise will reach its ______ in a few years and then it will level off.",
        answer: "summit",
      },
      {
        id: 11,
        question:
          "Lt. Jenkins lost every morsel of self-respect and became a ______ to his flag.",
        answer: "traitor",
      },
      {
        id: 12,
        question:
          "The loyal captain, ______ in defeat, won the sympathy of the people.",
        answer: "majestic",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
