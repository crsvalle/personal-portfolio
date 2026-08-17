import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const rootDirectory = path.join(process.cwd(), 'content', 'projects');

async function renderMarkdown(content) {
  const processed = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);
  return processed.toString();
}

export async function getProjectBySlug(slug) {
  try {
    const filePath = path.join(rootDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data, content } = matter(fileContent);
    const contentHtml = await renderMarkdown(content);

    return {
      ...data,
      slug,
      contentHtml,
    };
  } catch (error) {
    console.error('Error getting project by slug:', error);
    return null;
  }
}

export async function getProjects(limit) {
  const files = fs.readdirSync(rootDirectory).filter(file => file.endsWith('.md'));

  const projects = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      return getProjectBySlug(slug);
    })
  );

  const sorted = projects
    .filter(Boolean)
    .sort((a, b) => {
      if (a.publishedAt === "current") return -1;
      if (b.publishedAt === "current") return 1;
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return sorted.slice(0, limit);
  }

  return sorted;
}

export function getProjectMetadata(filepath) {
  const slug = filepath.replace(/\.md$/, '');
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const { data } = matter(fileContent);
  return { ...data, slug };
}