import Link from 'next/link';

import { useRouter } from 'next/router';
import getLanguageName from '../utils/helpers';

const LanguageItem = (index: string, locale: string, url: string) => {
  return (
    <li key={index}>
      <Link href={url} passHref locale={locale}>
        <a href="#dummy">{getLanguageName(locale)}</a>
      </Link>
    </li>
  );
};

const LanguageSwitcher = ({ alternate }: SiteFooterProps) => {
  const router = useRouter();
  return (
    <ul className="list-none">
      {typeof alternate !== 'object'
        ? router.locales?.map((locale, index) => {
            return LanguageItem(index.toString(), locale, `/${locale}`);
          })
        : typeof alternate === 'object' &&
          Object.entries(alternate)?.map(([index, locale]) => {
            return LanguageItem(index, index, `/${index}${locale}`);
          })}
    </ul>
  );
};

export default LanguageSwitcher;
