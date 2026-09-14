import { getEntryBySlug } from "@/lib/notebook";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function NotebookEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">{entry.frontmatter.title}</h1>
      <p className="text-sm text-zinc-500 mb-8">{entry.frontmatter.date}</p>

      <article className="prose">
        <MDXRemote source={entry.content} />
      </article>
    </main>
  );
}