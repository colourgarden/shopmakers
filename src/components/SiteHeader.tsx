import { useI18n } from 'next-localization';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import SiteNavigation from './SiteNavigation';

const SiteHeader: React.FC = () => {
  const i18n = useI18n();

  return (
    <header className="sticky top-0 z-50 bg-coconut drop-shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-5 pr-4 pl-2 lg:pl-0 lg:pr-0">
        <div className="flex">
          <div className="pl-2 lg:hidden">
            <Link href="/" passHref>
              <a href="#dummy">
                <Image
                  src="/images/logos/logo-icon.svg"
                  height={52}
                  width={40}
                  alt="Shopmakers logo"
                />
              </a>
            </Link>
          </div>
          <div className="hidden lg:block">
            <Link href="/" passHref>
              <a href="#dummy">
                <Image
                  src="/images/logos/logo.svg"
                  height={63}
                  width={214}
                  alt="Shopmakers logo"
                />
              </a>
            </Link>
          </div>
        </div>
        <SiteNavigation classes="hidden grid-flow-col gap-16 lg:grid" />
        <Button
          dataAnalytics='"ContactUs"'
          href="mailto:hello@shopmakers.tech"
          text={i18n.t('cta.contact-us')}
        />
      </div>
    </header>
  );
};

export default SiteHeader;
