import { useI18n } from 'next-localization';
import Image from 'next/image';
import Link from 'next/link';
import SiteNavigation from './SiteNavigation';

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
        <SiteNavigation classes='hidden grid-flow-col gap-16 lg:grid' />
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
