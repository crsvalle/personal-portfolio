import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Ensure that this resolves to the root directory of the project
const rootDirectory = path.join(process.cwd(), 'content', 'projects');

// This function retrieves a project by its slug
export async function getProjectBySlug(slug) {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.error('Error getting project by slug:', error);
    return null;
  }
}

export async function getProjects(limit) {
  const files = fs.readdirSync(rootDirectory);

  const projects = files
    .map(file => getProjectMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return projects.slice(0, limit);
  }

  return projects;
}

export function getProjectMetadata(filepath) {
  const slug = filepath.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
