export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The chances of my winning the election were so ______ that I decided to quit before the votes were counted.",
        answer: "dismal",
      },
      {
        id: 2,
        question:
          "I won the ______ that my bachelor friend would be married by June.",
        answer: "wager",
      },
      {
        id: 3,
        question:
          "Kit Carson's keen eyesight protected him from the in the ______ forest.",
        answer: "peril",
      },
      {
        id: 4,
        question:
          "While escaping from the bank, the robbers forced the teller to ______ on the floor of their car.",
        answer: " recline",
      },
      {
        id: 5,
        question:
          "Since the shack was vacant,* we did not expect to hear the terrible ______ which came from it.",
        answer: "shriek",
      },
      {
        id: 6,
        question:
          "With a ______ smile, the gangster invited Martha into his Cadillac.",
        answer: " sinister",
      },
      {
        id: 7,
        question:
          "You cannot ______ the truth when you are questioned by the keen* lawyer.",
        answer: " conceal ",
      },
      {
        id: 8,
        question: "It is said that many ghosts ______ the old Butler house.",
        answer: "inhabit ",
      },
      {
        id: 9,
        question: "In ______ weather I always wear three or four sweaters.",
        answer: "frigid",
      },
      {
        id: 10,
        question:
          "After standing guard duty for four hours, I became completely ______",
        answer: "numb",
      },
      {
        id: 11,
        question:
          "As the closet was opened, the ______ fell out, frightening the janitor out of one year's growth.",
        answer: "corpse",
      },
      {
        id: 12,
        question:
          "With the promise of a raise in pay, my boss tried to ______ me to stay on in the job.",
        answer: "tempt",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
