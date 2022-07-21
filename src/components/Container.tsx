import Head from 'next/head';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

import { useI18n } from 'next-localization';

type ContainerProps = {
  seo?: { [key: string]: string | string[] };
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children, seo = {} }) => {
  const i18n = useI18n();

  const meta: { [key: string]: string } = {
    type: 'website',
    image: i18n.t('seo.image.url'),
    imageAlt: i18n.t('seo.image.alt'),
    ...seo,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
      </Head>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default Container;
