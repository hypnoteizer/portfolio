import { getAllEntries } from "@/lib/notebook";
import Link from "next/link";

export default function Notebook() {
  const entries = getAllEntries();

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-10">Notebook</h1>

      <ul className="flex flex-col gap-8">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/notebook/${entry.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">
                {entry.frontmatter.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                {entry.frontmatter.date}
              </p>
              <p className="text-zinc-600 mt-2 leading-relaxed">
                {entry.frontmatter.objective}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}