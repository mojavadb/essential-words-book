export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The ______ compartment of the plane was inspected for bombs.",
        answer: "baggage",
      },
      {
        id: 2,
        question:
          "A storm on the night of the prom meant ______ for the senior class plans.",
        answer: "calamity",
      },
      {
        id: 3,
        question:
          "Good government would assure that there are no more ______ in the land.",
        answer: "paupers",
      },
      {
        id: 4,
        question:
          "The strain of the three-hour examination almost brought Leslie to a state of ______",
        answer: "collapse",
      },
      {
        id: 5,
        question:
          "Now that the quintuplets have come along, we are calling on an ______ to devise plans for an extension to our home.",
        answer: "architect",
      },
      {
        id: 6,
        question: "The hungry man was ______ for stealing a loaf of bread.",
        answer: "prosecuted",
      },
      {
        id: 7,
        question:
          "Bringing expensive toys to newborn infants is just another way to ______ your money.",
        answer: "squander",
      },
      {
        id: 8,
        question:
          "Bloodhounds were brought in to hunt for the ______ in the dense forest.",
        answer: "fugitive",
      },
      {
        id: 9,
        question:
          "When it was learned that Mr. Smythe had failed to divorce his first wife, he was charged with ______",
        answer: "bigamy",
      },
      {
        id: 10,
        question: "Traveling ______ is an educational experience.",
        answer: "abroad",
      },
      {
        id: 11,
        question:
          "What is there to ______ in a high mark that was not honestly achieved?",
        answer: "envy",
      },
      {
        id: 12,
        question:
          "Everyone can see that ______ has brought jim and Stella great happiness.",
        answer: "matrimony",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
