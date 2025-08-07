const BASE_URL = "http://localhost:3000";

export default async function Home() {
  const response = await fetch(`${BASE_URL}/api/lsn1`);
  const data = await response.json();

  console.log(data);

  return <div></div>;
}
