import fs from "fs";
import matter from "gray-matter";
import path from "path";

const researchDirectory = path.join(process.cwd(), "content/research");

export type ResearchFrontmatter = {
  title: string;
  date: string;
  summary: string;
  paperUrl?: string;
  authors?: string;
  tags?: string[];
};

export type ResearchNote = {
  slug: string;
  frontmatter: ResearchFrontmatter;
  content: string;
};

export function getAllResearch(): ResearchNote[] {
  const fileNames = fs.readdirSync(researchDirectory);

  const notes = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(researchDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ResearchFrontmatter,
      content,
    };
  });

  return notes.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );
}

export function getResearchBySlug(slug: string): ResearchNote {
  const fullPath = path.join(researchDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as ResearchFrontmatter,
    content,
  };
}