import Meta from "@components/Meta";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/blog")
      .then((data) => data.json())
      .then(console.log);
  }, []);

  return (
    <main className="container mx-auto px-4 border-4 border-indigo-600">
      <Meta title="" />
      <h1 className="text-green-700 border-black">Max Sierra</h1>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
      </div>

      <style jsx scoped>{`
        main {
          min-height: 70vh;
        }
      `}</style>
    </main>
  );
}
