import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Status from "@/components/Status";

export default async function Home() {
  return (
    <main className="relative">
      <div
        className="absolute bg-center w-full h-full -top-160 -z-1 bg-repeat bg-cover"
        style={{ backgroundImage: 'url("/header-bg-color.png")' }}
      />
      <Header />
      <Introduction />
      <Status />
    </main>
  );
}
