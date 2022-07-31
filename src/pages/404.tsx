import { useEffect } from 'react';
import NextLink from 'next/link';
import { useI18n } from 'next-localization';

import Container from 'components/Container';
import Arrow from '../icons/arrow.svg';

import type { GetStaticProps } from 'next';

const Custom404: React.FC = () => {
  const i18n = useI18n();

  useEffect(() => {
    if (window.plausible) {
      window.plausible('404', { props: { path: document.location.pathname } });
    }
  }, []);

  return (
    <Container seo={i18n.t('404.seo') as unknown as { [key: string]: string }}>
      <div className='container mx-auto max-w-2xl px-4 py-20 lg:px-0'>
        <h1 className='sm:text-5xl my-8 text-3xl font-bold'>
          {i18n.t('404.title')}
        </h1>
        <p className='mb-8'>{i18n.t('404.subtitle')}</p>
        <NextLink href='/' passHref>
          <a href='#dummy' className='inline-flex items-center hover:underline'>
            {i18n.t('404.button')}
            <span className='ml-2 mt-1' aria-hidden>
              <Arrow width={16} />
            </span>
          </a>
        </NextLink>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const language = await import(`../../content/locales/${locale}.json`);

  return {
    props: {
      lngDict: language.default,
    },
  };
};

export default Custom404;
