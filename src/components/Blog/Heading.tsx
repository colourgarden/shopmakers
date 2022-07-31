// External dependencies
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';

// Utils functions
import formatDate from 'utils/date';

// Component
const BlogRow: React.FC<BlogHeadingProps> = ({
  tags,
  publishedAt,
  readingTime,
}) => {
  const router = useRouter();
  const i18n = useI18n();

  const isEN = router?.locale === 'en';
  const locale = router.locale ?? 'en-US';

  return (
    <div className='mb-16 mt-6 flex flex-col justify-between md:flex-row md:items-center'>
      <div className='flex flex-row gap-2'>
        {tags.map((tag) => (
          <p
            key={tag}
            className='inline-block w-fit rounded-full bg-light-cornflower-blue-200 py-0.5 px-3 text-sm text-prussian-blue'>
            #{tag}
          </p>
        ))}
      </div>
      <div className='flex flex-row'>
        <p className='text-gray-500 p-1 text-sm'>
          {i18n.t('blog.published-on')}{' '}
          {formatDate(isEN ? 'en-US' : locale, new Date(publishedAt))}
        </p>
        <span className='text-gray-500'>·</span>
        <p className='text-gray-500 p-1 text-sm'>
          {Math.ceil(readingTime.minutes).toFixed(0)} {i18n.t('blog.min-read')}
        </p>
      </div>
    </div>
  );
};

export default BlogRow;
