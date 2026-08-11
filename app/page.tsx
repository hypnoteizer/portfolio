import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <h1 className="text-4xl font-bold">its Orkan.</h1>
      <p className="mt-4 max-w-md text-lg text-zinc-600">
        I am a engineering candidate, building his website. Hang around to see my projects, blogs and journey.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/about"
          className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          About Me
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium hover:bg-zinc-100"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}