import { useI18n } from 'next-localization';
import Image from 'next/image';

import Container from 'components/Container';
import Section from 'components/Section';

import type { GetStaticProps } from 'next';

const Home: React.FC = () => {
  const i18n = useI18n();

  return (
    <Container seo={i18n.t('home.seo') as unknown as { [key: string]: string }}>
      <Section id='hero' classes='bg-light-cornflower-blue-200'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col justify-center lg:w-1/2'>
            <h1 className='pb-8 text-2xl md:text-3xl'>
              {i18n.t('home.sections.hero.title')}
            </h1>
            <h2 className='pb-8 text-lg md:text-xl'>
              {i18n.t('home.sections.hero.subtitle')}
            </h2>
            <a
              data-analytics='"QuoteRequest"'
              className='inline-block w-fit rounded-full bg-selective-yellow py-2 px-4 text-prussian-blue'
              href='mailto:hello@shopmakers.tech?subject=Quote Request'>
              {i18n.t('cta.quote-request')}
            </a>
          </div>
          <div className='w-1/2'>
            <div className='hidden lg:block'>
              <Image
                src='/images/illustrations/hero.svg'
                width={584}
                height={328}
                alt='Two people shopping on a beautiful Shopify based ecommerce.'
              />
            </div>
          </div>
        </div>
      </Section>
      <Section id='why-us'>
        <>
          <h2 className='pb-16 text-2xl'>
            {i18n.t('home.sections.why-us.title')}
          </h2>
          <div className='grid gap-x-20 gap-y-16 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2'>
            {Array.from(Array(5), (e, index) => {
              return (
                <div key={index}>
                  <h3 className='pb-2 text-lg uppercase'>
                    {i18n.t(`home.sections.why-us.cards.${index}.title`)}
                  </h3>
                  <p>{i18n.t(`home.sections.why-us.cards.${index}.content`)}</p>
                </div>
              );
            })}
          </div>
        </>
      </Section>
      <Section id='our-services' classes='bg-tangerine-200'>
        <>
          <h2 className='pb-16 text-2xl'>
            {i18n.t('home.sections.our-services.title')}
          </h2>
          <div className='flex gap-x-14'>
            <div className='hidden w-1/2 flex-col justify-center lg:flex'>
              <Image
                src='/images/illustrations/services.svg'
                width={526}
                height={462}
                alt='A person running out of a mobile device with cart full of great products.'
              />
            </div>
            <div className='grid gap-6 md:grid-cols-2 md:grid-rows-2 lg:w-1/2'>
              {Array.from(Array(4), (e, index) => {
                return (
                  <div className='rounded-2xl bg-coconut p-10' key={index}>
                    <h3 className='pb-4 text-lg font-bold uppercase'>
                      {i18n.t(
                        `home.sections.our-services.cards.${index}.title`,
                      )}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: i18n.t(
                          `home.sections.our-services.cards.${index}.content`,
                        ),
                      }}></p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </Section>
      <Section id='why-shopify'>
        <>
          <h2 className='pb-16 text-2xl'>
            {i18n.t('home.sections.why-shopify.title')}
          </h2>
          <div className='flex gap-x-36'>
            <div className='lg:w-1/2'>
              {Array.from(Array(3), (e, index) => {
                return (
                  <div className='pb-12' key={index}>
                    <h3 className='pb-4 text-lg uppercase'>
                      {i18n.t(`home.sections.why-shopify.cards.${index}.title`)}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: i18n.t(
                          `home.sections.why-shopify.cards.${index}.content`,
                        ),
                      }}></p>
                  </div>
                );
              })}
            </div>
            <div className='hidden w-1/2 flex-col justify-center lg:flex'>
              <Image
                src='/images/illustrations/shopify.svg'
                width={560}
                height={356}
                alt='A person managing with ease a great developed ecommerce.'
              />
            </div>
          </div>
        </>
      </Section>
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

export default Home;
