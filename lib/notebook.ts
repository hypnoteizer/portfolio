import fs from "fs";
import matter from "gray-matter";
import path from "path";

const notebookDirectory = path.join(process.cwd(), "content/notebook");

export type EntryFrontmatter = {
  title: string;
  date: string;
  objective: string;
};

export type Entry = {
  slug: string;
  frontmatter: EntryFrontmatter;
  content: string;
};

export function getAllEntries(): Entry[] {
  const fileNames = fs.readdirSync(notebookDirectory);

  const entries = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(notebookDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as EntryFrontmatter,
      content,
    };
  });

  return entries.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );
}

export function getEntryBySlug(slug: string): Entry {
  const fullPath = path.join(notebookDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as EntryFrontmatter,
    content,
  };
}