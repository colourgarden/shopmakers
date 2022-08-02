import { useI18n } from 'next-localization';
import Link from 'next/link';
import { useAppContext } from '../contexts/AppContext';

const SiteNavigation = ({ classes = '' }) => {
  const i18n = useI18n();
  const { blogs } = useAppContext();

  return (
    <nav className={classes}>
      <Link href={`/#${i18n.t('home.sections.why-us.id')}`} passHref>
        <a href='#dummy'>{i18n.t('navigation.why-us')}</a>
      </Link>
      <Link href={`/#${i18n.t('home.sections.our-services.id')}`} passHref>
        <a href='#dummy'>{i18n.t('navigation.our-services')}</a>
      </Link>
      <Link href={`/#${i18n.t('home.sections.why-shopify.id')}`} passHref>
        <a href='#dummy'>{i18n.t('navigation.why-shopify')}</a>
      </Link>
      {blogs.length > 0 ? (
        <Link href={`/#${i18n.t('home.sections.blog.id')}`} passHref>
          <a href='#dummy'>{i18n.t('navigation.blog')}</a>
        </Link>
      ) : (
        ''
      )}
    </nav>
  );
};

export default SiteNavigation;
