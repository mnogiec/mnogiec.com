import React from 'react';
import ReactHelmet from 'react-helmet';


import appleTouchIcon57x57 from 'assets/images/favicons/apple-touch-icon-57x57.png';
import appleTouchIcon60x60 from 'assets/images/favicons/apple-touch-icon-60x60.png';
import appleTouchIcon72x72 from 'assets/images/favicons/apple-touch-icon-72x72.png';
import appleTouchIcon76x76 from 'assets/images/favicons/apple-touch-icon-76x76.png';
import appleTouchIcon114x114 from 'assets/images/favicons/apple-touch-icon-114x114.png';
import appleTouchIcon120x120 from 'assets/images/favicons/apple-touch-icon-120x120.png';
import appleTouchIcon144x144 from 'assets/images/favicons/apple-touch-icon-144x144.png';
import appleTouchIcon152x152 from 'assets/images/favicons/apple-touch-icon-152x152.png';

import favicon16x16 from 'assets/images/favicons/favicon-16x16.png';
import favicon32x32 from 'assets/images/favicons/favicon-32x32.png';
import favicon96x96 from 'assets/images/favicons/favicon-96x96.png';
import favicon128 from 'assets/images/favicons/favicon-128.png';
import favicon196x196 from 'assets/images/favicons/favicon-196x196.png';

import faviconIco from 'assets/images/favicons/favicon.ico';

import msTile70x70 from 'assets/images/favicons/mstile-70x70.png';
import msTile144x144 from 'assets/images/favicons/mstile-144x144.png';
import msTile150x150 from 'assets/images/favicons/mstile-150x150.png';
import msTile310x150 from 'assets/images/favicons/mstile-310x150.png';
import msTile310x310 from 'assets/images/favicons/mstile-310x310.png';


type Props = {
  pageTitle?: string
  lang: string
}


const Helmet:React.FC<Props> = ({ pageTitle, lang }) => {
  let canonicalLang:string = '';
  if (lang === 'de') {
    canonicalLang = '/de';
  } else if (lang === 'pl') {
    canonicalLang = '/pl';
  }


  return (
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
      <link rel="canonical" href={`https://mnogiec.com${canonicalLang}`} />
      <link rel="alternate" href="https://mnogiec.com" hrefLang="en" />
      <link rel="alternate" href="https://mnogiec.com/de" hrefLang="de" />
      <link rel="alternate" href="https://mnogiec.com/pl" hrefLang="pl" />

      {/* Apple info */}
      <meta name="apple-mobile-web-app-title" content="MNogiec.com" />
      <meta name="application-name" content="MNogiec" />
      <meta name="msapplication-TileColor" content="#3A3D9B" />
      <meta name="theme-color" content="#3A3D9B" />

      {/* MS info */}
      <meta name="application-name" content="MNogiec" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content={msTile144x144} />
      <meta name="msapplication-square70x70logo" content={msTile70x70} />
      <meta name="msapplication-square150x150logo" content={msTile150x150} />
      <meta name="msapplication-wide310x150logo" content={msTile310x150} />
      <meta name="msapplication-square310x310logo" content={msTile310x310} />

      {/* Favicons */}
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href={appleTouchIcon57x57} />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href={appleTouchIcon114x114} />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href={appleTouchIcon72x72} />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href={appleTouchIcon144x144} />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href={appleTouchIcon60x60} />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href={appleTouchIcon120x120} />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href={appleTouchIcon76x76} />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href={appleTouchIcon152x152} />
      <link rel="icon" type="image/png" href={favicon196x196} sizes="196x196" />
      <link rel="icon" type="image/png" href={favicon96x96} sizes="96x96" />
      <link rel="icon" type="image/png" href={favicon32x32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon16x16} sizes="16x16" />
      <link rel="icon" type="image/png" href={favicon128} sizes="128x128" />
    </ReactHelmet>
  );
};


export default Helmet;
