import Head from 'next/head';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';

const Container: React.FC<ContainerProps> = ({ children, seo = {} }) => {
  const router = useRouter();
  const i18n = useI18n();

  const meta: Meta = {
    type: 'website',
    image: i18n.t('seo.image.url'),
    imageAlt: i18n.t('seo.image.alt'),
    ...seo,
  };

  const isArticle = meta.type === 'article';

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
        <link
          rel='alternate'
          href={`https://shopmakers.tech${
            isArticle && meta.locale !== 'en'
              ? meta?.alternate?.en
              : router.asPath
          }`}
          hrefLang='en'
        />
        <link
          rel='alternate'
          href={`https://shopmakers.tech/es${
            isArticle && meta.locale !== 'es'
              ? meta?.alternate?.es
              : router.asPath
          }`}
          hrefLang='es'
        />
        <link
          rel='alternate'
          href={`https://shopmakers.tech/it${
            isArticle && meta.locale !== 'it'
              ? meta?.alternate?.it
              : router.asPath
          }`}
          hrefLang='it'
        />
        <link
          rel='alternate'
          href={`https://shopmakers.tech${
            isArticle && meta.locale !== 'en'
              ? meta?.alternate?.en
              : router.asPath
          }`}
          hrefLang='x-default'
        />
      </Head>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter alternate={isArticle ? meta.alternate : router.asPath} />
    </>
  );
};

export default Container;
