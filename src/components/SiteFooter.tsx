import Image from 'next/image';
import { useI18n } from 'next-localization';
import { usePlausible } from 'next-plausible';

import SiteNavigation from './SiteNavigation';
import LanguageSwitcher from './LanguageSwitcher';

const SiteFooter = ({ alternate }: SiteFooterProps) => {
  const i18n = useI18n();
  const plausible = usePlausible();

  return (
    <footer className="bg-prussian-blue text-coconut">
      <div className="container mx-auto py-20 px-4 md:px-0">
        <div className="flex flex-col gap-x-10 md:flex-row lg:gap-x-60">
          <div className="pb-8 md:w-1/4 md:pb-0">
            <div className="pb-6">
              <Image
                src="/images/logos/logo-bw.svg"
                height={63}
                width={214}
                alt="Shopmakers logo"
              />
            </div>
            {i18n.t('site-footer.slogan')}
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-auto-fill-100 gap-y-8 md:grid-cols-3 md:gap-y-0">
              <div>
                <h3 className="pb-2.5 uppercase">
                  {i18n.t('site-footer.columns-title.resources')}
                </h3>
                <SiteNavigation classes="flex flex-col" />
                <a
                  onClick={() =>
                    plausible('ContactUs', {
                      props: {
                        location: 'footerNav',
                      },
                    })
                  }
                  href="mailto:hello@shopmakers.tech">
                  {i18n.t('cta.contact-us')}
                </a>
              </div>
              <div>
                <h3 className="pb-2.5 uppercase">
                  {i18n.t('site-footer.columns-title.languages')}
                </h3>
                <div className="flex flex-col">
                  {alternate && <LanguageSwitcher alternate={alternate} />}
                </div>
              </div>
              <div>
                <h3 className="pb-2.5 uppercase">
                  {i18n.t('site-footer.columns-title.contacts')}
                </h3>
                <address className="not-italic">
                  Carrer Pallars 193
                  <br />
                  08005 Barcelona, Spain
                  <br />
                  <a
                    onClick={() =>
                      plausible('ContactUs', {
                        props: {
                          location: 'footerContacts',
                        },
                      })
                    }
                    href="mailto:hello@shopmakers.tech">
                    hello@shopmakers.tech
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col justify-between gap-y-2 border-t pt-2 text-sm lg:flex-row lg:gap-y-0">
          <p>
            somoscuatro 2020 S.L. - Carrer Bailén 41, 1º 2ªB, 08010 Barcelona,
            Spain - VAT: ES B01885813
          </p>
          <p>{i18n.t('site-footer.cookies')}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
