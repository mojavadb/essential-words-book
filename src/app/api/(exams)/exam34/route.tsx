export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question:
          "It is to Mitchell's credit that he gained a harvest of friends in his ______ years.",
        answer: "adolescent",
      },
      {
        id: 2,
        question:
          "The ______ who gets the job must have an adequate knowledge of journalism.",
        answer: "candidate",
      },
      {
        id: 3,
        question:
          "Detective Wayne threatened to take ______ action if the outlaws did not surrender. ",
        answer: "radical",
      },
      {
        id: 4,
        question:
          "You can scarcely call Jay's hour-long acceptance speech a ______ response to his victory.",
        answer: "spontaneous",
      },
      {
        id: 5,
        question:
          "If you consent to have yourself ______ against the Asiatic flu, you will be relieved of further tension or worry.",
        answer: "vaccinated",
      },
      {
        id: 6,
        question: "Brad identified the ______ as a miniature radiation gauge.",
        answer: "utensil",
      },
      {
        id: 7,
        question:
          "Kim is ______ about her poor grades, yet she rejects offers of help.",
        answer: "sensitive",
      },
      {
        id: 8,
        question:
          "The warden tried to soothe the violent men by speaking to them in a ______ manner.",
        answer: "temperate",
      },
      {
        id: 9,
        question:
          "From the piles of rubbish it is obvious that the occupant of this room was an ______ person.",
        answer: "untidy",
      },
      {
        id: 10,
        question:
          "The data show that ______ classes tend to encourage greater competition~ in learning.",
        answer: "coeducational",
      },
      {
        id: 11,
        question:
          "A rise in the wholesale prices ______ the sharp increase on the retail level.",
        answer: "precedes",
      },
      {
        id: 12,
        question:
          "In the hazy sunlight, we watched the swallows ______ over the water. ",
        answer: "skim",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
