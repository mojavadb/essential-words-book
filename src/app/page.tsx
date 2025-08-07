const BASE_URL = "http://localhost:3000";

export default async function Home() {
  const response = await fetch(`${BASE_URL}/api/lsn1`);
  const data = await response.json();

  console.log(data);

  return (
    <div>
      <h1>Welcome to the Essential Words App</h1>
      <p>Your one-stop solution for learning essential vocabulary.</p>
    </div>
  );
}
