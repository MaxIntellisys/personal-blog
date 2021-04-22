import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="container font-mono mx-auto p-5 flex flex-col sm:flex-row justify-between items-center border-2 border-black">
      <Link href="/">
        <a className="text-2xl mb-2 font-semibold">
          <img
            src="/images/monkey.png"
            alt="Monkey Logo"
            className="inline pr-2 w-16"
          />
          Max Sierra
        </a>
      </Link>

      <div className="flex justify-between items-center border-2 border-black w-2/3 min-w-max">
        <Link href="/guides">
          <a className="bg-gray-100 px-4 py-2 rounded-md font-semibold">Guides</a>
        </Link>
        <Link href="/Projects">
          <a className="bg-gray-100 px-4 py-2 rounded-md font-semibold">Projects</a>
        </Link>
        <Link href="/me">
          <a className="bg-gray-100 px-4 py-2 rounded-md font-semibold">About me</a>
        </Link>
      </div>

      <button className="bg-gray-100 p-3 rounded-full outline-none">🌙 🌤️</button>
    </nav>
  );
}
