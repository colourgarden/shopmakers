import { useI18n } from 'next-localization';
import Image from 'next/image';
import Link from 'next/link';
import { usePlausible } from 'next-plausible';

import CloseIcon from '../icons/x.svg';
import BurgerMenu from '../icons/burger-menu.svg';

import Button from './Button';
import SiteNavigation from './SiteNavigation';

const SiteHeader: React.FC = () => {
  const i18n = useI18n();
  const plausible = usePlausible();

  const mobileMenuClickHandle = () => {
    document
      .querySelectorAll('#mobile-menu-button > svg')
      .forEach((element) => {
        element.classList.toggle('hidden');
      });
    document.getElementById('mobile-navigation')?.classList.toggle('hidden');
  };

  return (
    <header className="sticky top-0 z-50 bg-coconut drop-shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-5 px-4 lg:pl-0 lg:pr-0">
        <div className="flex">
          <div className="-ml-2 mr-2 flex items-center lg:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              className="text-gray-400 hover:text-white hover:bg-gray-700 focus:ring-white inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={mobileMenuClickHandle}>
              <span className="sr-only">Open main menu</span>
              <BurgerMenu width={22} height={22} />
              <CloseIcon className="hidden h-6 w-6" width={22} height={22} />
            </button>
          </div>
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
        <div
          className="absolute top-24 left-0 hidden w-full bg-coconut lg:hidden"
          id="mobile-navigation">
          <div className="space-y-1 pb-8 pt-4 sm:px-3">
            <SiteNavigation classes="container mx-auto flex flex-col gap-3 px-4" />
          </div>
        </div>
        <SiteNavigation classes="hidden grid-flow-col gap-16 lg:grid" />
        <Button
          onClick={() =>
            plausible('ContactUs', {
              props: {
                location: 'siteHeader',
              },
            })
          }
          href="mailto:hello@shopmakers.tech"
          text={i18n.t('cta.contact-us')}
        />
      </div>
    </header>
  );
};

export default SiteHeader;
