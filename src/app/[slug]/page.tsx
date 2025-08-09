const BASE_URL = "http://localhost:3000";

type Word = {
  id: number;
  pronunciation: string;
  imageUrl: string;
  wordPr: string;
  definitionPr: string;
  word: string;
  definition: string;
  synonymsPr: string[];
  synonyms: string[];
  examplesPr: string[];
  examples: string[];
};

export default async function Lesson({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(`${BASE_URL}/api/lsn${slug}`);
  const { words } = await response.json();

  return (
    <main>
      {words.map((word: Word, index: number) => (
        <div key={index}>{word.word}</div>
      ))}
    </main>
  );
}
