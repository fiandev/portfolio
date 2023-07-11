import Head from "next/head";
import Script from "next/script";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@/styles/index.css";
import type { AppProps } from "next/app";

library.add(fab);

export default async function App({ Component, pageProps }: AppProps) {
  if (Component.getLayout) return Component.getLayout(<Component {...pageProps} />);
  
  const title = "fiandev's portfolio",
        openGraph = "",
        deScription = "Hi everyone, I'm Fian junior software engineer and fullstack web developer from Indonesia 🇮🇩, I'm very interested in the world of programming, my favorite language is javaScript, Python, And PHP.",
        keywords = "fiandev, webdev, web, dev, portfolio, frontend, backend, web developer, developer, coder, programmer, freelancer, fian, alfian, aditia, akbar, putra, alfiansa"
  
  return (
      <div>
        <Head>
          <meta name="google-site-verification" content="6JyPQefQInzqKGO1cXqAmDMa7gPZoqFRdjIDSyFkRo8" />
          <Script>
          {
            `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'Script','dataLayer','GTM-PNHKC77');
            `
          }
          </Script>
          
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BK7BMLEF6V"></Script>
          <Script>
            {
              `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BK7BMLEF6V');
              `
            }
          </Script>
          
          <meta charset="utf-8" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#067aff" />
          <meta name="msapplication-navbutton-color" content="#067aff" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#067aff" />
          <meta name="google" content="nositelinkssearchbox" />
          
          <meta name="keywords" content={ keywords } />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="english" />
          <meta name="revisit-after" content=" days" />
          <meta name="author" content="fiandev" />
          <meta name="hostname" content="vercel.app" />
          <meta name="deScription" content={ deScription } />
          
          <meta property="og:site_name" content={ title } />
          <meta property="og:title" content={ title } />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fiandev.my.id/" />
          
          <meta property="og:deScription" content={ deScription } />
          <meta property="og:image" content={ openGraph } />
        
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="fiandev.my.id" />
          <meta property="twitter:url" content="https://fiandev.my.id" />
          <meta name="twitter:title" content={ title } />
          <meta name="twitter:deScription" content={ deScription } />
          <meta name="twitter:image" content={ openGraph } />
          
          <meta property="og:image:secure_url" content={ openGraph } />
          <meta property="og:image:alt" content="fiandev photo's" />
          <meta property="article:section" content="portfolio" />
          <meta property="article:author" content="fiandev" />
          <meta property="article:tag" content="fiandev" />
          
          <link rel="preconnect" href="https://www.google.com" crossorigin />
          <link rel="preconnect" href="https://fonts.google.com" crossorigin />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          
          <link rel="preconnect" href="https://www.google-analytics.com" crossorigin />
          <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
          <link rel="preconnect" href="https://stats-g-doubleclick.net" crossorigin />
          
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.google.com" />
          <link rel="dns-prefetch" href="https://vercel.app" />
          
          <link rel="canonical" href="https://fiandev.my.id/" />
          
          <link rel="apple-touch-icon" sizes="180x180" href="https://fiandev.my.id/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://fiandev.my.id/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://fiandev.my.id/favicon-16x16.png" />
          
          <meta itemprop="image" content={ openGraph } />
          <meta itemprop="name" content={ title } />
          
          <link rel="manifest" href="https://fiandev.my.id/manifest.json" />
          
          <title>{ title }</title>
        </Head>
        
        <Component {...pageProps} />
      </div>
    )
}
