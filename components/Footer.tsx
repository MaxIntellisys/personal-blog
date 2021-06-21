import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container mx-auto p-6 h-56 flex flex-col justify-between items-center border-2 border-black">
      <nav className="flex justify-between items-center border-2 border-black w-1/2 min-w-max">
        <Link href="/">
          <a className="bg-gray-300 p-2 rounded-lg shadow-lg">Home</a>
        </Link>
        <Link href="/projects">
          <a className="bg-gray-300 p-2 rounded-lg shadow-lg">Projects</a>
        </Link>
        <Link href="/me">
          <a className="bg-gray-300 p-2 rounded-lg shadow-lg">About</a>
        </Link>
      </nav>
      <nav className="flex justify-between items-center border-2 border-black w-52 min-w-max">
        <a href="https://www.linkedin.com/in/maximo-sierra/" target="_blank" rel="noreferrer">
          <img className="w-10" src="images/linkedin.png" />
        </a>
        <a href="https://github.com/MaxIntellisys" target="_blank" rel="noreferrer">
          <img className="w-20" src="images/github.png" />
        </a>
        <a href="https://twitter.com/maxsierra16" target="_blank" rel="noreferrer">
          <img className="w-10" src="images/twitter.png" />
        </a>
      </nav>
      <small className="justify-self-end text-gray-600">
        &#169; {new Date().getFullYear()} Max Sierra. All rights reserved.
      </small>
    </footer>
  );
}
