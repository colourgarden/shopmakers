import { bundleMDX } from 'mdx-bundler';
import remarkPrism from 'remark-prism';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import rehypeImage from 'utils/image';

import Container from 'components/Blog/Container';
import { getBlogs, getBlogBySlug } from 'utils/mdx';

import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPathsResult,
} from 'next';

const Blog: React.FC<BlogContainer> = (props) => {
  return <Container {...props} />;
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (params?.slug) {
    const language = await import(`../../../content/locales/${locale}.json`);
    const remarkPlugins = [remarkPrism];

    const fullPath = path.join(
      process.cwd(),
      'content/blog',
      `${params.slug}.mdx`,
    );
    const source = fs.readFileSync(fullPath, 'utf8');

    const { code, frontmatter, matter } = await bundleMDX({
      source: source,
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          remarkPlugins,
        ] as never;
        options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeImage];
        return options;
      },
    });

    return {
      props: {
        code,
        frontmatter,
        readingTime: readingTime(matter.content),
        lngDict: language.default,
      },
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = getBlogs();

  const paths: GetStaticPathsResult['paths'] = [];
  blogs.forEach((blog) => {
    const slug = blog.replace(/\.mdx/, '');
    const source = getBlogBySlug(slug);
    const { data } = matter(source.trim());

    if (data.isPublished) {
      paths.push({
        params: {
          slug,
        },
        locale: data.locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export default Blog;
