import { useI18n } from 'next-localization';
import Image from 'next/image';
import Link from 'next/link';

const SiteHeader: React.FC = () => {
  const i18n = useI18n();

  return (
    <header className='sticky top-0 z-50 bg-coconut drop-shadow-sm'>
      <div className='container mx-auto flex items-center justify-between py-5 pr-4 pl-2 lg:pl-0 lg:pr-0'>
        <div className='flex'>
          <div className='pl-2 lg:hidden'>
            <Link href='/' passHref>
              <a href='#dummy'>
                <Image
                  src='/images/logos/logo-icon.svg'
                  height={52}
                  width={40}
                  alt='Shopmakers logo'
                />
              </a>
            </Link>
          </div>
          <div className='hidden lg:block'>
            <Link href='/' passHref>
              <a href='#dummy'>
                <Image
                  src='/images/logos/logo.svg'
                  height={63}
                  width={214}
                  alt='Shopmakers logo'
                />
              </a>
            </Link>
          </div>
        </div>
        <div className='hidden grid-flow-col gap-16 lg:grid'>
          <Link href={`/#${i18n.t('home.sections.why-us.id')}`} passHref>
            <a href='#dummy'>{i18n.t('navigation.why-us')}</a>
          </Link>
          <Link href={`/#${i18n.t('home.sections.our-services.id')}`} passHref>
            <a href='#dummy'>{i18n.t('navigation.our-services')}</a>
          </Link>
          <Link href={`/#${i18n.t('home.sections.why-shopify.id')}`} passHref>
            <a href='#dummy'>{i18n.t('navigation.why-shopify')}</a>
          </Link>
          <Link href={`/#${i18n.t('home.sections.blog.id')}`} passHref>
            <a href='#dummy'>{i18n.t('navigation.blog')}</a>
          </Link>
        </div>
        <a
          data-analytics='"ContactUs"'
          className='inline-block w-fit rounded-full bg-selective-yellow py-2 px-4 text-prussian-blue hover:bg-selective-yellow-300'
          href='mailto:hello@shopmakers.tech'>
          {i18n.t('cta.contact-us')}
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
