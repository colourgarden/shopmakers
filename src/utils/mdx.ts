import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export const getBlogs = (): string[] => {
  return fs.readdirSync(path.join(process.cwd(), 'content/blog'));
};

export const getBlogBySlug = (slug: string): string => {
  return fs.readFileSync(
    path.join(process.cwd(), 'content/blog', `${slug}.mdx`),
    'utf8',
  );
};

export const getBlogsInformation = (locale?: string): BlogInformation[] => {
  const blogs = getBlogs();

  return blogs
    .map((blog): BlogInformation => {
      const slug = blog.replace(/\.mdx/, '');
      const source = getBlogBySlug(slug);
      const { data, content } = matter(source.trim());

      return {
        ...(data as Frontmatter),
        slug,
        readingTime: readingTime(content),
      };
    })
    .filter((blog) => blog.isPublished)
    .filter((blog) => blog.locale === locale)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );
};
