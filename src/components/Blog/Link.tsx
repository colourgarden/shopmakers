// External dependencies
import NextLink from 'next/link';

// Icons
import ExternalLink from '../../icons/external-link.svg';

// Component
const BlogLink: React.FC<BlogLinkProps> = ({ href, children, ...props }) => {
  const classes = 'link';

  if (href?.match(/^#/)) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  } else if (href?.match(/(^http)/i)) {
    return (
      <a
        className={classes}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        {...props}>
        {children}
        <ExternalLink width={16} className='inline-block pl-0.5 pb-0.5' />
      </a>
    );
  } else {
    return (
      <NextLink href={href} passHref>
        <a className={classes} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }
};

export default BlogLink;
