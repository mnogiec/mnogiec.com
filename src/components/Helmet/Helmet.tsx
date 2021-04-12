import React from 'react';
import ReactHelmet from 'react-helmet';


type Props = {
  pageTitle?: string
  lang: string
}


const Helmet:React.FC<Props> = ({ pageTitle, lang }) => (
    <ReactHelmet>
      {/* HTML tag */}
      <html lang={lang} />

      {/* Basics */}
      <meta charSet="utf-8" />
      <title>
        {pageTitle}
      </title>

      {/* Metas */}
      <meta name="author" content="MNogiec.com" />
      <meta name="copyright" content="MNogiec" />
      <meta name="description" content="TO DO" />
      <meta name="keywords" content="TO, DO" />
      <meta name="generator" content="Visual Studio Code" />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* IE & Edge */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge chrome=1" />

      {/* OG */}
      <meta property="og:title" content="MNogiec.com - Portfolio" />
      <meta property="og:site_name" content="MNogiec.com" />
      {/* <meta property="og:url" content={URL} /> */}
      {/* <meta property="og:image" content={ogImage} /> */}
      <meta property="og:description" content="TO DO" />
      <meta property="og:type" content="website" />

      {/* Translator */}
      <meta name="google" content="notranslate" />

      {/* Canonical & Alternate */}
      {/* <link rel="canonical" href={URL} /> */}

      {/* <link rel="icon" type="image/png" sizes="32x32" href={tmpFavicon} /> */}
      {/* Icons */}
      {/* <link rel="icon" href={faviconIco} type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href={faviconAppleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="manifest" href={siteManifest} />
      <link rel="mask-icon" href={faviconSafariTab} color="#3A3D9B" />
      <meta
        name="msapplication-square150x150logo"
        content={faviconMsTile}
      /> */}
      <meta name="apple-mobile-web-app-title" content="MNogiec.com" />
      <meta name="application-name" content="MNogiec" />
      <meta name="msapplication-TileColor" content="#3A3D9B" />
      <meta name="theme-color" content="#3A3D9B" />
    </ReactHelmet>
  );


export default Helmet;
