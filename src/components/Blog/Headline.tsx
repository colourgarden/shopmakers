// External dependencies
import { useI18n } from 'next-localization';

// Icons
import LinkIcon from '../../icons/link.svg';

// Types definition
type HeadingProps = {
  level: string;
  children?: React.ReactNode;
};

const createId = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');
};

const BlogHeadline: React.FC<HeadingProps> = ({
  level,
  children,
  ...props
}) => {
  const i18n = useI18n();
  const id = createId(children as string);

  let size;
  let translate;
  const Component = level as React.ElementType;

  switch (level) {
    case 'h1':
      size = 'text-3xl';
      translate = '-translate-y-0.5 md:translate-y-h1';
      break;
    case 'h2':
      size = 'text-2xl';
      translate = 'md:translate-y-h2';
      break;
    case 'h3':
      size = 'text-xl';
      translate = 'translate-y-0.5 md:translate-y-h3';
      break;
    case 'h4':
      size = 'text-lg uppercase';
      translate = 'translate-y-1 md:translate-y-h4';
      break;
    default:
      break;
  }

  return (
    <Component
      className={`group relative break-all ${size} mt-8 mb-6 flex items-center`}
      {...props}>
      {children}
      <a
        id={id}
        href={`#${id}`}
        style={{ scrollMarginTop: '142px' }}
        className={`align-text-middle inline-block transform md:absolute md:left-0 md:-translate-x-8 ${translate} ml-2 rounded opacity-0 hover:opacity-70 focus:opacity-70 focus:outline-none focus:ring-2 group-hover:opacity-70 group-focus:opacity-70 md:ml-0`}>
        <LinkIcon width={24} />
        <span className="sr-only">{i18n.t('blog.anchor')}</span>
      </a>
    </Component>
  );
};

export default BlogHeadline;
