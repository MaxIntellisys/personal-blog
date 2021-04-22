import Meta from "../components/Meta";

export default function Home() {
  return (
    <main className="container mx-auto px-4 border-4 border-indigo-600">
      <Meta title="" />
      <h1 className="text-green-700 border-black">Max Sierra</h1>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
      </div>
    </main>
  );
}
