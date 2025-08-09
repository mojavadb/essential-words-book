import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Status from "@/components/Status";

export default async function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <Status />
    </main>
  );
}
