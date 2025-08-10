export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "The principal probed the cause of the ______ in the cafeteria.",
        answer: "tumult",
      },
      {
        id: 2,
        question: "A ______ of insects descended on the picnic food.",
        answer: "swarm",
      },
      {
        id: 3,
        question:
          "When asked for their ______ on the agreement, the members gave their approval spontaneously.",
        answer: "verdict",
      },
      {
        id: 4,
        question:
          "The first project in our creative writing class was a ______ of a close friend or relative.",
        answer: "biography",
      },
      {
        id: 5,
        question:
          "Until the flood waters ______ , the authorities prohibited anyone from returning to the vicinity.",
        answer: "receded",
      },
      {
        id: 6,
        question:
          "Mr. Finley was redeemed in the eyes of his employees by his ______ in overlooking their costly error.",
        answer: "charity",
      },
      {
        id: 7,
        question: "The grateful traveler would ______ in prayer every night. ",
        answer: "kneel",
      },
      {
        id: 8,
        question: "Mother is an expert at soothing our ______ spirits.",
        answer: "dejected",
      },
      {
        id: 9,
        question:
          "It is absurd to surrender your rights to ______ a when you have abundant reason to remain free.",
        answer: "tyrant",
      },
      {
        id: 10,
        question:
          "We faced the dilemma of being ______ in the downpour while we covered our boat or having to bail the water out of the boat after the rain had ceased.",
        answer: "drenched",
      },
      {
        id: 11,
        question:
          "Melinda shrieked as the unstable pedestrian ______ into the path of the oncoming car.",
        answer: "wobbled",
      },
      {
        id: 12,
        question:
          "A glance from the mother was enough of a reminder to bring the ______ child back to her side.",
        answer: "obedient",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
