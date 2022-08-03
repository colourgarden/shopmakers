/* eslint-disable jsx-a11y/alt-text */

// Internal dependencies
import Headline from 'components/Blog/Headline';
import Link from 'components/Blog/Link';
import Code from 'components/Blog/Code';
import Preformatted from 'components/Blog/Preformatted';
import Image, { ImageProps } from 'next/image';

// Types definition
import type { ComponentMap } from 'mdx-bundler/dist/client';

// Component
const Components: ComponentMap = {
  h1: (props) => <Headline level="h1" {...props} />,
  h2: (props) => <Headline level="h2" {...props} />,
  h3: (props) => <Headline level="h3" {...props} />,
  h4: (props) => <Headline level="h4" {...props} />,
  p: ({ children }) => <p className="my-5">{children}</p>,
  ul: ({ children }) => <ul className="list-disc py-2 pl-10">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal py-2 pl-10">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  img: (props) => (
    <span className="my-10">
      <Image
        {...(props as ImageProps)}
        layout="responsive"
        loading="lazy"
        quality={100}
      />
    </span>
  ),
  a: Link as React.FC, // fixed type on mdx-bundler
  code: Code as unknown as React.FC, // fixed type on mdx-bundler
  pre: Preformatted as React.FC, // fixed type on mdx-bundler
};

export default Components;
