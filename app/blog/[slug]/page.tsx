import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">{post.frontmatter.title}</h1>
      <p className="text-sm text-zinc-500 mb-8">{post.frontmatter.date}</p>

      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}