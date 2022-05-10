import '../styles/globals.scss'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/index'
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { NextSeo } from 'next-seo';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';


function MyApp({ Component, pageProps, router }: AppProps) {
  return <Provider store={store}>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;500&family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200;1,500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    </Head>
    <NextSeo
      title='Portfolio'
      titleTemplate='Serenella Vezzi | %s'
      defaultTitle="Serenella Vezzi"
      description="Graphic Designer"
      canonical="https://serenellavezzi.vercel.app/"
      openGraph={{
        type: 'website',
        url: "https://serenellavezzi.vercel.app/",
        title: "Serenella Vezzi",
        description: "Graphic Designer",
        images: [
          {
            width: 400,
            height: 400,
            url: "https://serenellavezzi.vercel.app/vett7.png",
            alt: "Serenella Vezzi",
          },
        ],
      }}

    />

    <Header></Header>
    <Sidebar></Sidebar>
    <CookieConsent
      contentStyle={{ margin: "0px", position: "relative" }}
      location="bottom"
      buttonText="Ok,Ho capito."
      cookieName="myAwesomeCookieName2"
      style={{ background: "#000", fontSize: "13px", fontWeight: 800 }}
      buttonStyle={{ color: "#fff", fontWeight: 800, fontSize: "13px", background: "#008069", margin: "5px" }}
      expires={150}
    >
      Questo sito usa cookies per migliorare la tua esperienza di navigazione.
      <Link href="/privacy-policy"><span style={{ fontSize: "13px", color: "#008069", textDecoration: "underline" }} >Vedi cookies e privacy policy</span></Link>
    </CookieConsent>


    <AnimatePresence exitBeforeEnter >
      <Component key={router.route} {...pageProps} />

    </AnimatePresence>

  </Provider>
}

export default MyApp
