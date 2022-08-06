// External dependencies
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useI18n } from 'next-localization';

// Utils functions
import formatDate from 'utils/date';
import truncateString from 'utils/truncate';

// Icons
import ArrowLink from '../../icons/arrow.svg';

// Component
const Card = ({ title, description, slug, publishedAt }: BlogCardProps) => {
  const router = useRouter();
  const locale = router.locale ?? 'en-US';
  const i18n = useI18n();

  return (
    <article className="w-full">
      <div className="mb-4 inline-block bg-prussian-blue px-3 py-0.5 text-sm uppercase text-coconut">
        {formatDate(locale, new Date(publishedAt))}
      </div>
      <Link href={`/blog/${slug}`} passHref>
        <a
          className="rounded hover:underline focus:outline-none focus:ring-2"
          href="#dummy">
          <h3 className="pb-4 text-xl">{title}</h3>
        </a>
      </Link>
      <p className="pb-3">{truncateString(description)}</p>
      <Link href={`/blog/${slug}`} passHref>
        <a
          className="rounded hover:underline focus:outline-none focus:ring-2"
          href="#dummy">
          {i18n.t('cta.read-more')}
          <ArrowLink className="inline-block" width={16} />
        </a>
      </Link>
    </article>
  );
};

export default Card;
