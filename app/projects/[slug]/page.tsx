import { getProjectBySlug } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">{project.frontmatter.title}</h1>
      <p className="text-sm text-zinc-500 mb-6">{project.frontmatter.date}</p>

      <div className="flex gap-3 mb-10">
        {project.frontmatter.githubUrl && (
          <a
            href={project.frontmatter.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800"
          >
            GitHub
          </a>
        )}
        {project.frontmatter.downloadUrl && (
          <a
            href={project.frontmatter.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100"
          >
            İndir
          </a>
        )}
      </div>

      <article className="prose">
        <MDXRemote source={project.content} />
      </article>
    </main>
  );
}