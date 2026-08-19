import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const rootDirectory = path.join(process.cwd(), 'content', 'projects');

const REQUIRED_FIELDS = [
  'title',
  'summary',
  'image',
  'author',
  'publishedAt',
  'status',
  'link',
  'technology',
];

const VALID_STATUSES = ['current', 'completed', 'archived'];

function validateFrontmatter(data, slug) {
  const missing = REQUIRED_FIELDS.filter(field => {
    const value = data[field];
    if (Array.isArray(value)) return value.length === 0;
    return value === undefined || value === null || value === '';
  });

  if (missing.length > 0) {
    console.warn(
      `[projects] "${slug}" is missing required field(s): ${missing.join(', ')}`
    );
  }

  if (data.technology && !Array.isArray(data.technology)) {
    console.warn(
      `[projects] "${slug}" has "technology" but it's not an array. Wrap it in a list.`
    );
  }

  if (data.status && !VALID_STATUSES.includes(data.status)) {
    console.warn(
      `[projects] "${slug}" has status "${data.status}", expected one of: ${VALID_STATUSES.join(', ')}`
    );
  }
}

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

    validateFrontmatter(data, slug);

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
      if (a.status === 'current') return -1;
      if (b.status === 'current') return 1;
      return new Date(b.publishedAt ?? '') - new Date(a.publishedAt ?? '');
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

  validateFrontmatter(data, slug);

  return { ...data, slug };
}