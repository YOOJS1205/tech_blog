import * as React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// import { defaultTheme } from '~/lib/config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="128x128" href="favicon.png" />

          <link rel="manifest" href="/manifest.json" />

          <link href="/fonts/SpoqaHanSansNeo/index.css" rel="stylesheet" />

          <link rel="preconnect" href="https://cdn.jsdelivr.net" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
          <link
            href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>

        {/* Google tag (gtag.js) */}
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CTDYL1EN3W"
        ></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CTDYL1EN3W');
  `,
          }}
        ></Script>

        <body>
          {/* 로딩 전 다크모드 적용 */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
;(function () {
  const isCurrentUserDarkMode = ${
    defaultTheme === 'light'
      ? 'false'
      : defaultTheme === 'dark'
      ? 'true'
      : `window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches`
  };
  const isDarkMode = localStorage.getItem('preferences') ? JSON.parse(localStorage.getItem('preferences')).isDarkMode : isCurrentUserDarkMode;

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
})();
`,
            }}
          /> */}
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
