import { getAllResearch } from "@/lib/research";
import Link from "next/link";

export default function Research() {
  const notes = getAllResearch();

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-10">Research</h1>

      <ul className="flex flex-col gap-8">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link href={`/research/${note.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">
                {note.frontmatter.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                {note.frontmatter.date}
                {note.frontmatter.authors && ` · ${note.frontmatter.authors}`}
              </p>
              <p className="text-zinc-600 mt-2 leading-relaxed">
                {note.frontmatter.summary}
              </p>

              {note.frontmatter.tags && (
                <div className="flex gap-2 mt-3">
                  {note.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-100 text-zinc-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}