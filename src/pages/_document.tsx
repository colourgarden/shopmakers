import Document, { Html, Main, Head, NextScript } from 'next/document';

import generateRandomString from 'utils/random';
import createCSP from 'utils/csp';

import type {
  DocumentProps,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

type MyDocumentsProps = {
  nonce: string;
};

class MyDocument extends Document<DocumentProps & MyDocumentsProps> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & MyDocumentsProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = Buffer.from(generateRandomString(16)).toString('base64');

    return { ...initialProps, nonce };
  }

  render(): JSX.Element {
    const { nonce } = this.props;

    return (
      <Html className='scroll-smooth' dir='ltr'>
        <Head nonce={nonce}>
          <link
            rel='preload'
            href='/fonts/jost.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='shortcut icon' href='/favicons/favicon.ico' />
          <link
            rel='icon'
            type='image/png'
            href='/favicons/favicon-32x32.png'
            sizes='32x32'
          />
          <link
            rel='icon'
            type='image/png'
            href='/favicons/favicon-16x16.png'
            sizes='16x16'
          />
          <link
            rel='apple-touch-icon'
            href='/favicons/apple-touch-icon.png'
            sizes='180x180'
          />
          <meta
            httpEquiv='Content-Security-Policy'
            content={createCSP(nonce)}
          />
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                defer
                nonce={nonce}
                data-domain='shopmakers.tech'
                src='https://plausible.io/js/plausible.js'
              />
              <script
                nonce={nonce}
                dangerouslySetInnerHTML={{
                  __html: `window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
