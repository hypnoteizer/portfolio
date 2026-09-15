import fs from "fs";
import matter from "gray-matter";
import path from "path";

const cadDirectory = path.join(process.cwd(), "content/cad");

export type CadFrontmatter = {
  title: string;
  date: string;
  summary: string;
  software?: string;
  gallery: string[];
};

export type CadProject = {
  slug: string;
  frontmatter: CadFrontmatter;
  content: string;
};

export function getAllCadProjects(): CadProject[] {
  const fileNames = fs.readdirSync(cadDirectory);

  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(cadDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as CadFrontmatter,
      content,
    };
  });

  return projects.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );
}

export function getCadProjectBySlug(slug: string): CadProject {
  const fullPath = path.join(cadDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as CadFrontmatter,
    content,
  };
}