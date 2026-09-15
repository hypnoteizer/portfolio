import Gallery from "@/components/Gallery";
import { getCadProjectBySlug } from "@/lib/cad";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function CadDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCadProjectBySlug(slug);

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">{project.frontmatter.title}</h1>
      <p className="text-sm text-zinc-500 mb-8">
        {project.frontmatter.date}
        {project.frontmatter.software &&
          ` · ${project.frontmatter.software}`}
      </p>

      <Gallery
        images={project.frontmatter.gallery}
        basePath={`/cad/${slug}`}
      />

      <article className="prose mt-10">
        <MDXRemote source={project.content} />
      </article>
    </main>
  );
}