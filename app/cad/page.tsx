import { getAllCadProjects } from "@/lib/cad";
import Link from "next/link";

export default function CadPortfolio() {
  const projects = getAllCadProjects();

  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-10">CAD Portföyü</h1>

      <ul className="flex flex-col gap-8">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/cad/${project.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">
                {project.frontmatter.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                {project.frontmatter.date}
                {project.frontmatter.software &&
                  ` · ${project.frontmatter.software}`}
              </p>
              <p className="text-zinc-600 mt-2 leading-relaxed">
                {project.frontmatter.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}