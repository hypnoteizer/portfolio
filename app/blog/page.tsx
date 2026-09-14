import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">
                {post.frontmatter.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                {post.frontmatter.date}
              </p>
              <p className="text-zinc-600 mt-2 leading-relaxed">
                {post.frontmatter.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
