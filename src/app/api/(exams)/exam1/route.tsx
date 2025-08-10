export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "As I looked at all the ______ the salesman showed me, I knew that I was getting more and more mixed up.",
        answer: "data",
      },
      {
        id: 2,
        question:
          " I used ______ when I told my fat uncle that his extra weight made him look better. ",
        answer: "tact",
      },
      {
        id: 3,
        question:
          "When the guard saw that the cot was ______ , he realized that the prisoner had left the jail.",
        answer: "vacant",
      },
      {
        id: 4,
        question:
          "Although he took an ______ on the Bible, Sal lied to the jury. ",
        answer: "oath",
      },
      {
        id: 5,
        question:
          "My aunt was so ______ of our new couch that she bought one just like it. ",
        answer: "jealous",
      },
      {
        id: 6,
        question:
          " I enjoyed reading the story of the ______ man who put his cloak over a mud puddle so that the queen would not dirty her feet. ",
        answer: "gallant",
      },
      {
        id: 7,
        question:
          "The loss of Claudia's eyesight was a ______ which she learned to live with. ",
        answer: "hardship",
      },
      {
        id: 8,
        question:
          "The driver was forced to ______ his car when two of the tires became flat. ",
        answer: "abandon",
      },
      {
        id: 9,
        question:
          "Betty could not ______ for the Miss Teenage America Contest because she was twenty years old.",
        answer: "qualify",
      },
      {
        id: 10,
        question:
          " The blade was so ______ that I cut myself in four places while shaving. ",
        answer: "keen",
      },
      {
        id: 11,
        question:
          "______ to being kept waiting, the angry woman marched out of the store.",
        answer: "Unaccustomed",
      },
      {
        id: 12,
        question:
          "Because he was a _______ , the movie actor was invited to many parties. ",
        answer: "bachelor",
      },
    ],
  };
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
