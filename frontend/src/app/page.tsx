import Image from "next/image";
import Link from 'next/link';
import "./globals.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 lex justify-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid lg:grid text-center">
        <Link href="../all-apartments">
          <h2 className="mb-3 text-2xl font-semibold">
            View List Of Apartments {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
