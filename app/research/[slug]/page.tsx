import { getResearchBySlug } from "@/lib/research";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ResearchDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getResearchBySlug(slug);

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">{note.frontmatter.title}</h1>
      <p className="text-sm text-zinc-500 mb-6">
        {note.frontmatter.date}
        {note.frontmatter.authors && ` · ${note.frontmatter.authors}`}
      </p>

      {note.frontmatter.paperUrl && (
        <a
          href={note.frontmatter.paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 mb-10"
        >
          View Paper
        </a>
      )}

      <article className="prose">
        <MDXRemote source={note.content} />
      </article>
    </main>
  );
}