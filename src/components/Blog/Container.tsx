// External dependencies
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

// Internal dependencies
import SiteContainer from 'components/Container';
import BlogComponents from 'components/Blog/Components';
import BlogRow from 'components/Blog/Heading';

// Component
const Container: React.FC<BlogContainer> = ({
  code,
  frontmatter,
  readingTime,
}) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  const seo = {
    type: 'article',
    ...frontmatter,
  };

  return (
    <SiteContainer seo={seo as unknown as { [key: string]: string }}>
      <div className="container mx-auto px-4 py-10 md:py-20 lg:px-0">
        <article className="mx-auto w-full max-w-3xl">
          <h1 className="text-3xl">{frontmatter.title}</h1>
          <BlogRow
            tags={frontmatter.tags}
            publishedAt={frontmatter.publishedAt}
            readingTime={readingTime}
          />
          <Component components={BlogComponents} />
        </article>
      </div>
    </SiteContainer>
  );
};

export default Container;
