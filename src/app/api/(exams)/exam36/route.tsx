export function GET(request: Request) {
  const data = {
    exam: [
      {
        id: 1,
        question: " I insist* on a ______ answer to my question.",
        answer: "prompt",
      },
      {
        id: 2,
        question: "Harriet's anger was subsequently ______ by the apology.*",
        answer: "soothed",
      },
      {
        id: 3,
        question:
          "The minister said those who are not ______ from sin will perish.*",
        answer: "redeemed",
      },
      {
        id: 4,
        question:
          "Joseph could not ______ from embracing* his long-lost brother.",
        answer: "refrain",
      },
      {
        id: 5,
        question:
          "My cat and dog, though traditionally* enemies, have lived in perfect ______ for years.",
        answer: "harmony",
      },
      {
        id: 6,
        question: "Because he liked to be prompt,* Sal ate only a ______ meal.",
        answer: "hasty",
      },
      {
        id: 7,
        question:
          "The farmers were grateful* that the ______ had not destroyed their harvest.*",
        answer: "tempest",
      },
      {
        id: 8,
        question:
          "Jenny picked up the hot iron just as it was about to ______ my shirt.",
        answer: "scorch",
      },
      {
        id: 9,
        question: "The couple seemed so ______ that the breakup baffled* us.",
        answer: "sympathetic",
      },
      {
        id: 10,
        question: "Chris Pollaro ______ his former position with the company.",
        answer: "resumed",
      },
      {
        id: 11,
        question: "It is ______ to own firearms without a license.",
        answer: "illegal",
      },
      {
        id: 12,
        question:
          "It is impossible* to estimate* the harm caused by the illegal* use of ______ .",
        answer: "narcotics",
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
