import { getAllProjects } from "@/lib/projects";
import Link from "next/link";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <ul className="flex flex-col gap-8">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">
                {project.frontmatter.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                {project.frontmatter.date}
              </p>
              <p className="text-zinc-600 mt-2 leading-relaxed">
                {project.frontmatter.summary}
              </p>

              {project.frontmatter.tags && (
                <div className="flex gap-2 mt-3">
                  {project.frontmatter.tags.map((tag) => (
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