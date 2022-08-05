import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';
import PlausibleProvider from 'next-plausible';

import '../styles/globals.css';
import '../styles/code.css';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { lngDict, ...rest } = pageProps;
  const router = useRouter();

  return (
    <PlausibleProvider domain="shopmakers.tech">
      <I18nProvider lngDict={lngDict} locale={router?.locale as string}>
        <Component {...rest} />
      </I18nProvider>
    </PlausibleProvider>
  );
}
export default App;
