export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "We have tried for over 200 years to ______ the United States Constitution.",
        answer: "preserve",
      },
      {
        id: 2,
        question: "The ______ weather predictions upset him.",
        answer: "gloomy",
      },
      {
        id: 3,
        question:
          "Will Karen ______ to having her baby picture published in the school newspaper?",
        answer: "consent",
      },
      {
        id: 4,
        question: "I found a ______ collection of old books in the attic.",
        answer: "unique",
      },
      {
        id: 5,
        question: "Dave knew that if he mistreated her, she would ______ it.",
        answer: "resent",
      },
      {
        id: 6,
        question:
          "The president ______ the criminal activities that were going on.",
        answer: "denounced",
      },
      {
        id: 7,
        question:
          "Lori feared that if she walked the streets, she would be ______ ",
        answer: "molested",
      },
      {
        id: 8,
        question: "Owning a house created ______ difficulties.",
        answer: "unforeseen",
      },
      {
        id: 9,
        question: "The new movie invited a ______ of disapproval.",
        answer: "torrent",
      },
      {
        id: 10,
        question:
          "A telephone call told us that the employees' picnic was ______ until next week.",
        answer: "postponed",
      },
      {
        id: 11,
        question: "The ______ was filled with records of the past.",
        answer: "capsule",
      },
      {
        id: 12,
        question:
          "It was a ______ job for just one person to unload the big truck.",
        answer: "massive",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
