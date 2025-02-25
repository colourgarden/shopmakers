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

  const AlternateLink = (locale: string, url: string) => {
    return (
      <link
        key={locale}
        rel="alternate"
        href={`https://shopmakers.tech${url}`}
        hrefLang={locale}
      />
    );
  };

  const canonical =
    router.locale === 'en'
      ? router.asPath.replace(/\/$/, '')
      : `/${router.locale}${router.asPath.replace(/\/$/, '')}`;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="HandheldFriendly" content="true" />
        <link rel="canonical" href={`https://shopmakers.tech${canonical}`} />
        {isArticle && typeof meta.alternate === 'object'
          ? Object.entries(meta.alternate)?.map(([locale, slug]) => {
              return AlternateLink(locale, `/${locale}${slug}`);
            })
          : router.locales?.map((locale) => {
              const url =
                router.asPath === '/'
                  ? `/${locale}`
                  : `/${locale}${router.asPath}`;
              return AlternateLink(locale, url);
            })}
        <link
          rel="alternate"
          href={`https://shopmakers.tech${
            isArticle && meta.locale !== 'en'
              ? meta?.alternate?.en
              : router.asPath.replace(/\/$/, '')
          }`}
          hrefLang="x-default"
        />
        {isArticle && (
          <>
            {meta.publishedAt && (
              <meta
                property="article:published_time"
                content={new Date(meta.publishedAt).toISOString()}
              />
            )}
            {meta?.modifiedAt && (
              <meta
                property="article:modified_time"
                content={new Date(meta.modifiedAt).toISOString()}
              />
            )}
            <meta property="article:author" content="shopmakers team" />
            {(meta.tags as unknown as string[]).map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          </>
        )}
      </Head>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter alternate={isArticle ? meta.alternate : router.asPath} />
    </>
  );
};

export default Container;
